"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Palette, Rocket } from "lucide-react";

const steps = [
  {
    icon: Zap,
    title: "Describe Your Vision",
    description: "Tell AI what your landing page should do. Be as detailed or vague as you want.",
  },
  {
    icon: Palette,
    title: "AI Generates Content",
    description: "PageForge creates copy, layout, colors, and dynamic elements instantly.",
  },
  {
    icon: Rocket,
    title: "Publish & Convert",
    description: "One-click publishing. Get ready to convert visitors into customers.",
  },
];

export function HowItWorksSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">How It Works</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Three simple steps from idea to live landing page
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 relative"
        >
          {/* SVG Arrows */}
          <svg className="absolute top-24 left-0 right-0 w-full h-20 hidden md:block -z-10" viewBox="0 0 1000 100">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#6366f1" fillOpacity="0.3" />
              </marker>
            </defs>

            {/* First arrow */}
            <motion.path
              d="M 100 50 Q 250 10 400 50"
              stroke="#6366f1"
              strokeWidth="2"
              fill="none"
              strokeDasharray="300"
              initial={{ strokeDashoffset: 300 }}
              whileInView={{ strokeDashoffset: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              markerEnd="url(#arrowhead)"
              opacity="0.3"
            />

            {/* Second arrow */}
            <motion.path
              d="M 500 50 Q 650 10 800 50"
              stroke="#6366f1"
              strokeWidth="2"
              fill="none"
              strokeDasharray="300"
              initial={{ strokeDashoffset: 300 }}
              whileInView={{ strokeDashoffset: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              markerEnd="url(#arrowhead)"
              opacity="0.3"
            />
          </svg>

          {/* Steps */}
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div key={idx} variants={itemVariants} className="text-center">
                {/* Number circle */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-display font-bold text-2xl">
                    {idx + 1}
                  </div>
                </div>

                {/* Icon */}
                <Icon className="w-12 h-12 mx-auto mb-4 text-indigo-600" />

                {/* Content */}
                <h3 className="text-xl font-display font-bold mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
