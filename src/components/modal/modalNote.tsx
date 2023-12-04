import { Heart, Save, Trash2 } from "lucide-react";
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

const ModalNote = (props: any) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="w-5/6">
          <Input value={props.title ?? "your title..."} />
        </DialogTitle>
      </DialogHeader>
      <DialogDescription>
        <Textarea
          value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore amet
          nemo nulla. Delectus, nobis. Labore placeat tenetur error, maxime
          earum alias! Consequuntur atque quae sapiente alias, officiis
          assumenda dolore eveniet."
          className="h-[400px] resize-none"
        />
      </DialogDescription>
      <DialogFooter className="flex !justify-between">
        <Button className="bg-rose-500">
          <Heart />
        </Button>
        <div className="flex gap-2">
          <DialogClose>
            <Button className="bg-rose-500 flex gap-2 items-center">
              <Trash2 />
              Delete
            </Button>
          </DialogClose>
          <DialogClose>
            <Button className="bg-emerald-500 flex gap-2 items-center">
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
