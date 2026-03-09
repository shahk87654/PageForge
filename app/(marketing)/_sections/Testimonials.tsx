"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "PageForge saved me weeks of design and development work. The AI-generated copy is genuinely impressive.",
    author: "Sarah Chen",
    role: "Founder, TechStart",
    initials: "SC",
  },
  {
    quote: "Our conversion rates increased by 40% after switching to PageForge. Highly recommend!",
    author: "Mike Johnson",
    role: "Marketing Lead, CloudCorp",
    initials: "MJ",
  },
  {
    quote: "The ease of use is unmatched. We launched 5 landing pages in a single week.",
    author: "Emma Rodriguez",
    role: "Growth Manager, DataFlow",
    initials: "ER",
  },
  {
    quote: "Best investment we've made for our marketing stack this year.",
    author: "Alex Kumar",
    role: "CEO, MetaSync",
    initials: "AK",
  },
  {
    quote: "The templates are beautiful and the customization options are endless.",
    author: "Lisa Wang",
    role: "Designer, NeuralAI",
    initials: "LW",
  },
  {
    quote: "Switched our entire funnel to PageForge. Zero regrets.",
    author: "James Park",
    role: "Product Manager, QuantumDB",
    initials: "JP",
  },
  {
    quote: "The AI understands our brand voice better than any copywriter I've hired.",
    author: "Rachel Green",
    role: "Founder, StreamNext",
    initials: "RG",
  },
  {
    quote: "Customer support is outstanding. They're genuinely invested in our success.",
    author: "David Brown",
    role: "Marketing Director, VortexLabs",
    initials: "DB",
  },
  {
    quote: "Absolutely love the analytics dashboard. Data-driven decisions made easy.",
    author: "Nina Patel",
    role: "Analyst, PrismaFlow",
    initials: "NP",
  },
];

function getInitialGradient(initials: string) {
  const colors = [
    "from-indigo-500 to-blue-500",
    "from-violet-500 to-purple-500",
    "from-rose-500 to-pink-500",
    "from-amber-500 to-orange-500",
    "from-emerald-500 to-teal-500",
    "from-cyan-500 to-blue-500",
    "from-fuchsia-500 to-pink-500",
    "from-lime-500 to-green-500",
  ];

  const charCode = initials.charCodeAt(0);
  return colors[charCode % colors.length];
}

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Loved by Creators</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join thousands of users building amazing landing pages
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 auto-rows-max"
        >
          {testimonials.map((testimony, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`bg-white rounded-lg border border-slate-200 p-6 flex flex-col gap-4 ${
                idx % 3 === 1 ? "md:mt-8" : idx % 3 === 2 ? "md:mt-16" : ""
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 flex-1">{testimony.quote}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${getInitialGradient(testimony.initials)} flex items-center justify-center text-white font-bold text-sm`}
                >
                  {testimony.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{testimony.author}</div>
                  <div className="text-xs text-slate-600">{testimony.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
