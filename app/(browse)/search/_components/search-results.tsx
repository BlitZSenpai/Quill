import { getSearchResults } from "@/lib/search-service";
import { SearchResultCard } from "./search-result-card";

interface SearchResultsProps {
  term?: string;
}

export const SearchResults = async ({ term }: SearchResultsProps) => {
  const data = await getSearchResults(term);
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Results for the term &quot;{term}&quot;</h2>
      {data.length === 0 && (
        <p className="text-sm text-muted-foreground">No results found. Try searching for something else</p>
      )}
      <div className="flex flex-col gap-y-4">
        {data.map((result) => (
          <SearchResultCard data={result} key={result.id} />
        ))}
      </div>
    </div>
  );
};

export const SearchResultsSkeleton = () => {
  return <div></div>;
};
