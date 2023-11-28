import Container from "@/app/ui/container";
import StyleguideHeader from "@/app/ui/headers/styleguide-header";
import { HeadingJumbo, Paragraph, Label } from "@/app/ui/typography";
import Divider from "@/app/ui/divider";
import Link from "next/link";
import Button from "../ui/buttons";

export default function Home() {
  return (
    <>
      <StyleguideHeader />

      <Container>
        <ContentWrapper>
          <Block>
            <Label spacing>HEADINGS</Label>
            <HeadingJumbo>Heading Jumbo</HeadingJumbo>
            <HeadingJumbo size="small">Heading Jumbo</HeadingJumbo>
            <HeadingJumbo size="tiny">Heading Jumbo</HeadingJumbo>

            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
          </Block>
          <Divider />
          <Block>
            <Label spacing>PARAGRAPHS & Links</Label>
            <Paragraph size="big">Paragraph-bigger</Paragraph>
            <Paragraph>Paragraph</Paragraph>
            <Paragraph opacity="de-emphasized">
              Paragraph-de-emphasized
            </Paragraph>
            <Paragraph size="small">Paragraph-smaller</Paragraph>
            <Paragraph size="tiny">Paragraph-tiny</Paragraph>
            <Link href="">A text link</Link>
          </Block>
          <Divider />
          <Block>
            <Label spacing>Buttons & Form elements</Label>
            <ButtonWrapper>
              <Button text="Explore" />
            </ButtonWrapper>
            <ButtonWrapper>
              <Button text="Explore" big />
            </ButtonWrapper>
          </Block>
          <Divider />
          <Block>
            <Label spacing>Rich text Element</Label>
          </Block>
        </ContentWrapper>
      </Container>
    </>
  );
}

type ContentWrapperProps = {
  children: React.ReactNode;
};

const ContentWrapper = ({ children }: ContentWrapperProps) => (
  <div className="text-center tablet:text-left">{children}</div>
);

const Block = ({ children }: ContentWrapperProps) => (
  <div className="my-80px">{children}</div>
);

const ButtonWrapper = ({ children }: ContentWrapperProps) => (
  <div className="my-10px">{children}</div>
);
