import { Thumbnail } from "@/components/thumbnail";
import { Stream, User } from "@prisma/client";
import Link from "next/link";

interface FeedCardProps {
  data: Stream & { user: User };
}

export const FeedCard = ({ data }: FeedCardProps) => {
  return (
    <Link href={`/${data.user.username}`}>
      <div className="h-full w-full space-y-4">
        <Thumbnail
          src={data.thumbnailUrl}
          fallback={data.user.imageUrl}
          isLive={data.isLive}
          username={data.user.username}
        />
      </div>
    </Link>
  );
};
