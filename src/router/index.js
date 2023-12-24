import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Places from "../pages/places";
import PlacesDetail from "../pages/places/detail";
import Cities from "../pages/cities";
import PageNotFound from "./../pages/pageNotFound";
import Login from "./../pages/login";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ciudades" element={<Cities />} />
        <Route path="/sitios" element={<Places />} />
        <Route path="/sitios/:ciudad" element={<Places />} />
        <Route path="/sitios/detalle/:id" element={<PlacesDetail />} />
        <Route path="/iniciar_sesion" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};