import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const getDetails = async () => {
    const res = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    setDetails(...res.data.drinks);
  };

  useEffect(() => {
    getDetails();
  }, []);

  const keysIngredient = Object.keys(details)
    .filter((el) => el.startsWith("strIngredient"))
    .filter((el) => details[el] !== null);
  const keysMesures = Object.keys(details)
    .filter((el) => el.startsWith("strMeasure"))
    .filter((el) => details[el] !== null);
  return (
    <div>
      {console.log(details)}
      <h1>{details.strDrink}</h1>
      <img src={details.strDrinkThumb} alt="cocktail" />
      <h2>Preparation:</h2>
      <h3>Ingredients</h3>
      {keysIngredient.map((el, i) => (
        <p key={i}>
          {" "}
          <b>{details[el]}</b> {details[keysMesures[i]]}
        </p>
      ))}

      <h3>Instruction</h3>
      <p>{details.strInstructions}</p>
    </div>
  );
};

export default Details;
