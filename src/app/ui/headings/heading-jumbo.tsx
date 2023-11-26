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
        size === "normal" && "text-jumbo leading-jumbo capitalize my-10px",
        size === "small" && "text-jumbo-md leading-jumbo-md capitalize mt-10px mb-15px",
        size === "tiny" && "text-jumbo-sm leading-jumbo-sm uppercase my-10px font-medium",
        color === "white" && "text-white"
        )}>
      {children}
    </div>
  );
}
