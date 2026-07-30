"use client";

import { motion } from "framer-motion";

const floatingItems = [
  { text: "<design />", x: "8%",  y: "18%", delay: 0,    dur: 7  },
  { text: "const brand = true", x: "72%", y: "12%", delay: 1.2, dur: 9  },
  { text: "UI ✦ UX", x: "85%", y: "52%", delay: 0.5, dur: 8  },
  { text: "function grow() {}", x: "5%",  y: "70%", delay: 2,   dur: 10 },
  { text: "// strategy first", x: "60%", y: "78%", delay: 0.8, dur: 7.5 },
  { text: "npm run creative", x: "38%", y: "6%",  delay: 1.6, dur: 8.5 },
  { text: "{ transform: scale }", x: "78%", y: "33%", delay: 3,   dur: 9.5 },
  { text: "return <Vision />", x: "14%", y: "42%", delay: 2.4, dur: 8  },
];

const dots = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  cx: `${Math.round((i % 7) * 16.5 + 2)}%`,
  cy: `${Math.round(Math.floor(i / 7) * 26 + 8)}%`,
  delay: (i * 0.18) % 3,
}));

export default function HeroBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Dot grid */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.13]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#ffffff" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Diagonal line accent */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="100%" x2="60%" y2="0" stroke="#F5A623" strokeWidth="1" />
        <line x1="30%" y1="100%" x2="100%" y2="10%" stroke="#00BFFF" strokeWidth="0.8" />
      </svg>

      {/* Glowing orbs — top-left cyan, top-right orange */}
      <div className="absolute -left-32 -top-24 h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="absolute -right-24 -top-16 h-[420px] w-[420px] rounded-full bg-[#F5A623]/12 blur-[100px]" />
      <div className="absolute bottom-0 left-1/2 h-[280px] w-[560px] -translate-x-1/2 rounded-full bg-indigo-500/8 blur-[90px]" />

      {/* Floating code/tech words */}
      {floatingItems.map((item) => (
        <motion.span
          key={item.text}
          className="absolute font-mono text-xs font-medium text-white/18 select-none whitespace-nowrap"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: [0, 1, 1, 0], y: [6, 0, -4, -10] }}
          transition={{
            duration: item.dur,
            delay: item.delay,
            repeat: Infinity,
            repeatDelay: 1.5,
            ease: "easeInOut",
          }}
        >
          {item.text}
        </motion.span>
      ))}

      {/* Pulsing accent dots */}
      {dots.slice(0, 6).map((d) => (
        <motion.div
          key={d.id}
          className="absolute h-1.5 w-1.5 rounded-full bg-[#F5A623]/50"
          style={{ left: d.cx, top: d.cy }}
          animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 3 + d.delay, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
