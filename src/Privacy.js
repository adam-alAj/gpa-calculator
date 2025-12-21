import React from "react";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Privacy from "./pages/Privacyy";
import Footer from "./components/Footer";

function Semester() {
  return (
    <div className="app">
      <Header />
      <Container className="my-4">
        <Privacy /> 
      </Container>
      <Footer />
    </div>
  );
}
export default Semester;