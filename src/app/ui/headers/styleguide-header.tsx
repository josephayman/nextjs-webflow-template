import React from "react";
import HeadingJumbo from "@/app/ui/headings/heading-jumbo";

export default function StyleguideHeader() {
  return (
    <div className="p-8 flex flex-col items-center justify-center text-center bg-dark h-96">
      <HeadingJumbo color="white">Styleguide</HeadingJumbo>
    </div>
  );
}
