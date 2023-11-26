import React from 'react'
import clsx from 'clsx'

type ParagraphProps = {
    children: string;
    color?: "black" | "light";
    size?: "tiny" | "small" | "normal" | "big";
    };

export default function Paragraph(  { children, color="black", size="normal" }: ParagraphProps) {
  return (
    <p className={clsx(
        size === "normal" && "",
        size === "small" && "text-p-sm leading-p-sm",
        size === "tiny" && "text-p-xs leading-p-xs",
        size === "big" && "text-h5 leading-h5",
        color === "light" && "opacity-60"
        )}>
      {children}
    </p>
  )
}
