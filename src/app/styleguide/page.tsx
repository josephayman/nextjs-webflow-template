import Container from "@/app/ui/container";
import StyleguideHeader from "@/app/ui/headers/styleguide-header";
import HeadingJumbo from "@/app/ui/headings/heading-jumbo";
import Divider from "../ui/divider";

export default function Home() {
  return (
    <>
      <StyleguideHeader />

      <Container>
        <p>HEADINGS</p>
        <HeadingJumbo>Heading Jumbo</HeadingJumbo>
        <HeadingJumbo size="small">Heading Jumbo</HeadingJumbo>
        <HeadingJumbo size="tiny">Heading Jumbo</HeadingJumbo>

        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <Divider />
        <p>PARAGRAPHS</p>
      </Container>
    </>
  );
}
