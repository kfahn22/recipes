import React from "react";
import TagsList from "./TagsList";
import CharactersList from "./CharactersList.js";
import { graphql, useStaticQuery } from "gatsby";
const query = graphql``;
const AllCharacters = () => {
  const data = useStaticQuery(query);
  const characters = data.allCharacters.nodes;
  console.log(data);
  // return (
  //   <section className="characters-container">
  //     <TagsList characters={characters} />
  //     <CharactersList characters={characters} />
  //   </section>
  // );
};

export default AllCharacters;
