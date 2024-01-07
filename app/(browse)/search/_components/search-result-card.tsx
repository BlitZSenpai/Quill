import { Thumbnail } from "@/components/thumbnail";
import { VerifiedMark } from "@/components/verified-mark";
import { Stream, User } from "@prisma/client";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";

interface SearchResultCardProps {
  data: Stream & { user: User };
}

export const SearchResultCard = ({ data }: SearchResultCardProps) => {
  return (
    <Link href={`/${data.user.username}`}>
      <div className="w-full flex gap-x-4">
        <div className="relative h-[9rem] w-[16rem]">
          <Thumbnail
            src={data.thumbnailUrl}
            fallback={data.user.imageUrl}
            isLive={data.isLive}
            username={data.user.username}
          />
          <div className="space-y-1">
            <div className="flex items-center gap-x-2">
              <p className="font-bold text-lg cursor-pointer hover:textblue500 capitalize">
                {data.user.username}
              </p>
              <VerifiedMark />
            </div>
            <p className="text-sm text-muted-foreground">{data.name}</p>
            <p className="text-sm text-muted-foreground">
              {formatDistanceToNow(new Date(data.updatedAt), {
                addSuffix: true,
              })}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
