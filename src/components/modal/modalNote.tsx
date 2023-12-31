"use client";
import { Bookmark, Heart, Save, Trash2 } from "lucide-react";
import React from "react";
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

const ModalNote = (props: any) => {
  const { toast } = useToast();

  const deleteNote = () => {
    toast({
      title: "Delete completed",
    });
  };

  const saveNote = async () => {
    toast({
      title: "Saving completed",
    });
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="w-5/6">
          <Input value={props.title ?? "your title..."} />
        </DialogTitle>
      </DialogHeader>
      <DialogDescription>
        <Textarea className="max-h-[500px]" value={props.description} />
      </DialogDescription>
      <DialogFooter className="flex !justify-between">
        <Button className="hover:bg-yellow-500">
          <Bookmark />
        </Button>

        <div className="flex gap-2">
          <DialogClose>
            <Button
              className="bg-rose-500 flex gap-2 items-center"
              onClick={() => {
                deleteNote();
              }}
            >
              <Trash2 />
              Delete
            </Button>
          </DialogClose>
          <DialogClose>
            <Button
              className="bg-emerald-500 flex gap-2 items-center hover:bg-white hover:text-emerald-500 border-2 hover:border-emerald-500"
              onClick={() => saveNote()}
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

export default ModalNote;
