import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();

  const termToUse = decodeURI(term);

  // API call to get searched movies

  // API call to get popular movies

  return <div>page</div>;
}

export default SearchPage;
