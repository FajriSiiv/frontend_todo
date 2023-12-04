import CardNote from "@/components/card/cardNote";
import ModalNote from "@/components/modal/modalNote";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <main className="py-7 grid grid-cols-grid-card gap-5 h-full">
      {[1, 2, 3, 4, 5].map((index) => {
        return <CardNote index={index} key={index} />;
      })}
      <Dialog>
        <DialogTrigger asChild>
          <div className="fixed bottom-10 right-10">
            <Button className="rounded-full h-14 w-14 bg-emerald-500">
              <Plus />
            </Button>
          </div>
        </DialogTrigger>
        <ModalNote />
      </Dialog>
    </main>
  );
}
