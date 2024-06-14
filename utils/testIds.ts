export const testIds = {
  home: {
    moviesLink: "movies-link",
    homeContainer: "home-container",
  },
  movies: {
    backLink: "back-link",
    movieList: "movie-list",
    movieItem: "movie-item",
    genreSelect: "genre-select",
    sortSelect: "sort-select",
    header: "header",
    genreSelectItem: "genre-select-item",
    sortSelectItem: " sort-select-item",
    filterButton: (buttonName: string) => `${buttonName}-button`,
    filterDropdown: (dropdownName: string) => `${dropdownName}-dropdown`,
    movieGenres: (movieId: string) => `movie-genres-${movieId}`,
  },
};
