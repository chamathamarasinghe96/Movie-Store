import React from "react";
import { useGlobalContext } from "./context";

const Movies = () => {
  const data = useGlobalContext();
  console.log(data);

  return (
    <div>
      <h2>Movies</h2>
    </div>
  );
};

export default Movies;
