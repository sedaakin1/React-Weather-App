import axios from "axios";
import './App.css';
import { useEffect, useState } from "react";
import City from "./City";


function App() {
  const key = "063bb121e8b458f3aeb340234a1a8772";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
        
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]);

  console.log(search);

  return (
    <div className="App">
      <div>
        
         <input 
         onChange={(e)=> setSearch(e.target.value)}
         type="text" 
         placeholder="Placeholder" 
         className="my-5 px-3 w-[250px] py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
         />
         {city && <City city={city} />}
      </div>
    </div>
  );
}

export default App;
