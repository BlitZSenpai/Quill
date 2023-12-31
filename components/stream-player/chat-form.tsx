"use client";

import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

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
  return (
    <form onSubmit={() => {}} className="flex flex-col gap-y-4 p-3 items-center">
      <div className="w-full">
        <Input
          onChange={() => {}}
          value={value}
          disabled={false}
          placeholder="Send a message"
          className={cn("border-white/10")}
        />
      </div>
      <div className="ml-auto">
        <Button type="submit" size="sm" disabled={false}>
          Send
        </Button>
      </div>
    </form>
  );
};
