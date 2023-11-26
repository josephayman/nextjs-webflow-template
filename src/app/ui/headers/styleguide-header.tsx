import React from "react";
import { HeadingJumbo, Paragraph} from "@/app/ui/typography";

export default function StyleguideHeader() {
  return (
    <div className="p-8 flex flex-col items-center justify-center text-center bg-dark h-header-sm">
      <HeadingJumbo color="white">Styleguide</HeadingJumbo>
      <Paragraph color="white" size="big" opacity="de-emphasized">
       Source of truth of this template.
      </Paragraph>
    </div>
  );
}
