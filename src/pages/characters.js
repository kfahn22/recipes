import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
const characters = () => {
  return (
    <Layout>
      <main class="character-page">
        <h1>Major Characters</h1>

        <div className="characters-container">
          <div className="character">
            <StaticImage
              src="../assets/images/josip.jpg"
              alt="Josip"
              className="character-img"
              placeholder="blurred"
            />
            <h4>Josip</h4>
            <p>Factotum</p>
          </div>
          <div className="character">
            <StaticImage
              src="../assets/images/margerai.jpg"
              alt="Margerai"
              className="character-img"
              placeholder="blurred"
            />
            <h4>Margerai</h4>
            <p>Nymphalym</p>
          </div>
          <div className="character">
            <StaticImage
              src="../assets/images/camylin.jpg"
              alt="Premier"
              className="character-img"
              placeholder="blurred"
            />
            <h4>Camylin</h4>
            <p>Premier</p>
          </div>
          <div className="character">
            <StaticImage
              src="../assets/images/marina.jpg"
              alt="Marina"
              className="character-img"
              placeholder="blurred"
            />
            <h4>Marina</h4>
            <p>Nymphalym</p>
          </div>
          <div className="character">
            <StaticImage
              src="../assets/images/gabrille.jpg"
              alt="Gabrille"
              className="character-img"
              placeholder="blurred"
            />
            <h4>Gabrille</h4>
            <p>Nymphalym</p>
          </div>
          <div className="character">
            <StaticImage
              src="../assets/images/aeliros.jpg"
              alt="Aeliros"
              className="character-img"
              placeholder="blurred"
            />
            <h4>Aeliros</h4>
            <p>Nymphalym</p>
          </div>
          <div className="character">
            <StaticImage
              src="../assets/images/kitren.jpg"
              alt="Kitren"
              className="character-img"
              placeholder="blurred"
            />
            <h4>Kitren</h4>
            <p>Sybyline</p>
          </div>
          <div className="character">
            <StaticImage
              src="../assets/images/marbeth.jpg"
              alt="Marbeth"
              className="character-img"
              placeholder="blurred"
            />
            <h4>Marbeth</h4>
            <p>Sybyline</p>
          </div>
          <div className="character">
            <StaticImage
              src="../assets/images/lehsa.jpg"
              alt="Lehsa"
              className="character-img"
              placeholder="blurred"
            />
            <h4>Lehsa</h4>
            <p>Sybyline</p>
          </div>
          <div className="character">
            <StaticImage
              src="../assets/images/obrian.jpg"
              alt="Obrian"
              className="character-img"
              placeholder="blurred"
            />
            <h4>Captain Obrian</h4>
            <p>Palace Guards</p>
          </div>
          <div className="character">
            <StaticImage
              src="../assets/images/revillot.jpg"
              alt="Revillot"
              className="character-img"
              placeholder="blurred"
            />
            <h4>Revillot</h4>
            <p>Palace Guards</p>
          </div>
          <div className="character">
            <StaticImage
              src="../assets/images/revlo.jpg"
              alt="Revlo"
              className="character-img"
              placeholder="blurred"
            />
            <h4>Revlo</h4>
            <p>Aubrey</p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default characters;
