"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Code, Globe } from "lucide-react";

const integrations = [
  {
    icon: MessageSquare,
    title: "Slack",
    description: "Share clips directly from Slack",
    status: "Coming soon",
  },
  {
    icon: Code,
    title: "VS Code",
    description: "Quick share from your editor",
    status: "Coming soon",
  },
  {
    icon: Globe,
    title: "Browser Extension",
    description: "One-click sharing from anywhere",
    status: "Coming soon",
  },
];

export function Integrations() {
  return (
    <section className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Integrations</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Coming soon: seamless integrations with your favorite tools
        </p>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-3">
        {integrations.map((integration, index) => {
          const Icon = integration.icon;
          return (
            <motion.div
              key={integration.title}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8,
                rotateX: 5,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <CardHeader>
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.15 + 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2
                    }}
                  >
                    <Icon className="h-8 w-8 text-accent mb-4" aria-hidden="true" />
                  </motion.div>
                  <CardTitle className="flex items-center justify-between">
                    {integration.title}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                    >
                      <Badge variant="outline">{integration.status}</Badge>
                    </motion.div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{integration.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

