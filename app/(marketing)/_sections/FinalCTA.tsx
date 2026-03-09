"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function FinalCTASection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSuccess(true);
        setEmail("");
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (error) {
      console.error("Failed to subscribe:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "4s" }} />
      </div>

      {/* Floating SVG Elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 text-indigo-300 opacity-30"
        animate={{ y: [0, 30, 0], rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,10 90,90 10,90" fill="currentColor" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-20 w-24 h-24 text-purple-300 opacity-30"
        animate={{ y: [0, -30, 0], rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="20" y="20" width="60" height="60" fill="currentColor" transform="rotate(45 50 50)" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-10 w-28 h-28 text-cyan-300 opacity-30"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity, delay: 0.5 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="currentColor" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-1/3 w-20 h-20 text-rose-300 opacity-30"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, delay: 1 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50,10 Q90,35 90,50 Q90,90 50,90 Q10,90 10,50 Q10,35 50,10" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-900">
          Ready to Build Your Perfect Landing Page?
        </h2>
        <p className="text-xl text-slate-600 mb-8">
          Join thousands of creators building high-converting landing pages with AI. Get started free today.
        </p>

        {/* Email Form */}
        <motion.form
          onSubmit={handleSubscribe}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4"
        >
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 outline-none transition"
          />
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-400 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition"
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Send className="w-4 h-4" />
                Join Waitlist
              </>
            )}
          </motion.button>
        </motion.form>

        {/* Success Message */}
        <motion.div
          animate={{ opacity: success ? 1 : 0 }}
          className="text-emerald-600 text-sm font-medium"
        >
          {success && "✓ Successfully joined the waitlist!"}
        </motion.div>

        {/* Trust Line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-12 border-t border-slate-200"
        >
          <p className="text-sm text-slate-500 mb-4">Trusted by 10,000+ creators</p>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            {["TechCrunch", "Forbes", "Product Hunt", "Y Combinator"].map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="text-slate-400 font-medium text-sm"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
