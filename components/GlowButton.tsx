"use client";
import React from "react";
import { HoverLift } from "@/components/MotionWrappers";

type Props = React.ComponentProps<"button"> & {
  asChild?: boolean;
  children: React.ReactNode;
  className?: string;
};

export default function GlowButton({ children, className = "", asChild = false, ...rest }: Props) {
  const base = "relative inline-flex items-center justify-center rounded-2xl font-semibold text-black px-5 py-3 cursor-target";
  const skin = "bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-orange-400 shadow-[0_8px_30px_rgba(34,211,238,0.35)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]";

  const Comp: any = asChild ? React.Fragment : "button";

  const content = (
    <span className={`${base} ${skin} ${className}`.trim()}>{children}</span>
  );

  if (asChild) return <HoverLift>{content}</HoverLift>;

  return (
    <HoverLift>
      <Comp {...rest}>{content}</Comp>
    </HoverLift>
  );
}
