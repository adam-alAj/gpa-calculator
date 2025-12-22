import React from "react";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import About from "./pages/About";
import Footer from "./components/Footer";

function about() {
  return (
    <div className="app">
      <Header />
      <Container className="my-4">
        <About /> 
      </Container>
      <Footer />
    </div>
  );
}
export default about;