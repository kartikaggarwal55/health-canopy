"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Tooltip({
  children,
  content,
  position = "top",
  wide = false,
  className,
}: {
  children: ReactNode;
  content: string;
  position?: "top" | "bottom" | "left" | "right";
  wide?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("relative group/tip inline-flex items-center", className)}>
      {children}
      <span
        role="tooltip"
        className={cn(
          "pointer-events-none absolute z-[60] opacity-0 scale-95",
          "group-hover/tip:opacity-100 group-hover/tip:scale-100",
          "transition-all duration-150 ease-out",
          "px-2.5 py-1.5 text-[11px] leading-snug font-medium tracking-normal normal-case",
          "text-white bg-[#1c1412] rounded-lg shadow-xl",
          wide ? "max-w-[260px] whitespace-normal" : "whitespace-nowrap",
          position === "top" && "bottom-full left-1/2 -translate-x-1/2 mb-2",
          position === "bottom" && "top-full left-1/2 -translate-x-1/2 mt-2",
          position === "left" && "right-full top-1/2 -translate-y-1/2 mr-2",
          position === "right" && "left-full top-1/2 -translate-y-1/2 ml-2",
        )}
      >
        {content}
        <span
          className={cn(
            "absolute w-2 h-2 bg-[#1c1412] rotate-45",
            position === "top" && "left-1/2 -translate-x-1/2 -bottom-1",
            position === "bottom" && "left-1/2 -translate-x-1/2 -top-1",
            position === "left" && "top-1/2 -translate-y-1/2 -right-1",
            position === "right" && "top-1/2 -translate-y-1/2 -left-1",
          )}
        />
      </span>
    </span>
  );
}
