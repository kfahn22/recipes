import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Seo from "../components/seo.js";
const About = () => {
  return (
    <Layout>
      <Seo title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>About the Author</h2>
            <p>
              As a professional chemist for over thirty years, it has been my
              job to explain the needs and desires, the loves and the hates, the
              habits and quirks of inanimate molecules — perverse little motes
              with their own individual personalities. As I move into
              retirement, I’m trying my hand at writing about the needs,
              desires, loves, hates, habits and quirks of people with actual
              agency, rather than abstract assemblies of anthropomorphized
              atoms. This is my first attempt...
            </p>
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
