"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FireflyIcon } from "@/components/icons/firefly";

export function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2 font-semibold text-foreground hover:text-accent transition-colors"
          aria-label="Hotaru homepage"
        >
          <FireflyIcon className="h-6 w-6" />
          <span>Hotaru</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#features"
            className="text-sm text-foreground/80 hover:text-accent transition-colors"
          >
            Features
          </a>
          <a
            href="#how"
            className="text-sm text-foreground/80 hover:text-accent transition-colors"
          >
            How it Works
          </a>
          <a
            href="#pricing"
            className="text-sm text-foreground/80 hover:text-accent transition-colors"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-sm text-foreground/80 hover:text-accent transition-colors"
          >
            FAQ
          </a>
        </div>
        <Button asChild>
          <Link href="#cta">Join Waitlist</Link>
        </Button>
      </div>
    </nav>
  );
}

