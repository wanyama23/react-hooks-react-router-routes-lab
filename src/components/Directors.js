import React from "react";
import { directors, movies } from "../data";

function Directors() {
  const director = directors.map((director) =>(
    <div key={director.name}>
      {director.name}
      <ul>
         {director.movies.map((movie)=>{
          return <li key={movie}>{movie}</li>
         })}
      </ul>
    </div>
  ))
  return (
  <div>
    <h1>Directors Page</h1>
     {director}
    </div>
  );
}

export default Directors;