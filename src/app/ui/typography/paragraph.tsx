import React from 'react'
import clsx from 'clsx'

type ParagraphProps = {
    children: React.ReactNode;
    color?: "black" | "white";
    size?: "tiny" | "small" | "normal" | "big";
    opacity?: "normal" | "de-emphasized";
    };

export default function Paragraph(  { children, color="black", size="normal", opacity="normal" }: ParagraphProps) {
  return (
    <p className={clsx(
        size === "normal" && "",
        size === "small" && "text-p-sm leading-p-sm",
        size === "tiny" && "text-p-xs leading-p-xs",
        size === "big" && "text-h5 leading-h5",
        color === "white" && "text-white",
        opacity === "de-emphasized" && "opacity-60",
        )}>
      {children}
    </p>
  )
}
