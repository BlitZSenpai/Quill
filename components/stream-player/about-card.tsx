"use client";

import { VerifiedMark } from "../verified-mark";

interface AboutCardProps {
  hostName: string;
  hostId: string;
  viewerId: string;
  bio: string | null;
  followersCount: number;
}

export const AboutCard = ({ hostName, hostId, viewerId, bio, followersCount }: AboutCardProps) => {
  const hostAsViewer = `host-${hostId}`;
  const isHost = viewerId === hostAsViewer;

  const followersCountLabel = followersCount === 1 ? "follower" : "followers";

  return (
    <div className="px-4">
      <div className="group rounded-xl p-6 lg:p-10 flex flex-col bg-background gap-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2 font-semibold text-lg lg:text-2xl capitalize">
            About {hostName}
            <VerifiedMark />
          </div>
          {isHost && <p>Edit</p>}
        </div>
        <div className="text-sm text-muted-foreground">
          <span className="font-semibold text-primary">{followersCount}</span> {followersCountLabel}
        </div>
        <p className="text-sm">
          {bio ||
            "My name is Walter Hartwell White. I live at 308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104. This is my confession..."}
        </p>
      </div>
    </div>
  );
};
