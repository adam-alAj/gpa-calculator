import React from "react";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function Homee() {
  return (
    <div className="app">
      <Header />
      <Container className="my-4">
        <Home /> 
      </Container>
      <Footer />
    </div>
  );
}
export default Homee;