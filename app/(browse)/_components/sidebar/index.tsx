import { getRecommended } from "@/lib/recommended-servive";
import { Recommended, RecommendedSkeleton } from "./recommended";
import { Toggle } from "./toggle";
import { Wrapper } from "./wrapper";
import { getFollowedUsers } from "@/lib/follow-service";
import { Following } from "./following";

export const Sidebar = async () => {
  const recommended = await getRecommended();
  const following = await getFollowedUsers();

  return (
    <Wrapper>
      <Toggle />
      <div className="space-y-4 pt-4 lg:pt-0">
        <Recommended data={recommended} />
        <Following data={following} />
      </div>
    </Wrapper>
  );
};

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 w-[70px] lg:w-60 z-50 flex flex-col h-full bg-background border-r border-[#2D2E35]">
      <RecommendedSkeleton />
    </aside>
  );
};
