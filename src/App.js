import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Exercice from "./pages/Exercice";
import HomePage from "./pages/HomePage";
import Friends from "./pages/Friends";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/exercices" element={<Exercice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
