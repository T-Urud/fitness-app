import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";

const Exercice = () => {
  const [exoData, setExoData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://exercise-db-fitness-workout-gym.p.rapidapi.com/list/equipment",
          {
            headers: {
              "X-RapidAPI-Host":
                "exercise-db-fitness-workout-gym.p.rapidapi.com",
              "X-RapidAPI-Key":
                "1eede8bc94msh322d92a53e7c23ap1b9be9jsn0b65ff3ce657",
            },
          }
        );
        setExoData(res.data.list);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {exoData.map((equipment, index) => (
          <li key={index}>
            <p>{equipment}</p>
          </li>
        ))}
      </ul>
      <Navigation />
    </div>
  );
};

export default Exercice;
