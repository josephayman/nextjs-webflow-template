import React from "react";
import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  href?: string;
  children?: React.ReactNode;
  big?: boolean;
  color?: "white" | "black";
};

export default function Button({
  href,
  children,
  big = false,
  color = "black",
}: ButtonProps) {
  if (!href) {
    return <button>{children}</button>;
  }

  return (
    <Link
      href={href}
      className={clsx(
        "select-none tracking-2px uppercase no-underline",
        big
          ? "px-35px py-16px text-p-xs leading-p-xs"
          : "px-25px py-12px text-p-xs leading-p-xs",
        color === "white"
          ? "bg-white text-dark hover:bg-slate-50"
          : "bg-dark text-white hover:bg-dark-gray"
      )}
    >
      {children}
    </Link>
  );
}
