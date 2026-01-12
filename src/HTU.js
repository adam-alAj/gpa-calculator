import React from "react";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import HowToUse from "./pages/HowToUse";
import Footer from "./components/Footer";

function HowToUsee() {
  return (
    <div className="app">
      <Header />
      <Container className="my-4">
        <HowToUse /> 
      </Container>
      <Footer />
    </div>
  );
}
export default HowToUsee;