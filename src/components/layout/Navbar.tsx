"use client";
import { Github } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import ButtonLogout from "../buttonLogout";
import { ModeToggle } from "../toggleDark";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export const GithubToolTip = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={"https://github.com/FajriSiiv"} target="_blank">
            <Button variant="outline">
              <Github />
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>My github</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const Navbar = () => {
  const router = usePathname();

  if (router === "/login") {
    return null;
  }
  return (
    <nav className="w-full border-b-2 flex justify-between items-center px-5 h-[60px]">
      <span className="text-2xl font-bold italic text-primary">Note.io</span>
      <div className="flex flex-row gap-4">
        <GithubToolTip />
        <ModeToggle />
        <ButtonLogout />
      </div>
    </nav>
  );
};

export default Navbar;
