import React, { useCallback } from "react";
import Filter from "@/components/MultiSelect";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const genres = [
  { label: "درام", value: "drama" },
  { label: "کمدی", value: "comedy" },
  { label: "علمی تخیلی", value: "sci-fi" },
  { label: "اکشن", value: "action" },
];
const rateRange = [
  { label: "بالاترین امتیاز", value: "highest" },
  { label: "پایین ترین امتیاز", value: "lowest" },
];

const FilterMovie = () => {
  const [selectedGenres, setSelectedGenres] = useState<string>("");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const newParams = new URLSearchParams(searchParams.toString());
  const router = useRouter();

  const handleGenreFilter = useCallback(
    (selectedItems: string) => {
      const currentCategory = newParams.get("category");
      if (currentCategory === selectedItems) {
        newParams.delete("category");
      } else {
        newParams.set("category", selectedItems);
      }
      router.push(`${pathname}?${newParams.toString()}`);
    },
    [router, newParams]
  );

  const handleRateFilter = useCallback(
    (selectedItems: string) => {
      const currentCategory = newParams.get("Rate");
      if (currentCategory === selectedItems) {
        newParams.delete("Rate");
      } else {
        newParams.set("Rate", selectedItems);
      }
      router.push(`${pathname}?${newParams.toString()}`);
    },
    [router, newParams]
  );

  return (
    <div className="flex flex-row justify-center w-screen space-x-8 space-x-reverse p-8 ">
      <Filter
        className="w-1/3"
        title="ژانر"
        items={genres}
        handleChange={handleGenreFilter}
        col={2}
      />
      <Filter
        className="w-1/3"
        title="امتیاز فیلم"
        items={rateRange}
        col={1}
        handleChange={handleRateFilter}
      />
    </div>
  );
};

export default FilterMovie;
