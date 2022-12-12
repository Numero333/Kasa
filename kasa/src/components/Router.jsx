/* ----------------------------------------------------------------
This component is the router of the application,
<Rooter /> have 4 routes and handle every path inexisting
----------------------------------------------- */

import { Routes, Route } from "react-router-dom";
import { About } from "../pages/About";
import { Apartement } from "../pages/Apartment";
import { Error } from "../pages/Error";
import { Home } from "../pages/Home";

export const Router = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Apartement/:id" element={<Apartement />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </main>
  );
};
