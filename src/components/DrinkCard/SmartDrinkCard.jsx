import React, { useState, useEffect } from "react";

import DrinkCard from "./DrinkCard";

const SmartDrinkCard = () => {
    const [random,setRandom] = useState()

const fetchRandomCocktail = async () => {
  const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  
  setRandom(...res.data.drinks)
}

useEffect(() => {
  fetchRandomCocktail()
}, [])
    
    return random &&(
       <DrinkCard el={random}/>
    )
}

export default SmartDrinkCard