"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";

export const InviteModal = () => {
  const router = useRouter();
  const { isOpen, onClose, type } = useModal();

  const isOpenModal = isOpen && type === "invite";

  return (
    <Dialog open={isOpenModal} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Customize your server
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Give your server with personality name and image.you can always
            change later
          </DialogDescription>
        </DialogHeader>
        invite modal
      </DialogContent>
    </Dialog>
  );
};
