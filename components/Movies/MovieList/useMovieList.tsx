import { useEffect } from "react";

import {
  fetchMovies,
  selectFilteredAndSortedMovies,
} from "@/redux/slices/movies";
import { RootState } from "@/redux/store";
import { useAppDispatch, useAppSelector } from "@/hooks";

const useMovieList = () => {
  const dispatch = useAppDispatch();
  const { filteredMovies } = useAppSelector((state: RootState) =>
    selectFilteredAndSortedMovies(state)
  );

  const { status } = useAppSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []); // eslint-disable-line

  return { filteredMovies, status };
};

export default useMovieList;
