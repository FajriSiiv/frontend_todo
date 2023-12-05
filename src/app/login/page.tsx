"use client";
import { ModeToggle } from "@/components/toggleDark";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import noteAnimation from "../../img/note-animation.json";
import Link from "next/link";
import { MotionDiv } from "@/components/motionDiv";
import { useParams, useRouter } from "next/navigation";
import { userLogin } from "../../../data/user";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { GithubToolTip } from "@/components/layout/Navbar";
import { AutoLoginUser } from "./autoLogin";

const Login = () => {
  const { toast } = useToast();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

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

  const checkLogin = (usernameInput: string, passwordInput: string) => {
    const matchedUser = userLogin.find(
      (user: any) => user.username === usernameInput
    );

    if (matchedUser?.password === passwordInput) {
      localStorage.setItem("authenticated", "true");
      localStorage.setItem("username", username);
      localStorage.setItem("userId", matchedUser.userId.toString());

      toast({
        title: "Login succesfully",
        description: "Thank you for visiting my website",
        style: {
          background: "#80ed99",
        },
      });
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else {
      router.push("/login");
      toast({
        title: "Login Failed",
        description: "Check your password or username",
        style: {
          background: "#ef233c",
          color: "#ffffff",
        },
      });
    }
  };

  const loginButton = async (e: any) => {
    e.preventDefault();
    checkLogin(username, password);
  };

  return (
    <main className="grid grid-cols-2 relative overflow-hidden">
      <div className="absolute top-5 right-5 flex gap-3">
        <AutoLoginUser />
        <GithubToolTip />
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
          <Lottie animationData={noteAnimation} className="h-[500px]" />
          <div className="absolute rounded-full h-80 w-80 bg-primary top-0 -left-6 right-0 bottom-0 translate-x-1/3 translate-y-1/3 -z-10"></div>
        </MotionDiv>
      </MotionDiv>
      <MotionDiv
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex justify-center items-center h-screen"
      >
        <form
          onSubmit={loginButton}
          className="flex flex-col gap-3 border-2 p-5 rounded-sm w-[400px]"
        >
          <h1 className="text-3xl text-center uppercase font-extrabold">
            Login
          </h1>
          <MotionDiv variants={item}>
            <Label>Username</Label>
          </MotionDiv>
          <MotionDiv variants={item}>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              required
              placeholder="your username..."
            />
          </MotionDiv>
          <MotionDiv variants={item}>
            <Label>Password</Label>
          </MotionDiv>
          <MotionDiv variants={item}>
            <Input
              type="password"
              required
              placeholder="your password..."
              className=" mb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </MotionDiv>
          <MotionDiv variants={item}>
            <Button className="w-full" type="submit">
              Sign In
            </Button>
          </MotionDiv>
          <MotionDiv variants={item}>
            <div className="flex justify-start gap-2 items-center text-sm">
              <span className="">Dont have account?</span>
              <Link href={"/login"}>
                <span className=" italic underline">Sign up</span>
              </Link>
            </div>
          </MotionDiv>
        </form>
      </MotionDiv>
      <Toaster />
    </main>
  );
};

export default Login;
