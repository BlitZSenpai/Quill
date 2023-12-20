"use client";

import { onBlock, onUnBlock } from "@/actions/block";
import { onFollow, onUnFollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";

interface ActionsProps {
  isFollowing: boolean;
  isBlocked: boolean;
  userId: string;
}

export const Actions = ({ isFollowing, userId, isBlocked }: ActionsProps) => {
  const [isPending, startTransition] = useTransition();

  const handleFollow = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) => toast.success(`You are now following ${data.following.username}`))
        .catch(() => toast.error("Something went wrong!"));
    });
  };

  const handleUnFollow = () => {
    startTransition(() => {
      onUnFollow(userId)
        .then((data) => toast.success(`You have unfollowed ${data.following.username}`))
        .catch(() => toast.error("Something went wrong!"));
    });
  };

  const onFollowClick = () => {
    if (isFollowing) {
      handleUnFollow();
    } else {
      handleFollow();
    }
  };

  const handleBlock = () => {
    startTransition(() => {
      onBlock(userId)
        .then((data) => toast.success(`You are now blocking ${data.blocked.username}`))
        .catch(() => toast.error("Something went wrong!"));
    });
  };

  const handleUnBlock = () => {
    startTransition(() => {
      onUnBlock(userId)
        .then((data) => toast.success(`You have unblocked ${data.blocked.username}`))
        .catch(() => toast.error("Something went wrong!"));
    });
  };
  const onBlockClick = () => {
    if (isBlocked) {
      handleUnBlock();
    } else {
      handleBlock();
    }
  };

  return (
    <>
      <Button disabled={isPending} onClick={onFollowClick} variant="primary">
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>
      <Button disabled={isPending} onClick={onBlockClick}>
        {isBlocked ? "Unblock" : "Block"}
      </Button>
    </>
  );
};
