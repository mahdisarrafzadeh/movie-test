import React from "react";
import Filter from "@/components/MultiSelect";

import useFilterMovies from "./useFilterMovies";
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
    <div className="flex flex-row justify-center w-screen space-x-8 space-x-reverse p-8 ">
      <Filter
        className="w-1/3"
        title="ژانر"
        items={genres}
        value={newParams.get("category") ?? undefined}
        handleChange={handleGenreFilter}
        col={2}
      />
      <Filter
        className="w-1/3"
        title="امتیاز فیلم"
        items={rateRange}
        col={1}
        value={newParams.get("rate") ?? undefined}
        handleChange={handleRateFilter}
      />
    </div>
  );
};

export default FilterMovie;
