import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Places from "../pages/places";
import Cities from "../pages/cities"
import PageNotFound from "./../pages/pageNotFound"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ciudades" element={<Cities />} />
        <Route path="/sitios" element={<Places />} />
        <Route path="/sitios/:ciudad" element={<Places />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};