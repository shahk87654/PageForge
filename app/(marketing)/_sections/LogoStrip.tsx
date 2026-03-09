"use client";

import React from "react";

const companies = [
  "TechStart",
  "CloudCorp",
  "DataFlow",
  "MetaSync",
  "NeuralAI",
  "QuantumDB",
  "StreamNext",
  "VortexLabs",
  "PrismaFlow",
  "NexusAI",
  "EchoCloud",
  "SignalPro",
];

export function LogoStripSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-50 to-indigo-50 overflow-hidden border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm text-slate-600 font-medium mb-8">
          Trusted by companies worldwide
        </p>

        <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .marquee {
            display: flex;
            animation: marquee 30s linear infinite;
            width: fit-content;
          }

          .marquee:hover {
            animation-play-state: paused;
          }

          .marquee-item {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 40px;
            white-space: nowrap;
            min-width: fit-content;
          }

          .marquee-mask {
            position: relative;
            overflow: hidden;
          }

          .marquee-mask::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 100px;
            background: linear-gradient(to right, rgba(255, 255, 255, 1), transparent);
            z-index: 10;
            pointer-events: none;
          }

          .marquee-mask::after {
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 100px;
            background: linear-gradient(to left, rgba(255, 255, 255, 1), transparent);
            z-index: 10;
            pointer-events: none;
          }
        `}</style>

        <div className="marquee-mask">
          <div className="marquee">
            {[...companies, ...companies].map((company, idx) => (
              <div
                key={idx}
                className="marquee-item text-slate-700 font-medium text-sm md:text-base"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
