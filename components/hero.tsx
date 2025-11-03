"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { WaitlistForm } from "@/components/waitlist-form";
import { FireflyIcon } from "@/components/icons/firefly";
import Link from "next/link";

export function Hero() {
  return (
    <section className="container py-24 md:py-32">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex items-center gap-2 mb-6"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              <FireflyIcon className="h-8 w-8" />
            </motion.div>
            <span className="text-sm font-medium text-accent">Hotaru</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            The Shared Clipboard That Forgets — So You Don&apos;t Have To
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-foreground/80 mb-8"
          >
            Share snippets, configs, and notes that auto-expire after 2 hours.
            Secure. Real-time. Effortless.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <WaitlistForm />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button variant="ghost" asChild size="lg">
              <Link href="#how">See how it works</Link>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-border bg-card p-8 shadow-lg shadow-accent/5"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                className="h-4 bg-accent/20 rounded"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                className="h-4 bg-card rounded"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "83%" }}
                transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                className="h-4 bg-card rounded"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="mt-6 p-4 bg-background rounded border border-border"
              >
                <div className="flex items-center gap-2 mb-2">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity
                    }}
                    className="h-2 w-2 bg-accent rounded-full"
                  />
                  <span className="text-xs text-foreground/60">Live</span>
                </div>
                <div className="space-y-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
                    className="h-3 bg-accent/10 rounded"
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
                    className="h-3 bg-accent/10 rounded"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

