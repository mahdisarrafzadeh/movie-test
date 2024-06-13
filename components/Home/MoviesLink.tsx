"use client";
import useHomePage from "@/components/Home/useHomePage";
import Link from "next/link";
import React from "react";

const MoviesLink = () => {
  const query = useHomePage();

  return (
    <Link
      href={{ pathname: "/movies", query }}
      className="bg-yellow-500 text-3xl p-3 rounded-lg"
    >
      لیست فیلم ها
    </Link>
  );
};

export default MoviesLink;
