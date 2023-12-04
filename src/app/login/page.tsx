"use client";
import { ModeToggle } from "@/components/toggleDark";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import Lottie from "lottie-react";
import noteAnimation from "../../img/note-animation.json";
import Link from "next/link";
import { MotionDiv } from "@/components/motionDiv";

const Login = () => {
  const lottieStyle = {
    height: 500,
  };

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

  return (
    <main className="grid grid-cols-2 relative overflow-hidden">
      <div className="absolute top-5 right-5">
        <ModeToggle />
      </div>
      <MotionDiv
        variants={container}
        initial="hidden"
        animate="visible"
        className="float-left flex flex-col gap-2 justify-center items-center"
      >
        <div className="flex flex-col text-center -mb-20">
          <MotionDiv variants={item}>
            <h1 className="text-4xl font-semibold">
              Welcome to{" "}
              <span className="text-primary font-bold italic">Note.io</span>
            </h1>
          </MotionDiv>
          <MotionDiv variants={item}>
            <p>
              <span className="text-primary font-bold text-lg">Note.io</span> is
              a note taking app for website.
            </p>
          </MotionDiv>
        </div>
        <MotionDiv variants={item} className="relative">
          <Lottie
            animationData={noteAnimation}
            style={lottieStyle}
            loop={10}
            aria-aria-labelledby="lottie note animation"
          />
          <div className="absolute rounded-full h-80 w-80 bg-primary top-0 -left-6 right-0 bottom-0 translate-x-1/3 translate-y-1/3 -z-10"></div>
        </MotionDiv>
      </MotionDiv>
      <MotionDiv
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex justify-center items-center h-screen"
      >
        <form className="flex flex-col gap-3 border-2 p-5 rounded-sm w-[400px]">
          <h1 className="text-3xl text-center uppercase font-extrabold">
            Login
          </h1>
          <MotionDiv variants={item}>
            <Label>Username</Label>
          </MotionDiv>
          <MotionDiv variants={item}>
            <Input type="text" required placeholder="your username..." />
          </MotionDiv>
          <MotionDiv variants={item}>
            <Label>Password</Label>
          </MotionDiv>
          <MotionDiv variants={item}>
            <Input
              type="text"
              required
              placeholder="your username..."
              className=" mb-3"
            />
          </MotionDiv>
          <MotionDiv variants={item}>
            <Button className="w-full">Sign In</Button>
          </MotionDiv>
          <MotionDiv variants={item}>
            <div className="flex justify-start gap-2 items-center text-sm">
              <span className="">Don't have account?</span>
              <Link href={"/"}>
                <span className=" italic underline">Sign up</span>
              </Link>
            </div>
          </MotionDiv>
        </form>
      </MotionDiv>
    </main>
  );
};

export default Login;
