import React from "react";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Cumulative from "./pages/Cumulative";
import Footer from "./components/Footer";

function Cumulativee() {
  return (
    <div className="app">
      <Header />
      <Container className="my-4">
        <Cumulative /> 
      </Container>
      <Footer />
    </div>
  );
}
export default Cumulativee;