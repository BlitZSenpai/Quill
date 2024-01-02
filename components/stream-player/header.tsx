"use client";

import { useParticipants, useRemoteParticipant } from "@livekit/components-react";
import { UserAvatar } from "../user-avatar";
import { VerifiedMark } from "../verified-mark";
import { UserIcon } from "lucide-react";
import { Actions } from "./actions";

interface HeaderProps {
  hostId: string;
  hostName: string;
  viewerId: string;
  imageUrl: string;
  name: string;
  isFollowing: boolean;
}

export const Header = ({ hostId, hostName, viewerId, imageUrl, name, isFollowing }: HeaderProps) => {
  const participants = useParticipants();
  const participant = useRemoteParticipant(hostId);
  const isLive = !!participant;
  const participantsCount = participants.length - 1;

  const hostAsViewer = `host-${hostId}`;
  const isHost = viewerId === hostAsViewer;

  return (
    <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 items-start justify-between px-4">
      <div className="flex items-center gap-x-3">
        <UserAvatar imageUrl={imageUrl} username={hostName} size="lg" isLive={isLive} showBadge />
        <div className="space-y-1">
          <div className="flex items-center gap-x-2">
            <h2 className="text-xl font-semibold capitalize">{hostName}</h2>
            <VerifiedMark />
          </div>
          <p>{name}</p>
          {isLive ? (
            <div className="font-semibold flex items-center gap-x-1 text-xs text-rose-500">
              <UserIcon className="h-4 w-4" />
              <p>
                {participantsCount} {participantsCount === 1 ? "viewer" : "viewers"}
              </p>
            </div>
          ) : (
            <p className="font-semibold text-xs text-muted-foreground">Offline</p>
          )}
        </div>
      </div>
      <Actions isFollowing={isFollowing} hostId={hostId} isHost={isHost} />
    </div>
  );
};
