import React from "react";
import "./App.css";
import Quiz from "./page/Quiz";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
