import StyleguideHeader from "../ui/headers/styleguide-header";
import HeadingJumbo from "@/app/ui/headings/heading-jumbo";

export default function Home() {
  return (
    <>
      <StyleguideHeader />

      <p>HEADINGS</p>
      <HeadingJumbo>Heading Jumbo</HeadingJumbo>
      <HeadingJumbo size="small">Heading Jumbo</HeadingJumbo>
      <HeadingJumbo size="tiny">Heading Jumbo</HeadingJumbo>
    </>
  );
}
