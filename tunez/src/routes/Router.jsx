import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/homepage/homepage";
import { useState } from "react";

export const Router = () => {
  const [home, setHome] = useState(1);

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={
        <HomePage 
        home={home} 
        setHome={setHome} 
        />} />

      </Routes>
    </BrowserRouter>
  );
};
