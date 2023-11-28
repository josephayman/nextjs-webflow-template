import React from "react";
import Logo from "@/app/ui/logo";
import Link from "next/link";
import Button from "./buttons";

const email = "email@business.com";

const pages = [
  { name: "About", href: "/about" },
  { name: "Work", href: "/projects" },
  { name: "Team", href: "/team" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Nav() {
  return (
    <nav className="flex items-center px-50px py-30px bg-transparent">
      <div className="flex items-center justify-between flex-grow relative">
        <Logo />
        <div className="flex justify-center items-center ">
          {pages.map((page) => (
            <NavItem key={page.name} {...page} />
          ))}
        </div>
        <Button href={`mailto:${email}`}>Contact Us</Button>
      </div>
    </nav>
  );
}

type NavItemProps = {
  href: string;
  name: string;
};

const NavItem: React.FC<NavItemProps> = ({ href, name }) => (
  <Link
    href={href}
    className="block px-20px py-9px uppercase text-p-xs leading-p-xs tracking-1px opacity-60 font-medium no-underline hover:opacity-100 transition-opacity"
  >
    {name}
  </Link>
);
