import React from "react";
import { HeadingJumbo, Paragraph } from "../typography";
import Button from "@/app/ui/buttons";

export default function IntroHeader() {
  return (
    <div className="flex justify-center items-center mb-100px h-header-lg bg-white bg-hero-pattern">
      <IntroContent>
        <Introtext>
          <HeadingJumbo color="white">Grow your business.</HeadingJumbo>
          <Paragraph size="big" color="white" opacity="de-emphasized">
            Give your business a boost with a beautifully crafted homepage.
          </Paragraph>
        </Introtext>
        <Button big color="white" href="/about">Learn More</Button>
      </IntroContent>
    </div>
  );
}

type IntroContentProps = {
  children: React.ReactNode;
};

const IntroContent = ({ children }: IntroContentProps) => (
  <div className="text-center mobile-landscape:w-70% mb-20px max-w-1140px w-80%">
    {children}
  </div>
);

const Introtext = ({ children }: IntroContentProps) => (
  <div className="tablet:w-80% mx-auto mb-35px w-auto">{children}</div>
);
