"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Templates", href: "#templates" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDismissed, setIsDismissed] = useState(true);
  const { scrollY } = useScroll();

  const navBg = useTransform(scrollY, [0, 50], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.7)"]);
  const navBackdrop = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(8px)"]);
  const navBorder = useTransform(scrollY, [0, 50], ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.1)"]);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    const dismissed = localStorage.getItem("announcement-dismissed");
    setIsDismissed(dismissed === "true");
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem("announcement-dismissed", "true");
  };

  return (
    <>
      {/* Announcement Banner */}
      <AnimatePresence>
        {!isDismissed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-indigo-50 border-b border-indigo-200 text-center py-2 px-4 text-sm text-indigo-900"
          >
            <div className="flex items-center justify-center gap-2">
              <span>✨ Join 5,000+ creators building their dream landing pages</span>
              <button onClick={handleDismiss} className="text-indigo-600 hover:text-indigo-700 ml-4">
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 w-full z-50 border-b transition-colors ${
          isScrolled ? "border-slate-200" : "border-transparent"
        }`}
        style={{
          backgroundColor: navBg,
          backdropFilter: navBackdrop,
          borderTopColor: navBorder,
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-display font-bold text-xl bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            ⚡ PageForge
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-indigo-600 text-sm font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button variant="default">Start Free →</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200"
            >
              <div className="px-6 py-4 space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="block text-slate-700 hover:text-indigo-600 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="space-y-2 pt-4 border-t border-slate-200">
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/signup" onClick={() => setIsOpen(false)}>
                    <Button variant="default" className="w-full">
                      Start Free →
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
