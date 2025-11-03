"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for small teams",
    features: [
      "Up to 10 users",
      "100 pastes/day",
      "2h auto-expire",
      "Basic sharing",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$8",
    period: "/user/mo",
    description: "For growing teams",
    features: [
      "Unlimited users",
      "Unlimited pastes",
      "7 days retention (optional)*",
      "API access",
      "Priority support",
    ],
    popular: true,
    note: "*Optional retention configurable",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "SSO",
      "Custom retention",
      "Private cloud",
      "Dedicated support",
      "SLA guarantee",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Simple, transparent pricing for teams of all sizes
        </p>
      </motion.div>
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.15,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              y: plan.popular ? -12 : -8,
              scale: plan.popular ? 1.03 : 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <Card className={`relative h-full transition-all ${plan.popular ? "border-accent border-2 shadow-lg shadow-accent/20" : ""}`}>
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{ 
                    delay: index * 0.15 + 0.3,
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                >
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Most Popular
                  </Badge>
                </motion.div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-foreground/60">{plan.period}</span>}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + featureIndex * 0.05 + 0.4 }}
                      className="flex items-start gap-2"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: index * 0.15 + featureIndex * 0.05 + 0.5,
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                      </motion.div>
                      <span className="text-foreground/80">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                {plan.note && (
                  <p className="mt-4 text-sm text-foreground/60">{plan.note}</p>
                )}
              </CardContent>
              <CardFooter>
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full"
                  asChild
                >
                  <a href="#cta">Join Waitlist</a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

