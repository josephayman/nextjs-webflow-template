import type { Metadata } from "next";
import { montserrat } from "@/app/ui/fonts";
import "@/app/globals.css";
import Nav from "@/app/ui/nav";
import Footer from "@/app/ui/footer";

export const metadata: Metadata = {
  title: "Business - Webflow template in NextJS",
  description: "Business - Webflow HTML website template in NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Nav />
        <div className="mx-30px">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
