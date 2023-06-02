import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const index = () => {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/ship.png"
            alt="cover"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h4>
                What does it mean when magic suddenly enters the world? This is
                the question confronting Josip Franson and Margerai Dokai when
                the Sybyline, a clan of mysterious mages, arrive in the
                pre-industrial nation of Emor...
              </h4>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  );
};

export default index;
