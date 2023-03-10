import { useState, useEffect } from "react";
import { DrinkCard, SearchForm, SmartDrinkCard } from "../../components";
import axios from "axios";
import "./style.css";
import { URL } from "../../constants";
export default function Home() {
  const [data, setData] = useState(undefined);

  const arr = new Array(16).fill(null);

  const fetchSearch = async (str) => {
    const res = await axios.get(`${URL}/search.php?s=${str}`);
    setData(res.data.drinks);
  };

  return (
    <div>
      <SearchForm submit={fetchSearch} />
      <section role="contentinfo">
        {data
          ? data.map((el) => <DrinkCard key={el.idDrink} el={el} />)
          : arr.map((el, i) => <SmartDrinkCard key={i} />)}
      </section>
    </div>
  );
}
