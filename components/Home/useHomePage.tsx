import { RootState, selectFilteredAndSortedMovies } from "@/redux";
import { useAppSelector } from "@/hooks";

const useHomePage = () => {
  const { filter, sort } = useAppSelector((state: RootState) =>
    selectFilteredAndSortedMovies(state)
  );

  const query: { filter?: string; sort?: string } = {};
  if (sort) query.sort = sort;
  if (filter) query.filter = filter;

  return query;
};

export default useHomePage;
