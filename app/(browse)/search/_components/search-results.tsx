interface SearchResultsProps {
  term?: string;
}

export const SearchResults = ({ term }: SearchResultsProps) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Results for the term &quot;{term}&quot;</h2>
    </div>
  );
};

export const SearchResultsSkeleton = () => {
  return <div></div>;
};
