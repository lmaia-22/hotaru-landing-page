"use client";

import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/waitlist-form";

export function CTA() {
  return (
    <section id="cta" className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.8, 
          type: "spring",
          stiffness: 100
        }}
        className="max-w-2xl mx-auto text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Bring intentional impermanence to your team.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-foreground/80 mb-8"
        >
          Join the waitlist to be notified when we launch the beta.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-4"
        >
          <WaitlistForm />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-sm text-foreground/60"
        >
          No spam. We&apos;ll only email about the beta.
        </motion.p>
      </motion.div>
    </section>
  );
}

