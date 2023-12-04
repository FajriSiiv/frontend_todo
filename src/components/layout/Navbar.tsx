"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { ModeToggle } from "../toggleDark";

const Navbar = () => {
  const router = usePathname();

  if (router === "/login") {
    return null;
  }
  return (
    <nav className="w-full border-b-2 flex justify-between items-center px-5 h-[60px]">
      <span className="text-2xl font-bold italic text-primary">Note.io</span>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
