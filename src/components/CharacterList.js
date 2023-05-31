import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import slugify from "slugify";
const CharacterList = ({ characters = [] }) => {
  return (
    <div className="character-list">
      {characters.map((character) => {
        const { id, title, image } = character;
        const pathToImage = getImage(image);
        const slug = slugify(title, { lower: true });
        return (
          <Link key={id} to={`/${slug}`} className="character">
            <GatsbyImage
              image={pathToImage}
              className="character-img"
              alt={title}
            />
            <h5>{title}</h5>
            <p></p>
          </Link>
        );
      })}
    </div>
  );
};

export default CharacterList;
