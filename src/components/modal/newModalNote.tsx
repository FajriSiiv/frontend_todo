"use client";
import { Bookmark, Save } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "../ui/use-toast";

const NewModalNote = (props: any) => {
  const [titleVal, setTitleVal] = useState("");
  const [contentNote, setContentNote] = useState("");
  const { toast } = useToast();

  const saveNote = async () => {
    toast({
      title: "Saving completed",
    });
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="w-5/6">
          <Input
            value={titleVal}
            onChange={(e) => setTitleVal(e.target.value)}
          />
        </DialogTitle>
      </DialogHeader>
      <DialogDescription>
        <Textarea
          value={contentNote}
          onChange={(e) => setContentNote(e.target.value)}
          className="h-[400px] resize-none"
        />
      </DialogDescription>
      <DialogFooter className="flex !justify-between">
        <Button className="hover:bg-yellow-500">
          <Bookmark />
        </Button>

        <div className="flex gap-2">
          <DialogClose>
            <Button
              className="bg-emerald-500 flex gap-2 items-center hover:bg-white hover:text-emerald-500 border-2 hover:border-emerald-500"
              onClick={() => saveNote()}
              disabled={titleVal !== "" ? false : true}
            >
              <Save />
              Save
            </Button>
          </DialogClose>
        </div>
      </DialogFooter>
    </DialogContent>
  );
};

export default NewModalNote;
