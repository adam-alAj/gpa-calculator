import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

function Footer() {
  return (
    <FooterWrapper>
      <Container className="text-center">
        <small className="text-muted">
          © {new Date().getFullYear()} GPA Calculator – All rights reserved.
        </small>
        <p className="mb-0">Developed by Adam Alafandi to support Palestinian students</p>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;

/* -------------------------- Styled Components -------------------------- */
const FooterWrapper = styled.footer`
  width: 100%;
  text-align: center;
  padding: 1rem;
  background-color: #f8f9fa;
  margin-top: auto; /* يدفعه لأسفل المحتوى */
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 0.9rem;
  color: #6c757d;
  direction: ltr; /* إجبار الاتجاه على الإنجليزي */
 
`;