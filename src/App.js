import React from "react";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/movies/:id" element={<SingleMovie />}></Route>
    </Routes>
  );
}

export default App;
