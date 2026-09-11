import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useTransform, motion } from "motion/react";

type Props = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function Counter({ value, decimals = 0, prefix = "", suffix = "", duration = 1.4, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => `${prefix}${v.toLocaleString("en-IN", { maximumFractionDigits: decimals, minimumFractionDigits: decimals })}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, { duration, ease: [0.22, 1, 0.36, 1] });
    return controls.stop;
  }, [inView, value, duration, mv]);

  return (
    <motion.span ref={ref} className={className}>
      {text}
    </motion.span>
  );
}
