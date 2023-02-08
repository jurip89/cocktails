import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState();
  const getDetails = async () => {
    try {
      const res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      console.log(res);
      res.data.drinks ? setDetails(...res.data.drinks) : setDetails(undefined);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  const keysIngredient =
    details &&
    Object.keys(details)
      .filter((el) => el.startsWith("strIngredient"))
      .filter((el) => details[el] !== null);
  const keysMesures =
    details &&
    Object.keys(details)
      .filter((el) => el.startsWith("strMeasure"))
      .filter((el) => details[el] !== null);
  return (
    <div>
      {details && (
        <div>
          <h1>{details.strDrink}</h1>
          <img src={details.strDrinkThumb} alt="cocktail" />
          <h2>Preparation:</h2>
          <div className="container">
            <div className="ingredients">
              <h3>Ingredients:</h3>
          {keysIngredient.map((el, i) => (
            <p key={i}>
              {" "}
              <b>{details[el]}</b> {details[keysMesures[i]]}
            </p>
          ))}
            </div>
             <div className="instuctions">
            <h3>Instructions:</h3>
            <p>{details.strInstructions}</p>
          </div>
        </div>
          </div>
          

         
      )}
    </div>
  );
};

export default Details;
