import React from "react";
import TagsList from "./TagsList";
import CharactersList from "./CharactersList.js";
import { graphql, useStaticQuery } from "gatsby";

const AllCharacters = () => {
  // const data = useStaticQuery(query);
  // const characters = data.allCharacters.nodes;

  return (
    <section className="characters-container">
      <p>characters will go here</p>
      {/* <TagsList characters={characters} />
      <CharactersList characters={characters} /> */}
    </section>
  );
};

export default AllCharacters;
