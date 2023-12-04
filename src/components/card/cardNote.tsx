"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const CardNote = (props: any) => {
  const textNote =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore enim asperiores non eaque totam consequatur labore illum aspernatur dignissimos officia distinctio vero, tenetur animi quisquam perspiciatis, repellat, modi reiciendis quasi.";

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      transition={{
        delay: props.index * 0.25,
        ease: "easeInOut",
        duration: 0.5,
        delayChildren: props.index * 0.5,
        staggerChildren: props.index * 0.1,
      }}
      className="flex flex-col border border-gray-300 max-h-[300px]  p-3 rounded-md select-none cursor-pointer relative"
    >
      <motion.h2 variants={container} className="font-semibold text-xl">
        Title
      </motion.h2>
      <motion.span variants={container} className="mt-5">
        {textNote.substring(0, 100)}...
      </motion.span>

      <div className="absolute right-2 top-2 text-red-500">
        <Heart className="fill-red-500" />
      </div>
    </motion.div>
  );
};

export default CardNote;
