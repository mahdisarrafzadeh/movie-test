import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { Movie as MoviesType } from "@/types";

export const fetchMovies = createAsyncThunk<MoviesType[]>(
  "movies/fetchMovies",
  async () => {
    const response = await axios.get("data.json");
    return response?.data.movies;
  }
);
