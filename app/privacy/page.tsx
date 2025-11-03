import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Hotaru",
  description: "Hotaru Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container py-24 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none space-y-6">
          <p className="text-foreground/80">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-foreground/80">
              At Hotaru, we are committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, and safeguard your information
              when you use our service.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Ephemeral by Design</h2>
            <p className="text-foreground/80">
              Hotaru is built with privacy in mind. All content shared through
              Hotaru automatically expires after 2 hours. We do not retain,
              index, or track the content of your clips beyond this expiration
              period.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-foreground/80">
              We collect minimal information necessary to provide our service:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Email address (for waitlist and account management)</li>
              <li>Usage metrics (aggregated, non-identifying data)</li>
              <li>Technical information (IP address, browser type) for security</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-foreground/80">
              We use your information solely to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Provide and improve our service</li>
              <li>Communicate with you about the beta launch</li>
              <li>Ensure security and prevent abuse</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-foreground/80">
              We implement industry-standard security measures to protect your
              information. All content is encrypted in transit and at rest.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-foreground/80">
              If you have questions about this Privacy Policy, please contact us
              through our waitlist form.
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

