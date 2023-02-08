import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./App.css";

export default function App() {
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


  return (
    <main className="App">
     <section role='contentinfo'>
        {data.length > 0 && data.map(el => (
          <div key={el.idDrink}>
            
              
              
            <figure><h2>{el.strDrink}</h2>
              <div
                className="image"
              style={{backgroundImage:`url(${el.strDrinkThumb
                    })`}} alt="cocktail" />
                <figcaption>{el.strCategory}</figcaption>
              </figure>
              <Link className="link" to={`/cocktail/${el.idDrink}`}><button>Details</button></Link>
        </div>
      ))}  
        </section>
    </main>
  );
}
