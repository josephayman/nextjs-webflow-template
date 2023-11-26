import React from "react";
import clsx from "clsx";

type HeadingJumboProps = {
  children: React.ReactNode;
  color?: "black" | "white";
  size?: "tiny" | "small" | "normal";
};

export default function HeadingJumbo({ children, color="black", size="normal" }: HeadingJumboProps) {
  return (
    <div className= {clsx(
        size === "normal" && "text-6xl capitalize my-3",
        size === "small" && "text-4xl capitalize mt-3 mb-4",
        size === "tiny" && "text-lg uppercase mt-2 mb-3",
        color === "white" && "text-white"
        )}>
      {children}
    </div>
  );
}
