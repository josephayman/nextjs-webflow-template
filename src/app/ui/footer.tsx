import Link from "next/link";
import React from "react";
import Container from "./container";
import { Paragraph } from "@/app/ui/typography";

export default function Footer() {
  return (
    <Container>
      <FooterWrap>
        <Paragraph size="tiny" opacity="de-emphasized">
          Made by{" "}
          <Link href="https://github.com/josephayman">Joseph Ayman</Link>
        </Paragraph>
      </FooterWrap>
    </Container>
  );
}

type FooterWrapProps = {
  children: React.ReactNode;
};

const FooterWrap = ({ children }: FooterWrapProps) => (
  <div className="flex items-center justify-center py-70px text-center">{children}</div>
);
