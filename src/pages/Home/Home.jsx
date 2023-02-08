import { useState, useEffect } from "react";
import { DrinkCard,SearchForm } from "../../components";
import axios from "axios";
import "./style.css";

export default function Home() {
  const [data, setData] = useState([]);

const fetchData = async () => {
    const probability = ['a', 'b', 'z', 'd',"p",'f','g']
    const index = Math.floor(Math.random()*7)
    const res =  await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${probability[index]}`
    )
    const newData = res.data.drinks.slice(9)
      setData(newData)
    console.log(newData)
  };
  
  useEffect(() => {
     fetchData()
  }, []);
  const fetchSearch = async (str) => {
    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${str}`)
    setData(res.data.drinks)
  }

  return (
    <main className="App">
      <SearchForm submit={ fetchSearch} />
     <section role='contentinfo'>
        {data.length > 0 && data.map(el => (
          <DrinkCard key={el.idDrink} el={el}/>
      ))}  
        </section>
    </main>
  );
}
