import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import {
  fetchMovies,
  selectFilteredAndSortedMovies,
} from "@/redux/slices/movies";
import { RootState } from "@/redux/store";

const useMovieList = () => {
  const dispatch = useAppDispatch();
  const { filteredMovies } = useAppSelector((state: RootState) =>
    selectFilteredAndSortedMovies(state)
  );

  useEffect(() => {
    dispatch(fetchMovies());
  }, []); // eslint-disable-line

  return filteredMovies;
};

export default useMovieList;
