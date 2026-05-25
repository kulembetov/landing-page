"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { DURATION, EASE } from "@/lib/anim";

type FadeUpProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  mount?: boolean;
};

export function FadeUp({ children, delay = 0, className, mount }: FadeUpProps) {
  const revealProps = mount
    ? { animate: { opacity: 1, y: 0 } }
    : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.05 } };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      {...revealProps}
      transition={{ duration: DURATION, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
