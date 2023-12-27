import { StreamPlayer } from "@/components/stream-player";
import { getUserByUsername } from "@/lib/user-service";
import { auth } from "@clerk/nextjs/server";

interface DashboardPageProps {
  params: {
    username: string;
  };
}

const DashboardPage = async ({ params }: DashboardPageProps) => {
  const externalUser = auth();
  const user = await getUserByUsername(params.username);

  if (!user || user.externalUserId !== externalUser?.userId || !user.stream) {
    throw new Error("Unauthorized");
  }
  return (
    <div className="h-full">
      <StreamPlayer user={user} stream={user.stream} isFollowing />
    </div>
  );
};

export default DashboardPage;
