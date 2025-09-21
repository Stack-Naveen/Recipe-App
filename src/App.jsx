import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import Favourites from "./pages/favourites";
import Details from "./pages/details";

function App() {
  return (
    <div>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
