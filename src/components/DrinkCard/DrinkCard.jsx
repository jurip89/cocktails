import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./style.css";

const DrinkCard = ({ el }) => {
  return (
    <div role="contentinfo">
      <figure role="figure">
        <h2 role="heading">{el.strDrink}</h2>
        <div
          role="img"
          className="image"
          style={{ backgroundImage: `url(${el.strDrinkThumb})` }}
          alt="cocktail"
        />
        <figcaption role="definition">{el.strCategory}</figcaption>
      </figure>
      <Link className="link" to={`/cocktail/${el.idDrink}`}>
        <button role="button">Details</button>
      </Link>
    </div>
  );
};

export default DrinkCard;
