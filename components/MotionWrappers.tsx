"use client";
import { motion, Variants } from "framer-motion";
import React from "react";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  once = false,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
  className?: string;
}) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerList({
  items,
  render,
  delay = 0,
  stagger = 0.06,
}: {
  items: any[];
  render: (item: any, idx: number) => React.ReactNode;
  delay?: number;
  stagger?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {items.map((it, i) => (
        <motion.div
          key={i}
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {render(it, i)}
        </motion.div>
      ))}
    </motion.div>
  );
}

export function HoverLift({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      {children}
    </motion.div>
  );
}
