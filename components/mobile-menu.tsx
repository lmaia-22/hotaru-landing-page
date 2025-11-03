"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMenu}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-16 right-0 bottom-0 w-64 bg-card border-l border-border z-50 p-6 md:hidden"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-4">
                <Link
                  href="#features"
                  onClick={closeMenu}
                  className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                >
                  Features
                </Link>
                <Link
                  href="#how"
                  onClick={closeMenu}
                  className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                >
                  How it Works
                </Link>
                <Link
                  href="#pricing"
                  onClick={closeMenu}
                  className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="#faq"
                  onClick={closeMenu}
                  className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                >
                  FAQ
                </Link>
                <Button asChild className="mt-4">
                  <Link href="#cta" onClick={closeMenu}>
                    Join Waitlist
                  </Link>
                </Button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

