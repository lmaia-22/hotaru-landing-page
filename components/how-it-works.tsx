"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Clipboard, Users, Timer } from "lucide-react";

const steps = [
  {
    icon: Clipboard,
    title: "Paste",
    description: "Paste text/code into a secure area.",
    number: "1",
  },
  {
    icon: Users,
    title: "Choose visibility",
    description: "Everyone or specific users only.",
    number: "2",
  },
  {
    icon: Timer,
    title: "Auto-expire",
    description: "Disappears in 2 hours, effortlessly.",
    number: "3",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How it Works</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Three simple steps to share securely
        </p>
      </motion.div>
      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <CardContent className="pt-6 relative">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.15 + 0.3,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1
                      }}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-background font-bold text-lg cursor-default"
                    >
                      {step.number}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.4 }}
                    >
                      <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-foreground/80">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

