"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    description: "Just getting started",
    price: 0,
    features: [
      "1 landing page",
      "Basic AI generation",
      "Standard templates",
      "Community support",
      "5,000 monthly views",
    ],
  },
  {
    name: "Starter",
    description: "Perfect for freelancers",
    price: 29,
    yearlyPrice: 290,
    features: [
      "3 landing pages",
      "Advanced AI features",
      "Premium templates",
      "Email support",
      "50,000 monthly views",
      "Custom domain",
      "A/B testing",
    ],
    highlighted: true,
  },
  {
    name: "Pro",
    description: "For growing agencies",
    price: 99,
    yearlyPrice: 990,
    features: [
      "Unlimited pages",
      "Full AI suite",
      "All templates",
      "Priority support",
      "Unlimited views",
      "Custom domain",
      "A/B testing",
      "Advanced analytics",
      "Team collaboration",
    ],
  },
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Simple Pricing</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Choose the plan that fits your needs. Always flexible, no long-term contracts.
          </p>

          {/* Toggle */}
          <div className="inline-flex gap-2 bg-white rounded-lg border border-slate-200 p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-md font-medium transition ${
                !isYearly ? "bg-indigo-600 text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-md font-medium transition ${
                isYearly ? "bg-indigo-600 text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Yearly
              <span className="text-xs ml-2 opacity-75">Save 20%</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-lg border-2 p-8 transition ${
                plan.highlighted
                  ? "border-indigo-600 bg-white shadow-2xl md:scale-105 relative"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
              <p className="text-slate-600 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isYearly ? "yearly" : "monthly"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-4xl font-display font-bold">
                      ${isYearly ? plan.yearlyPrice || plan.price * 12 : plan.price}
                      <span className="text-lg text-slate-600 font-normal">
                        /{isYearly ? "year" : "month"}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* CTA */}
              <Link href={`/signup?plan=${plan.name.toLowerCase()}`} className="block mb-8">
                <Button
                  variant={plan.highlighted ? "default" : "ghost"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </Button>
              </Link>

              {/* Features */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIdx) => (
                  <motion.div
                    key={featureIdx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: featureIdx * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
