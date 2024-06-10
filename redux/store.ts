import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/movies";

export const makeStore = () => {
  return configureStore({
    reducer: {
      movies: moviesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
