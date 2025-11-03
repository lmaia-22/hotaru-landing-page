"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, EyeOff } from "lucide-react";

const securityPoints = [
  {
    icon: Shield,
    title: "Ephemeral-first",
    description: "Redis TTL, no unnecessary retention.",
  },
  {
    icon: Lock,
    title: "Controlled access",
    description: "Session-controlled access; no public indexing.",
  },
  {
    icon: EyeOff,
    title: "No tracking",
    description: "No content tracking; only aggregated metrics.",
  },
];

export function Security() {
  return (
    <section className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Security & Privacy</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Built with privacy by design
        </p>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-3">
        {securityPoints.map((point, index) => {
          const Icon = point.icon;
          return (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -5,
                rotateY: 5,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <CardContent className="pt-6 relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.1 + 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1
                    }}
                    className="inline-block"
                  >
                    <Icon className="h-8 w-8 text-accent mb-4" aria-hidden="true" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                  <p className="text-foreground/80">{point.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

