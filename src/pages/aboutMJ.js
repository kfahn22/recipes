import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const aboutMJ = () => {
  return (
    <Layout>
      {/* <Seo title="About" /> */}
      <main className="page">
        <section className="about-page">
          <article>
            <StaticImage
              src="../assets/images/about.jpg"
              alt="author"
              className="about-img"
              placeholder="blurred"
            />
            <h2>About the Author</h2>
            <p>
              As a professional chemist for over thirty years, it was part of MJ's
              job to explain the needs and desires, the loves and the hates, the
              habits and quirks of inanimate molecules — perverse little motes
              with their own individual personalities. Throughout his career he
              had the uneviable task of trying to eliven technical reports, and
              worst of all, patent applications with enough readable proose such
              that they were not potent soporifics. Having belatedly recognized
              that he is not some god-like manipulator of the elements, MJ is 
              trying his hand at writing about the needs, desires, loves, hates, 
              habits and quirks of people with actual agency, rather than abstract
              assemblies of anthropomorphized atoms. The Sybyline is his first attempt...
              
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default aboutMJ;
