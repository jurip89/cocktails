import React, { useState, useEffect } from "react";
import axios from "axios";
import DrinkCard from "./DrinkCard";
import { URL } from "../../constants";
const SmartDrinkCard = () => {
  const [random, setRandom] = useState();

  const fetchRandomCocktail = async () => {
    const res = await axios.get(`${URL}/random.php`);

    setRandom(...res.data.drinks);
  };

  useEffect(() => {
    fetchRandomCocktail();
  }, []);

  return random && <DrinkCard el={random} />;
};

export default SmartDrinkCard;
