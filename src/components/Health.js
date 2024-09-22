// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const API_KEY = process.env.REACT_APP_API_KEY;

// const Health = () => {
//   const [idealBW, setIdealBW] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(
//           "https://health-calculator-api.p.rapidapi.com/ibw",
//           {
//             params: {
//               height: "175",
//               body_frame: "medium",
//               gender: "male",
//               formula: "hamwi",
//             },
//             headers: {
//               "x-rapidapi-key": API_KEY,
//               "x-rapidapi-host": "health-calculator-api.p.rapidapi.com",
//             },
//           }
//         );
//         setIdealBW(res.data);
//       } catch (error) {
//         setError(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return <div></div>;
// };

// export default Health;

import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const Health = () => {
  const [idealBW, setIdealBW] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://health-calculator-api.p.rapidapi.com/ibw",
          {
            params: {
              height: "175",
              body_frame: "medium",
              gender: "male",
              formula: "hamwi",
            },
            headers: {
              "x-rapidapi-key": API_KEY,
              "x-rapidapi-host": "health-calculator-api.p.rapidapi.com",
            },
          }
        );
        setIdealBW(res.data);
        setError(null);
      } catch (error) {
        setError(error.message || "An error occurred while fetching data");
        setIdealBW(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {idealBW && (
        <div>
          <h2>Ideal Body Weight</h2>
          <p>Formula: {idealBW.formula}</p>
          <p>Ideal Body Weight: {idealBW.ibw}</p>
        </div>
      )}
    </div>
  );
};

export default Health;
