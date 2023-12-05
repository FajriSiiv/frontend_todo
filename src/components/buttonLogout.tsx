import { logout } from "@/app/authLogin";
import { LogOut } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const ButtonLogout = () => {
  return (
    <Button onClick={() => logout()} className="flex gap-2">
      <LogOut />
      Logout
    </Button>
  );
};

export default ButtonLogout;
