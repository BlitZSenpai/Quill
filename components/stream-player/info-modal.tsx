"use client";

import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

interface InfoModalProps {
  initialName: string;
  initialThumbnail: string | null;
}

export const InfoModal = ({ initialName, initialThumbnail }: InfoModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" size="sm" className="ml-auto">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Stream Info</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
