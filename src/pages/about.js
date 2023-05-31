import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import Seo from "../components/seo.js";
const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <Seo title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>About the Author</h2>
            <p>
              
            </p>
            <p>
              Tumeric 3 wolf moon shoreditch palo santo. DSA cardigan pour-over,
              velit id sint snackwave VHS. Godard quis in trust fund. Meditation
              in quinoa, vaporware bitters tbh tacos raclette fit readymade
              exercitation hammock consectetur skateboard reprehenderit. Seitan
              tofu butcher single-origin coffee chambray vape selvage taxidermy.
              Sustainable shabby chic cliche exercitation. Fanny pack VHS
              crucifix, yr dolore do shoreditch pok pok hella edison bulb etsy.
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>look at this Awesome recipes!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default About;
