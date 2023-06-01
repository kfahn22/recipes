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
            src="src/assets/images/ship.png"
            alt="ship"
            class="hero-img"
            placeholder="traceSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>The Sybyline</h1>
              <h4>by MJ McGuiness</h4>
              <p>
                What does it mean when magic suddenly appears in a non-magical
                world? This is the question confronting government functionaries
                (and spies) Josip Franson and Margerai Dokai when the Sybyline,
                a clan of mysterious mages, arrive in the pre-industrial nation
                of Emor. The Sybyline predict the weather and cure diseases, but
                is this because they also control the weather and cause plagues?
                Could they be agents of the dreaded despotism of Anihc? Josip
                and his longed-for love, Margerai, must discover whether the
                Sybyline are really benevolent, or if their good works are cover
                for sinister ends. As Josip and Margerai struggle to understand
                the Sybyline’s motives, greed, suspicion, betrayal, and violence
                — not magic — thwart their efforts. Emor devolves into chaos
                just as Josip and Margerai are forced into a journey on the high
                seas to faraway islands with the two most dangerous Sybyline
                women as companions.
              </p>
            </div>
          </div>
        </header>
        {/* <AllRecipes /> */}
      </main>
    </Layout>
  );
}
