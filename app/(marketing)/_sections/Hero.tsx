"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const words = ["Your Landing Page.", "Built by AI.", "Live in 60 Seconds."];

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 20, opacity: 0, filter: "blur(4px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
      },
    },
  };

  const badgeVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-radial-gradient-at-50-50 from-indigo-400/15 via-white to-white" />
      </div>

      {/* Dot grid */}
      <svg className="absolute inset-0 -z-20 w-full h-full opacity-30" viewBox="0 0 960 540">
        <defs>
          <pattern id="dots" x="40" y="40" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="40" cy="40" r="1" fill="#94a3b8" fillOpacity="0.5" />
          </pattern>
        </defs>
        <rect width="960" height="540" fill="url(#dots)" />
      </svg>

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Headline */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-6xl font-display font-bold leading-tight"
            >
              {words.map((word, idx) => (
                <motion.span key={idx} variants={wordVariants} className="block">
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-slate-600 max-w-lg"
            >
              No design skills needed. No coding. Just describe your vision, and AI builds your perfect landing page.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/signup">
                <Button size="lg" variant="default" className="gap-2">
                  Get Started Free →
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="ghost">
                  See How It Works
                </Button>
              </Link>
            </motion.div>

            {/* Trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col gap-2 text-sm text-slate-600 pt-4"
            >
              <div className="flex items-center gap-2">
                <span className="text-indigo-600">✓</span>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-indigo-600">✓</span>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-indigo-600">✓</span>
                <span>Unlimited revisions</span>
              </div>
            </motion.div>
          </div>

          {/* Right - Browser Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="hidden md:block"
          >
            <div className="relative">
              {/* Browser frame */}
              <div className="bg-slate-900 rounded-lg shadow-2xl overflow-hidden border border-slate-800">
                {/* Browser header */}
                <div className="bg-slate-800 px-4 py-2 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="flex-1 bg-slate-700 rounded px-3 py-1 text-xs text-slate-400 ml-2">
                    pagefore.ai
                  </div>
                </div>
                {/* Content */}
                <div className="aspect-video bg-gradient-to-br from-indigo-500 via-violet-500 to-indigo-600 relative overflow-hidden">
                  <motion.div
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: "radial-gradient(circle at 20% 50%, #fbbf24 0%, transparent 50%)",
                      backgroundSize: "200% 200%",
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating badges - Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-3 gap-4 mt-20 md:mt-32 max-w-2xl"
        >
          {[
            { label: "5,000+", desc: "Pages Created" },
            { label: "98%", desc: "Uptime" },
            { label: "4.9★", desc: "Rating" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              animate={{ y: [0, -8, 0] }}
              transition={{ delay: idx * 0.2, duration: 3, repeat: Infinity }}
              className="bg-white border border-slate-200 rounded-lg p-4 text-center shadow-lg"
            >
              <div className="font-display font-bold text-indigo-600">{stat.label}</div>
              <div className="text-xs text-slate-600 mt-1">{stat.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
