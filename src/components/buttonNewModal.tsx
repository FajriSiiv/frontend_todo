"use client";
import React from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import NewModalNote from "./modal/newModalNote";

const ButtonNewModal = () => {
  const router = usePathname();

  if (router === "/login") {
    return null;
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="fixed bottom-10 left-10">
          <Button className="rounded-full h-14 w-14 bg-emerald-500">
            <Plus />
          </Button>
        </div>
      </DialogTrigger>
      <NewModalNote />
    </Dialog>
  );
};

export default ButtonNewModal;
