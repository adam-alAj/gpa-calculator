import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Semester from "./semester";
import "./styles/App.css";
import Homee from "./home";
import Cumulativee from "./cumulative";
import "bootstrap/dist/css/bootstrap.min.css";          // أنظمة Bootstrap
import "./styles/bootstrap-custom.css"; 
import { HelmetProvider } from "react-helmet-async";                // تخصيصنا
import Privacy from "./Privacy";
import About  from "./about";
import Contactt from "./contact";
import FAQPage from "./FAQ";
import HowToUsee from "./HTU";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
   <HelmetProvider>
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Homee />} />
      <Route path="/semester" element={<Semester />} />
      <Route  path="/cumulative" element={<Cumulativee />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contactt />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/howtouse" element={<HowToUsee />} />
      
    </Routes>
  </BrowserRouter>
  </HelmetProvider>
  );