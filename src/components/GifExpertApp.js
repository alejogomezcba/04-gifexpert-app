import React, { useState } from "react";
import { AddCategory } from './AddCategory';
import GifGrid from "./GifGrid";


export const GifExpertapp = ({defaultCategories = []}) => {
  const initialCategories = defaultCategories.length > 0 ? defaultCategories : ['Dragon Ball', 'OnePunch'];
  const [categories, setCategories] = useState(initialCategories);

  return (
    <>
      <h2>GifExpertapp</h2>
      <hr />

      <AddCategory setCategories={setCategories} /> 

      <ul>
        {categories.map(category => (
          <GifGrid
            category={category}
            key={category}
          />
        ))}
      </ul>
    </>
  );
};
