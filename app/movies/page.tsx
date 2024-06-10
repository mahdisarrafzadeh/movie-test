"use client";
import { useEffect } from "react";
// App
//
import MovieItem from "@/components/MovieItem";
import FilterMovie from "@/components/FilterMovie";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { retrieveMovies, selectMovies } from "@/redux/slices/movies";

type Props = {};

const Movies = (props: Props) => {
  const { movies } = useAppSelector(selectMovies);

  useEffect(() => {
    dispatch(retrieveMovies());
  }, []); // eslint-disable-line

  const dispatch = useAppDispatch();

  return (
    <div className="">
      <FilterMovie />
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => <MovieItem movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};

export default Movies;
