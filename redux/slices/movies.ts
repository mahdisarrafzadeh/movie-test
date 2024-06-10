import { Movie } from "@/types/Movie";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

interface moviesState {
  selectedGenres: string[];
  loading: boolean;
  movies: Movie[];
  error?: string;
}

const initialState: moviesState = {
  selectedGenres: [],
  loading: false,
  movies: [],
  error: undefined,
};

const url = {
  movies: "data.json",
};

export const retrieveMovies = createAsyncThunk(
  "products/retrieve",
  async () => {
    try {
      const res = await axios.get(url.movies);
      return res?.data?.movies;
    } catch (error) {
      throw error;
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSelectedGenres(state, action: PayloadAction<string[]>) {
      state.selectedGenres = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(retrieveMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(retrieveMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(retrieveMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.error?.message;
      });
  },
});

export const { setSelectedGenres } = moviesSlice.actions;

export const selectMovies = (state: RootState) => state.movies;
export default moviesSlice.reducer;
