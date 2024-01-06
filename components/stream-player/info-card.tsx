"use client";

import { Pencil } from "lucide-react";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { InfoModal } from "./info-modal";

interface InfoCardProps {
  name: string;
  thumbnailUrl: string | null;
  hostId: string;
  viewerId: string;
}

export const InfoCard = ({ name, thumbnailUrl, hostId, viewerId }: InfoCardProps) => {
  const hostAsViewer = `host-${hostId}`;
  const isHost = viewerId === hostAsViewer;

  if (!isHost) return null;

  return (
    <div className="px-4">
      <div className="rounded-xl bg-background">
        <div className="flex items-center gap-x-2.5 p-4">
          <div className="rounded-md bg-blue-600 p-2 h-auto w-auto">
            <Pencil className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-semibold text-sm lg:text-lg capitalize">Edit your stream info</h2>
            <p className="text-xs lg:text-sm text-muted-foreground">Maximize your visibility</p>
          </div>
          <InfoModal initialName={name} initialThumbnailUrl={thumbnailUrl} />
        </div>
        <Separator />
        <div className="p-4 lg:p-6 space-y-4">
          <div>
            <h3 className="text-muted-foreground mb-2 text-sm">Title</h3>
            <p className="font-semibold text-sm">{name}</p>
          </div>
          <div>
            <h3 className="text-muted-foreground mb-3 text-sm">Thumbnail</h3>
            {thumbnailUrl && (
              <div className="relative aspect-video rounded-md overflow-hidden w-[200px] border border-white/10">
                <Image fill src={thumbnailUrl} alt={name} className="object-cover" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
