"use client";

import { motion } from "framer-motion";

export function SocialProof() {
  return (
    <section className="container py-12 border-y border-border">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1, y: -5 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-accent mb-2"
          >
            500+
          </motion.div>
          <div className="text-sm text-foreground/60">Waitlist signups</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1, y: -5 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-accent mb-2"
          >
            2h
          </motion.div>
          <div className="text-sm text-foreground/60">Auto-expire</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1, y: -5 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold text-accent mb-2"
          >
            100%
          </motion.div>
          <div className="text-sm text-foreground/60">Ephemeral</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1, y: -5 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-3xl font-bold text-accent mb-2"
          >
            Beta
          </motion.div>
          <div className="text-sm text-foreground/60">Coming soon</div>
        </motion.div>
      </div>
    </section>
  );
}

