"use client";
import MainLayout from "@/components/layout/mainLayout";
import ModalNote from "@/components/modal/modalNote";
import { Dialog } from "@/components/ui/dialog";
import Dashboard from "../dashboard";

export default function Favorite() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-5">Favorite</h1>
      <div className="grid grid-cols-grid-card gap-5 h-full">
        <Dashboard />
      </div>
      <Dialog>
        <ModalNote />
      </Dialog>
    </MainLayout>
  );
}
