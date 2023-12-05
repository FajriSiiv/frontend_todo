"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bookmark, Check, CheckCheck, Heart } from "lucide-react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import ModalNote from "../modal/modalNote";
import { Button } from "../ui/button";

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const CardNote = (props: any) => {
  const textNote = props.card.todo;

  return (
    <Dialog>
      <DialogTrigger asChild>
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
          className="flex flex-col border border-gray-300 min-h-[200px]  p-3 rounded-md select-none cursor-pointer relative"
        >
          <motion.h2
            variants={container}
            className="font-semibold text-xl flex-[1]"
          >
            {props.card.todo.substring(0, 10)}
          </motion.h2>
          <motion.span variants={container} className="mt-5 flex-[3]">
            {textNote.substring(0, 100)}...
          </motion.span>

          <div className="absolute right-2 top-2 ">
            <Bookmark
              className={`${
                props.card.completed
                  ? "fill-yellow-500 stroke-none"
                  : "fill-none stroke-yellow-500"
              }`}
            />
          </div>
        </motion.div>
      </DialogTrigger>
      <ModalNote title={props.card.todo} description={props.card.todo} />
    </Dialog>
  );
};

export default CardNote;
