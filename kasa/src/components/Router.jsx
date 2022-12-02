import { Routes, Route } from "react-router-dom";
import { About } from "../pages/About";
import { Apartement } from "../pages/Apartment";
import { Error } from "../pages/Error";
import { Home } from "../pages/Home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Apartement" element={<Apartement />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
};
