import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Success — Hotaru",
  description: "You've joined the Hotaru waitlist",
};

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container flex-1 flex items-center justify-center py-24">
        <div className="max-w-md text-center space-y-6">
          <div className="flex justify-center">
            <CheckCircle2 className="h-16 w-16 text-accent" aria-hidden="true" />
          </div>
          <h1 className="text-4xl font-bold">You&apos;re on the list!</h1>
          <p className="text-lg text-foreground/80">
            Thanks for joining the Hotaru waitlist. We&apos;ll notify you as soon
            as we launch the beta.
          </p>
          <p className="text-sm text-foreground/60">
            No spam. We&apos;ll only email you about important updates.
          </p>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </main>
  );
}

