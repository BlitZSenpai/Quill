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
        .then((data) => toast.success(`${data.blocked.username} has been unblocked`))
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
      Unblock
    </Button>
  );
};
