import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const DrinkCard = ({ el }) => {
  return (
    <div>
      <figure>
        <h2>{el.strDrink}</h2>
        <div
          className="image"
          style={{ backgroundImage: `url(${el.strDrinkThumb})` }}
          alt="cocktail"
        />
        <figcaption>{el.strCategory}</figcaption>
      </figure>
      <Link className="link" to={`/cocktail/${el.idDrink}`}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default DrinkCard;
