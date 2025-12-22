import React from "react";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Contact from "./pages/Contactt";
import Footer from "./components/Footer";

function Contactt() {
  return (
    <div className="app">
      <Header />
      <Container className="my-4">
        <Contact /> 
      </Container>
      <Footer />
    </div>
  );
}
export default Contactt;