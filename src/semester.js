import React from "react";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import GPACard from "./components/GPACard"; 
import Footer from "./components/Footer";

function Semester() {
  return (
    <div className="app">
      <Header />
      <Container className="my-4">
        <GPACard /> 
      </Container>
      <Footer />
    </div>
  );
}
export default Semester;