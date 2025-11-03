import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5; // 5 requests per hour per IP

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const ip = forwarded 
    ? forwarded.split(",")[0].trim() 
    : realIp 
    ? realIp.trim()
    : "unknown";
  return ip;
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || record.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

// In-memory fallback storage for development
const inMemoryStorage: string[] = [];

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = getRateLimitKey(request);
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { email } = body;

    // Validation
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Try Supabase if env vars exist
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseKey) {
      try {
        const supabase = createClient(supabaseUrl, supabaseKey);

        const { error: insertError } = await supabase
          .from("waitlist")
          .insert([{ email: email.toLowerCase().trim() }]);

        if (insertError) {
          // Check if it's a unique constraint violation
          if (insertError.code === "23505") {
            return NextResponse.json(
              { error: "This email is already on the waitlist" },
              { status: 409 }
            );
          }

          throw insertError;
        }

        return NextResponse.json(
          { message: "Successfully added to waitlist" },
          { status: 200 }
        );
      } catch (error) {
        console.error("Supabase error:", error);
        // Fall through to in-memory storage
      }
    } else {
      console.warn(
        "Supabase env vars not found. Using in-memory storage (dev mode)."
      );
    }

    // Fallback to in-memory storage
    const normalizedEmail = email.toLowerCase().trim();
    if (inMemoryStorage.includes(normalizedEmail)) {
      return NextResponse.json(
        { error: "This email is already on the waitlist" },
        { status: 409 }
      );
    }

    inMemoryStorage.push(normalizedEmail);
    console.log(`[DEV] Added to waitlist (in-memory): ${normalizedEmail}`);
    console.log(`[DEV] Total waitlist entries: ${inMemoryStorage.length}`);

    return NextResponse.json(
      { message: "Successfully added to waitlist" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

