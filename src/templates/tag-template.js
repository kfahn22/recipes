import React from "react";
import { graphql } from "gatsby";
import CharactersList from "../components/CharactersList";
import Layout from "../components/Layout";
import Seo from "../components/seo.js";

const TagTemplate = ({ data, pageContext }) => {
  // const Characters = data.allContentfulRecipe.nodes;
  // return (
  //   <Layout>
  //     <Seo title={pageContext.tag} />
  //     <main className="page">
  //       <h2>{pageContext.tag}</h2>
  //       <div className="tag-recipes">
  //         <RecipesList recipes={recipes} />
  //       </div>
  //     </main>
  //   </Layout>
  // );
};

export const query = graphql``;
export default TagTemplate;
