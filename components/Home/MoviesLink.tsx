"use client";
import React from "react";
import Link from "next/link";
//// App
//
import useHomePage from "@/components/Home/useHomePage";
import { string, testIds } from "@/utils";

const MoviesLink = () => {
  const query = useHomePage();
  return (
    <Link
      className="bg-yellow-500 text-3xl p-3 rounded-lg"
      href={{ pathname: string.path.movies, query }}
      data-testid={testIds.home.moviesLink}
    >
      {string.home.moviesLink}
    </Link>
  );
};

export default MoviesLink;
