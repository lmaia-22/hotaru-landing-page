"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Ephemeral by default",
    description: "Everything expires after 2 hours. No clutter, no risk.",
  },
  {
    icon: Users,
    title: "Share with control",
    description: "Share with everyone or just specific people.",
  },
  {
    icon: Zap,
    title: "Real-time",
    description: "New clips appear instantly.",
  },
  {
    icon: Shield,
    title: "Fast & private",
    description: "Redis for speed, clear privacy rules.",
  },
];

export function Features() {
  return (
    <section id="features" className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Features</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Built for teams that value privacy and simplicity
        </p>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="h-full transition-shadow hover:shadow-lg hover:shadow-accent/10">
                <CardHeader>
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.1 + 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <Icon className="h-8 w-8 text-accent mb-4" aria-hidden="true" />
                  </motion.div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

