"use client";
import React from "react";

import useFilterMovies from "./useFilterMovies";
import Select from "@/base/Select/Select";
import { FilterItemsInterface } from "@/types/Filter";

const genres: FilterItemsInterface[] = [
  { label: "درام", value: "drama" },
  { label: "کمدی", value: "comedy" },
  { label: "علمی تخیلی", value: "sci-fi" },
  { label: "اکشن", value: "action" },
];
const rateRange: FilterItemsInterface[] = [
  { label: "بالاترین امتیاز", value: "highest" },
  { label: "پایین ترین امتیاز", value: "lowest" },
];

const FilterMovie = () => {
  const { handleGenreFilter, handleRateFilter, newParams } = useFilterMovies();
  return (
    <>
      <Select
        className="max-sm:w-full mt-3 md:w-1/3"
        title="ژانر"
        items={genres}
        value={newParams.get("category") ?? undefined}
        handleChange={handleGenreFilter}
        col={2}
      />
      <Select
        className="max-sm:w-full mt-3 w-1/3 md:w-1/3"
        title="امتیاز فیلم"
        items={rateRange}
        col={1}
        value={newParams.get("sort") ?? undefined}
        handleChange={handleRateFilter}
      />
    </>
  );
};

export default FilterMovie;
