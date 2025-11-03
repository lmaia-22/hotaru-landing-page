"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How does the 2-hour expiration work?",
    answer:
      "All clips are automatically removed after 2 hours using Redis TTL. There's no permanent retention - that's the nature of Hotaru.",
  },
  {
    question: "Can I share with only specific people?",
    answer:
      "Yes! You can choose to share with everyone or just specific users. You're in control.",
  },
  {
    question: "Is the content encrypted?",
    answer:
      "Yes, content is encrypted in transit and at rest. Plus, since everything expires in 2 hours, risk is minimized.",
  },
  {
    question: "Do you have logs or auditing?",
    answer:
      "Only aggregated metrics are kept. We don't track clip content, just general system usage.",
  },
  {
    question: "Is there an app/integration with Slack/VS Code?",
    answer:
      "We're working on these integrations! They'll be available at beta launch.",
  },
  {
    question: "When will you launch the beta?",
    answer:
      "We're finalizing the last details. Join the waitlist to be the first to know!",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Everything you need to know about Hotaru
        </p>
      </motion.div>
      <div className="max-w-3xl mx-auto space-y-2">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="border-b border-border"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between py-4 text-left font-medium transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
              <motion.div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                initial={false}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={cn(
                  "overflow-hidden",
                  isOpen && "pb-4"
                )}
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isOpen ? 1 : 0 }}
                  transition={{ delay: isOpen ? 0.1 : 0 }}
                  className="text-foreground/80"
                >
                  {faq.answer}
                </motion.p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

