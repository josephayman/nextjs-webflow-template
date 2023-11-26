import React from "react";
import Logo from "@/app/ui/logo";
import Link from "next/link";

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
    <nav className="flex items-center px-12 py-8 bg-transparent">
      <div className="flex items-center justify-between mr-6 flex-grow relative">
        <Logo />
        <div className="flex justify-center items-center ">
          {pages.map((page) => (
            <NavItem key={page.name} {...page} />
          ))}
        </div>
        <Button />
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
    className="block px-5 py-2 uppercase text-xs opacity-60 font-medium hover:opacity-100 transition-opacity"
  >
    {name}
  </Link>
);

const Button = () => (
  <Link
    href={`mailto:${email}`}
    className="inline-block px-5 py-3 ml-5 text-xs font-medium leading-none text-white uppercase bg-black hover:bg-gray-900"
  >
    Contact Us
  </Link>
);
