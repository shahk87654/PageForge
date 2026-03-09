"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need design skills to use PageForge?",
    answer:
      "Absolutely not! PageForge is designed for everyone. Our AI handles all the design decisions while you focus on your business. Just describe your vision and watch it come to life.",
  },
  {
    question: "Can I customize my landing page after it's generated?",
    answer:
      "Yes! After AI generates your page, you have full control to edit every element. Change colors, text, layout, or add your own content. It's fully customizable.",
  },
  {
    question: "What kind of landing pages can I create?",
    answer:
      "You can create any type: product launches, SaaS onboarding, lead generation, event registration, waitlists, courses, and more. Our templates cover 50+ use cases.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! Everyone gets a 14-day free trial with full access to all features. No credit card required. Upgrade anytime if you love it.",
  },
  {
    question: "Can I publish my page to a custom domain?",
    answer:
      "Custom domains are available on our Starter plan and above. You can use your own domain or let us host it on pageforge.io.",
  },
  {
    question: "How does analytics work?",
    answer:
      "PageForge automatically tracks all visitor metrics: page views, click-through rates, conversion funnel, and more. Real-time dashboards show you exactly what's working.",
  },
  {
    question: "Can I export my landing page?",
    answer:
      "Pro plan members can export their pages as standalone HTML or React components. You'll have complete ownership of your code.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards via Stripe, plus PayPal. Monthly and yearly billing options available.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-600">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`border-l-4 transition ${
                openIndex === idx ? "border-indigo-600 bg-indigo-50" : "border-slate-200 bg-white hover:bg-slate-50"
              } rounded-r-lg`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 flex items-start justify-between text-left group"
              >
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-5 h-5 text-indigo-600" />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 mb-4">Still have questions?</p>
          <a
            href="mailto:support@pageforge.dev"
            className="text-indigo-600 hover:text-indigo-700 font-semibold"
          >
            Contact our support team →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
