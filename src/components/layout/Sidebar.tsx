"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation.js";
import React from "react";
import { linkUrl } from "../../../data/link-url.js";

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Sidebar = () => {
  const router = usePathname();

  if (router === "/login") {
    return null;
  }

  return (
    <div className="flex-1 flex flex-col mt-5">
      <motion.ul variants={container} initial="hidden" animate="visible">
        {linkUrl.map((link: any) => (
          <Link href={link.url} key={link.id}>
            <motion.li
              variants={item}
              className="h-12 flex items-center gap-10 justify-start pl-10 text-base font-semibold hover:bg-primary hover:text-white hover:dark:bg-primary rounded-tr-full rounded-br-full transition-all"
            >
              {link.icon}
              {link.name}
            </motion.li>
          </Link>
        ))}
      </motion.ul>
    </div>
  );
};

export default Sidebar;
