import React from "react";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import FAQ from "./pages/FAQ";
import Footer from "./components/Footer";

function FAQPage() {
  return (
    <div className="app">
      <Header />
      <Container className="my-4">
        <FAQ /> 
      </Container>
      <Footer />
    </div>
  );
}
export default FAQPage;