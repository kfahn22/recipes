import React from "react";
import Layout from "../components/Layout";
const characters = () => {
  return (
    <Layout>
      <h1>Major Characters</h1>
      <div className="characters-container">
        <div className="characters">
          <h3>Josip</h3>
          <p>Factotum to the Premier</p>
        </div>
        <div className="characters">
          <h3>Margarai</h3>
          <p>Nymphalum</p>
        </div>
        <div className="characters">
          <h3>Marina</h3>
          <p>Nymphalum</p>
        </div>
        <div className="characters">
          <h3>Kitren</h3>
          <p>Sybyline</p>
        </div>
        <div className="characters">
          <h3>Marbeth</h3>
          <p>Sybyline</p>
        </div>
        <div className="characters">
          <h3>Lehsa</h3>
          <p>Sybyline</p>
        </div>
      </div>
    </Layout>
  );
};

export default characters;
