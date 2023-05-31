import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import Seo from "../components/seo.js";
const About = () => {
  return (
    <Layout>
      <Seo title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>About the Author</h2>
            <p></p>
            <p></p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpg"
            alt="author"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  );
};

export default About;
