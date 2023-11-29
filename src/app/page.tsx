import IntroHeader from "@/app/ui/headers/intro-header";
import Container from "@/app/ui/container";
import { HeadingJumbo, Label, Paragraph } from "@/app/ui/typography";
import Divider from "@/app/ui/divider";
import Button from "./ui/buttons";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <IntroHeader />
      <Container>
        <MottoWrapper>
          <Label opacity="de-emphasized">What We Believe In</Label>
          <HeadingJumbo size="small">
            Grow your business, establish your brand, and put your customers
            first.
          </HeadingJumbo>
        </MottoWrapper>
        <Divider />
        <HomeContentWrapper>
          <AboutGrid>
            <div>
              <HomeSectionWrap>
                <Label opacity="de-emphasized">About</Label>
                <h2>Who we are</h2>
                <Paragraph opacity="de-emphasized">
                  Nulla vel sodales tellus, quis condimentum enim. Nunc
                  porttitor venenatis feugiat. Etiam quis faucibus erat, non
                  accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus
                  eros. Cras ullamcorper gravida tellus ut consequat.
                </Paragraph>
              </HomeSectionWrap>
              <Button big href="/about">
                Learn More
              </Button>
            </div>
            <div>
              <Image
                src="/placeholder3.svg"
                alt="Placeholder"
                width={710}
                height={460}
              />
            </div>
          </AboutGrid>
        </HomeContentWrapper>
      </Container>
    </>
  );
}

type MottoWrapperProps = {
  children: React.ReactNode;
};

const MottoWrapper = ({ children }: MottoWrapperProps) => (
  <div className="text-center w-80% mb-85px mx-auto">{children}</div>
);

const HomeContentWrapper = ({ children }: MottoWrapperProps) => (
  <div className="mb-120px mt-80px">{children}</div>
);

const AboutGrid = ({ children }: MottoWrapperProps) => (
  <div className="grid grid-cols-[1fr_2fr] gap-x-20 gap-y-10 items-center">
    {children}
  </div>
);

const HomeSectionWrap = ({ children }: MottoWrapperProps) => (
  <div className="mb-30px">{children}</div>
);
