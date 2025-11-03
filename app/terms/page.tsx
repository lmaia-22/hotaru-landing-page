import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Hotaru",
  description: "Hotaru Terms of Service",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container py-24 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none space-y-6">
          <p className="text-foreground/80">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className="text-foreground/80">
              By accessing and using Hotaru, you accept and agree to be bound by
              the terms and provision of this agreement.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Use License</h2>
            <p className="text-foreground/80">
              Permission is granted to temporarily use Hotaru for personal and
              commercial purposes. This is the grant of a license, not a transfer
              of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Use the service for any unlawful purpose</li>
              <li>Attempt to bypass the 2-hour expiration mechanism</li>
              <li>Share malicious or harmful content</li>
              <li>Reverse engineer or extract source code</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Ephemeral Nature</h2>
            <p className="text-foreground/80">
              Hotaru is designed to be ephemeral. All content expires after 2
              hours. We are not responsible for any loss of data after this
              expiration period. Do not use Hotaru to store critical or permanent
              information.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-foreground/80">
              In no event shall Hotaru or its suppliers be liable for any damages
              (including, without limitation, damages for loss of data or profit,
              or due to business interruption) arising out of the use or inability
              to use Hotaru.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-foreground/80">
              Hotaru reserves the right to modify these terms at any time. Your
              continued use of the service after any such changes constitutes your
              acceptance of the new terms.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-foreground/80">
              For questions about these Terms of Service, please contact us through
              our waitlist form.
            </p>
          </section>
        </div>
        <div className="mt-12">
          <Link
            href="/"
            className="text-accent hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}

