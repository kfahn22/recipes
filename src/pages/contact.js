import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/seo.js";

const Contact = ({ data }) => {
  return (
    <Layout>
      <Seo title="Contact " />
      <main className="page">
        <section className="">
          <article className="contact-info">
            <h3>Are you interested in being a beta reader?</h3>
            <p>
              I am looking for beta readers for my book. If you are interested,
              please contact me.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/xlekkqkk"
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

export default Contact;
