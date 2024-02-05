import ComplexNavbar from "./Components/Navbar";
import FooterWithSitemap from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landing";
import Preowned from "./Pages/Preowned";
import Credit from "./Pages/Credit";
import Rental from "./Pages/Rental";
import AutoHitch from "./Pages/AutoHitch";
import Carruso from "./Pages/Carruso";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/SignUp";

export default function App() {
  return (
    <>
      <ComplexNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="Seminuevos" element={<Preowned />} />
          <Route path="Crédito" element={<Credit />} />
          <Route path="Arrendamiento" element={<Rental />} />
          <Route path="Auto enganche" element={<AutoHitch />} />
          <Route path="Garantá carruso" element={<Carruso />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="IniciaSesion" element={<SignIn />} />
          <Route path="RegístreseEn" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <FooterWithSitemap />
    </>
  );
}
