"use client";

import { onUnBlock } from "@/actions/block";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";

interface UnblockButtonProps {
  userId: string;
}

export const UnblockButton = ({ userId }: UnblockButtonProps) => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      onUnBlock(userId)
        .then((data) => {
          const name = data.blocked.username;
          toast.success(`${name.charAt(0).toUpperCase() + name.slice(1)} has been unbanned`);
        })
        .catch(() => toast.error("Something went wrong!"));
    });
  };

  return (
    <Button
      disabled={isPending}
      onClick={onClick}
      variant="link"
      size="sm"
      className="flex items-center text-blue-500 w-full pr-10">
      Unban
    </Button>
  );
};
