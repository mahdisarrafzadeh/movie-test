import { RootState } from "@/redux/store";
import { useAppSelector } from "../../hooks/hooks";
import { selectFilteredAndSortedMovies } from "@/redux/slices/movies";

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
