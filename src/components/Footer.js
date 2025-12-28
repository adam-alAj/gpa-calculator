import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (

    <FooterWrapper>
      <Container className="text-center">
        <div className="footer-links mb-2">
          <button type="button" className="link-btn" onClick={() => navigate("/privacy")}>Privacy Policy</button>
          {" • "}
          <button type="button" className="link-btn" onClick={() => navigate("/contact")}>Contact Us</button>
          {" • "}
          <button type="button" className="link-btn" onClick={() => navigate("/about")}>About Us</button>
        </div>

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

  .footer-links .link-btn {
    background: none;
    border: none;
    color: #0a4f7a;
    cursor: pointer;
    text-decoration: underline;
    font-size: inherit;
    padding: 0;
    margin: 0 0.5rem;
  }
  .footer-links .link-btn:hover {
    text-decoration: none;
  }

  @media (max-width: 768px) {
  box-shadow: none;
  }
 
`;