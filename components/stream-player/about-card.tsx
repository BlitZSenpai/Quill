"use client";

interface AboutCardProps {
  hostName: string;
  hostId: string;
  viewerId: string;
  bio: string | null;
  followersCount: number;
}

export const AboutCard = ({}: AboutCardProps) => {
  return <div>about InfoCard</div>;
};
