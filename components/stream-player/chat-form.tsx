"use client";

import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";

interface ChatFormProps {
  onSubmit: () => void;
  value: string;
  onChange: (value: string) => void;
  isHidden: boolean;
  isFollowersOnly: boolean;
  isDelayed: boolean;
  isFollowing: boolean;
}

export const ChatForm = ({
  onSubmit,
  value,
  onChange,
  isHidden,
  isFollowersOnly,
  isDelayed,
  isFollowing,
}: ChatFormProps) => {
  const [isDelayedBlock, setIsDelayedBlock] = useState(false);

  const isFollowersOnlyAndNotFollowing = isFollowersOnly && !isFollowing;
  const isDisabled = isHidden || isFollowersOnlyAndNotFollowing || isDelayedBlock;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!value && isDisabled) return;

    if (isDelayed && !isDelayedBlock) {
      setIsDelayedBlock(true);
      setTimeout(() => {
        setIsDelayedBlock(false);
        onSubmit();
      }, 3000);
    } else {
      onSubmit();
    }
  };

  if (isHidden) return null;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 p-3 items-center">
      <div className="w-full">
        <Input
          onChange={(e) => onChange(e.target.value)}
          value={value}
          disabled={isDisabled}
          placeholder="Send a message"
          className={cn("border-white/10", isFollowersOnly && "rounded-t-none border-t-0")}
        />
      </div>
      <div className="ml-auto">
        <Button type="submit" size="sm" disabled={isDisabled}>
          Send
        </Button>
      </div>
    </form>
  );
};

export const ChatFormSkeleton = () => {
  return (
    <div className="flex flex-col items-center gap-y-4 p-3">
      <Skeleton className="w-full h-10" />
      <div className="flex items-center gap-x-2 ml-auto">
        <Skeleton className="h-7 w-7" />
        <Skeleton className="h-7 w-12" />
      </div>
    </div>
  );
};
