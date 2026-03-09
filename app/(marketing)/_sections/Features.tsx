"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Zap, Globe, Lock, Figma, Code } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Copy",
    description: "Write compelling headlines and CTAs in seconds",
    span: 2,
    featured: true,
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "< 1 second load time. Optimized for conversions",
  },
  {
    icon: Globe,
    title: "Global Hosting",
    description: "CDN-backed delivery to every corner of Earth",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified. Bank-level encryption",
  },
  {
    icon: Figma,
    title: "Design System",
    description: "Beautiful pre-built components and templates",
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Export to React, HTML, or deploy as static site",
  },
];

export function FeaturesSection() {
  const [typewriterText, setTypewriterText] = useState("");
  const headlines = [
    "The best landing page builder in 2024",
    "Loved by 5,000+ creators worldwide",
    "Industry-leading conversion rates",
  ];
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const text = headlines[currentHeadline];
    const timer = setTimeout(() => {
      if (textIndex < text.length) {
        setTypewriterText(text.substring(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      } else {
        setTimeout(() => {
          setCurrentHeadline((prev) => (prev + 1) % headlines.length);
          setTextIndex(0);
          setTypewriterText("");
        }, 2000);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [textIndex, currentHeadline]);

  return (
    <section id="features" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to build, launch, and scale your landing pages
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 auto-rows-max"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const isSpan = feature.span === 2;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className={`group rounded-lg border border-slate-200 bg-white p-6 hover:border-indigo-300 hover:shadow-lg transition ${
                  isSpan ? "md:col-span-2" : ""
                } ${feature.featured ? "md:row-span-2" : ""}`}
              >
                {feature.featured ? (
                  <div>
                    <Icon className="w-8 h-8 text-indigo-600 mb-4" />
                    <h3 className="text-2xl font-display font-bold mb-2">{feature.title}</h3>
                    <p className="text-slate-600 mb-6">{feature.description}</p>

                    {/* Typewriter */}
                    <div className="bg-indigo-50 rounded-lg p-4 font-mono text-sm text-indigo-900">
                      <div className="h-8">{typewriterText}</div>
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.7, repeat: Infinity }}
                        className="text-indigo-600 font-bold"
                      >
                        |
                      </motion.span>
                    </div>
                  </div>
                ) : (
                  <div>
                    <Icon className="w-8 h-8 text-indigo-600 mb-4 group-hover:scale-110 transition" />
                    <h3 className="text-lg font-display font-bold mb-2">{feature.title}</h3>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
