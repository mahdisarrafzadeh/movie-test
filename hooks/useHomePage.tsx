import React from "react";
import { useAppSelector } from "./hooks";
import { selectFilteredAndSortedMovies } from "@/redux/slices/movies";
import { RootState } from "@/redux/store";

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
