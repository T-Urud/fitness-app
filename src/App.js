import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Exercice from "./pages/Exercice";
import HomePage from "./pages/HomePage";
import Friends from "./pages/Friends";
import Trainer from "./pages/Trainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/exercices" element={<Exercice />} />
        <Route path="/trainer" element={<Trainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
