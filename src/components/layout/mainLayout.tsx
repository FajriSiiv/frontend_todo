"use client";

import { authLogin } from "@/app/authLogin";
import React, { useEffect } from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    authLogin();
  }, []);

  return <main className="py-7 px-5">{children}</main>;
};

export default MainLayout;
