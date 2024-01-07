import { redirect } from "next/navigation";
import { SearchResults, SearchResultsSkeleton } from "./_components/search-results";
import { Suspense } from "react";

interface SearchPageProps {
  searchParams: {
    term?: string;
  };
}

const SearchPage = ({ searchParams }: SearchPageProps) => {
  if (!searchParams.term) {
    redirect("/");
  }

  return (
    <div className="h-full max-w-2xl p-8 mx-auto">
      <Suspense fallback={<SearchResultsSkeleton />}>
        <SearchResults term={searchParams.term} />
      </Suspense>
    </div>
  );
};

export default SearchPage;
