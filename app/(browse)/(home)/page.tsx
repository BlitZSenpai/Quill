import { Suspense } from "react";
import { FeedResults, FeedResultsSkeleton } from "./_components/feed-results";

export default function Home() {
  return (
    <div className="h-full p-8 max-w-screen-2xl mx-auto">
      <Suspense fallback={<FeedResultsSkeleton />}>
        <FeedResults />
      </Suspense>
    </div>
  );
}
