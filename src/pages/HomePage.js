import React, { useState } from "react";
import Header from "../components/Header";
import Health from "../components/Health";

const HomePage = () => {
  const [username, setUsername] = useState("John");

  return (
    <div>
      <Header />
      <main>
        <div className="flex flex-col text-center text-xl font-bold">
          <h1>Hey {username}</h1>
          <span>what are we doing today ?</span>
        </div>
        <div className="bg-[#EEEDEB] mt-8">
          <h2>Our goal</h2>
          <Health />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
