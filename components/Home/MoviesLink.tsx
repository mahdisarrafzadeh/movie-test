"use client";
import React from "react";
import Link from "next/link";

import { string, testIds } from "@/utils";
import useHomePage from "./useHomePage";

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
