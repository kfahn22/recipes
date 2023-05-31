import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import Seo from "../components/seo.js";

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes;
  return (
    <Layout>
      <Seo title="Contact " />
      <main className="page">
        <section className="">
          <article className="contact-info">
            <h3>What To Get In Touch?</h3>
            <p>
              I'm baby praxis poke literally selfies, kickstarter cornhole
              ennui. Trust fund pitchfork cornhole, flexitarian heirloom praxis
              DSA paleo put a bird on it forage polaroid schlitz. Ramps drinking
              vinegar JOMO try-hard, cliche humblebrag bodega boys small batch.
              Seitan twee keytar fit distillery listicle 90's authentic ennui
              tote bag. Pug fam viral, hashtag ramps crucifix keytar. Vice
              semiotics chia intelligentsia freegan.
            </p>
            <p>
              Shabby chic iPhone before they sold out, kinfolk irony JOMO
              sartorial yes plz edison bulb flannel brunch snackwave 90's. Lo-fi
              polaroid hammock, hot chicken fanny pack occupy adaptogen swag
              cold-pressed. 90's skateboard +1, meggings fixie roof party
              celiac. Gastropub iceland raw denim jianbing stumptown pop-up.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/xeqwwyqk"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
                <button type="submit" className="btn block">
                  Submit
                </button>
              </div>
            </form>
          </article>
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

export default Contact;
