import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { RootState, fetchMovies } from "@/redux";
import { Movie as MoviesType } from "@/types";

interface MoviesState {
  movies: MoviesType[];
  filter: string;
  sort: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: MoviesState = {
  movies: [],
  filter: "",
  sort: "",
  status: "idle",
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
    clearFilter(state) {
      state.filter = "";
    },
    clearSort(state) {
      state.sort = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchMovies.fulfilled,
        (state, action: PayloadAction<MoviesType[]>) => {
          state.status = "succeeded";
          state.movies = action.payload;
        }
      )
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch movies";
      });
  },
});

export const { setFilter, setSort, clearFilter, clearSort } =
  moviesSlice.actions;

export default moviesSlice.reducer;

// Selectors
const selectMovies = (state: RootState) => state.movies.movies;
const selectFilter = (state: RootState) => state.movies.filter;
const selectSort = (state: RootState) => state.movies.sort;

export const selectFilteredAndSortedMovies = createSelector(
  [selectMovies, selectFilter, selectSort],
  (movies, filter, sort) => {
    let filteredMovies = filter
      ? movies.filter((movie) =>
          movie.categories.some((category) => filter === category.title_en)
        )
      : movies;

    if (sort) {
      filteredMovies = filteredMovies
        .slice()
        .sort((a, b) =>
          sort === "highest"
            ? parseFloat(b.rate_avrage) - parseFloat(a.rate_avrage)
            : parseFloat(a.rate_avrage) - parseFloat(b.rate_avrage)
        );
    }

    return { filteredMovies, sort, filter };
  }
);
