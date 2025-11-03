import Link from "next/link";
import { FireflyIcon } from "@/components/icons/firefly";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center space-x-2 font-semibold"
              aria-label="Hotaru homepage"
            >
              <FireflyIcon className="h-5 w-5" />
              <span>Hotaru</span>
            </Link>
            <p className="text-sm text-foreground/60">
              The shared clipboard that forgets — so you don&apos;t have to.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#features"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#cta"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  Join Waitlist
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-sm text-foreground/60 text-center">
          <p>&copy; {currentYear} Hotaru. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

