import React from "react";
import Button from "../Button";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/" },
  { name: "Services", href: "/" },
  { name: "Blog", href: "/" },
  { name: "Contact", href: "/" },
];

export default function index() {
  return (
    <div className="flex items-center justify-between w-screen h-24 text-white px-6 py-4 fixed top-0 z-[999] bg-[#100220]">
      <div className="flex items-center gap-2 cursor-pointer">
        <img src="logo.svg" alt="Logo" className="w-12 h-12 object-cover" />
        <h1 className="text-2xl font-bold text-purple-400">CyberSecure</h1>
      </div>
      <div className="flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-gray-300 hover:text-white transition duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>
      <Button text="Get Started" />
    </div>
  );
}
