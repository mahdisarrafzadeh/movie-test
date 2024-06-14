import { Suspense } from "react";

import { Header, MovieList } from "@/components";

const Movies = () => {
  return (
    <Suspense fallback={<div>asd</div>}>
      <Header />
      <MovieList />
    </Suspense>
  );
};

export default Movies;
