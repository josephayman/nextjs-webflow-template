import React from "react";
import Logo from "@/app/ui/logo";
import Link from "next/link";

const pages = [
  { name: "About", href: "/about" },
  { name: "Work", href: "/projects" },
  { name: "Team", href: "/team" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Nav() {
  return (
    <nav className="flex items-center justify-between flex-wrap px-12 py-8">
      <div className="flex items-center flex-shrink-0  mr-6">
        <Logo />
        <div className="flex justify-center items-center">
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
    className="block px-5 py-2 uppercase text-xs opacity-60 font-medium"
  >
    {name}
  </Link>
);

const Button = () => (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Contact us
    </button>
    );

