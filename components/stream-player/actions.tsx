"use client";

import { useAuth } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { onFollow, onUnFollow } from "@/actions/follow";
import { toast } from "sonner";

interface ActionsProps {
  hostId: string;
  isFollowing: boolean;
  isHost: boolean;
}

export const Actions = ({ hostId, isFollowing, isHost }: ActionsProps) => {
  const { userId } = useAuth();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleFollow = () => {
    startTransition(() => {
      onFollow(hostId)
        .then((data) => toast.success(`You are now following ${data.following.username}`))
        .catch(() => toast.error("Something went wrong!"));
    });
  };

  const handleUnfollow = () => {
    startTransition(() => {
      onUnFollow(hostId)
        .then((data) => toast.success(`You are now Unfollowing ${data.following.username}`))
        .catch(() => toast.error("Something went wrong!"));
    });
  };

  const toggleFollow = () => {
    if (!userId) {
      return router.push("/sign-in");
    }

    if (isHost) return;

    if (isFollowing) {
      handleUnfollow();
    } else {
      handleFollow();
    }
  };

  return (
    <Button
      onClick={toggleFollow || isHost}
      disabled={isPending}
      variant="primary"
      size="sm"
      className="w-full lg:w-auto">
      <Heart className={cn("h-4 w-4 mr-2", isFollowing ? "fill-white" : "fill-none")} />
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
};
