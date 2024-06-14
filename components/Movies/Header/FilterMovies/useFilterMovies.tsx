"use client";
import { useCallback, useEffect, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
////App
//
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import {
  clearFilter,
  clearSort,
  selectFilteredAndSortedMovies,
  setFilter,
  setSort,
} from "@/redux/slices/movies";
import { RootState } from "@/redux/store";

const useFilterMovies = () => {
  const firstRender = useRef(true);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const newParams = new URLSearchParams(searchParams.toString());

  const dispatch = useAppDispatch();
  const movies = useAppSelector((state: RootState) =>
    selectFilteredAndSortedMovies(state)
  );

  const handleGenreFilter = useCallback(
    (selectedItems: string) => {
      const currentCategory = newParams.get("category");
      if (currentCategory === selectedItems) {
        newParams.delete("category");
        dispatch(clearFilter());
      } else {
        newParams.set("category", selectedItems);
        dispatch(setFilter(selectedItems));
      }
      router.push(`${pathname}?${newParams.toString()}`);
    },
    [router, newParams]
  );

  const handleRateFilter = useCallback(
    (selectedItems: string) => {
      const currentSort = newParams.get("sort");
      if (currentSort === selectedItems) {
        newParams.delete("sort");
        dispatch(clearSort());
      } else {
        newParams.set("sort", selectedItems);
        dispatch(setSort(selectedItems));
      }
      router.push(`${pathname}?${newParams.toString()}`);
    },
    [router, newParams]
  );

  useEffect(() => {
    if (!firstRender.current || !movies) return;
    if (newParams.has("category")) {
      dispatch(setFilter(newParams.get("category") ?? ""));
    }
    if (newParams.has("sort")) {
      dispatch(setSort(newParams.get("sort") ?? ""));
    }
    firstRender.current = false;
  }, [movies, dispatch]);

  return {
    handleGenreFilter,
    handleRateFilter,
    newParams,
    movies,
  };
};

export default useFilterMovies;
