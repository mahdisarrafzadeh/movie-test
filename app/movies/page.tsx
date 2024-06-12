"use client";
import { useEffect } from "react";
// App
//
import MovieItem from "@/components/MovieItem";
import FilterMovie from "@/components/FilterMovies/FilterMovie";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import {
  fetchMovies,
  selectFilteredAndSortedMovies,
} from "@/redux/slices/movies";
import { RootState } from "@/redux/store";

const Movies = () => {
  const movies = useAppSelector((state: RootState) =>
    selectFilteredAndSortedMovies(state)
  );

  useEffect(() => {
    dispatch(fetchMovies());
  }, []); // eslint-disable-line

  const dispatch = useAppDispatch();

  return (
    <div className="">
      <FilterMovie />
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
        {movies.map((movie) => (
          <MovieItem movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
