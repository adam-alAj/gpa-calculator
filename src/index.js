import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Semester from "./semester";
import "./styles/App.css";
import Home from "./pages/Home";
import Cumulativee from "./cumulative";
import "bootstrap/dist/css/bootstrap.min.css";          // أنظمة Bootstrap
import "./styles/bootstrap-custom.css"; 
import { HelmetProvider } from "react-helmet-async";                // تخصيصنا

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
   <HelmetProvider>
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/semester" element={<Semester />} />
      <Route  path="/cumulative" element={<Cumulativee />} />
    </Routes>
  </BrowserRouter>
  </HelmetProvider>
  );