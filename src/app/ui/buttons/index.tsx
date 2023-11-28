import React from "react";
import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  href?: string;
  text: string;
  big?: boolean;
};

export default function Button({ href, text, big = false }: ButtonProps) {
  if (!href) {
    return (
      <button
        className={clsx(
          "select-none tracking-2px text-white uppercase no-underline bg-dark hover:bg-dark-gray",
          big
            ? "px-35px py-16px text-p-xs leading-p-xs"
            : "px-25px py-12px text-p-xs leading-p-xs"
        )}
      >
        {text}
      </button>
    );
  }

  return (
    <Link
      href={href}
      className={clsx(
        "select-none tracking-2px text-white uppercase no-underline bg-dark hover:bg-dark-gray",
        big
          ? "px-35px py-16px text-p-xs leading-p-xs"
          : "px-25px py-12px text-p-xs leading-p-xs"
      )}
    >
      {text}
    </Link>
  );
}
