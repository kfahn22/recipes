import * as React from "react";
import Layout from "../components/Layout.js";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo.js";

export default function Home() {
  return (
    <Layout>
      <Seo title="Home " />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="..assets/images/ship.png"
            alt="ship"
            class="hero-img"
            placeholder="traceSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>The Sybyline</h1>
              <h4>by MJ McGuiness</h4>
            </div>
          </div>
        </header>
        {/* <AllRecipes /> */}
      </main>
    </Layout>
  );
}
