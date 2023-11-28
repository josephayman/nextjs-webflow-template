import Container from "@/app/ui/container";
import StyleguideHeader from "@/app/ui/headers/styleguide-header";
import { HeadingJumbo, Paragraph, Label, RichText } from "@/app/ui/typography";
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
            <RichText>
              <h2>What’s a Rich Text element?</h2>
              <Paragraph opacity="de-emphasized">
                The rich text element allows you to create and format headings,
                paragraphs, blockquotes, images, and video all in one place
                instead of having to add and format them individually. Just
                double-click and easily create content.
              </Paragraph>
              <blockquote>
                The rich text element allows you to create and format headings,
                paragraphs, blockquotes, images, and video all in one place
                instead of having to add and format them individually. Just
                double-click and easily create content.
              </blockquote>
              <h4>Static and dynamic content editing</h4>
              <Paragraph opacity="de-emphasized">
                A rich text element can be used with static or dynamic content.
                For static content, just drop it into any page and begin
                editing. For dynamic content, add a rich text field to any
                collection and then connect a rich text element to that field in
                the settings panel. Voila!
              </Paragraph>
              <FigureWrapper>
                <img src="./placeholder1.svg" />
              </FigureWrapper>
              <h4>How to customize formatting for each rich text</h4>
              <Paragraph opacity="de-emphasized">
                Headings, paragraphs, blockquotes, figures, images, and figure
                captions can all be styled after a class is added to the rich
                text element using the &quot;When inside of&quot; nested selector system.
              </Paragraph>
              <ul>
                <li>
                  The rich text element allows you to create and format headings
                </li>
                <li>
                  Headings, paragraphs, blockquotes, figures, images, and figure
                  captions
                </li>
                <li>
                  A rich text element can be used with static or dynamic
                  content.
                </li>
              </ul>
            </RichText>
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

const FigureWrapper = ({ children }: ContentWrapperProps) => (
  <div className="mt-25px mb-10px pb-40px">{children}</div>
);
