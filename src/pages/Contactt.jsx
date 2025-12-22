import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <Page>
        <h2 className="contact-title">Contact Us</h2>

        <p className="contact-text">
          Have a question, suggestion, or issue?
          Feel free to reach out — we are always happy to help.
        </p>

        <a
          href="mailto:adam1alafandi1@gmail.com"
          className="contact-email"
        >
          adam1alafandi1@gmail.com
        </a>

        <p className="contact-note">
          We aim to respond within 24 hours.
        </p>

    </Page>
  );
}

const Page = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 100px auto 2rem;
  background: rgba(255,255,255,0.95);
  border-radius: 12px;
  backdrop-filter: blur(8px);
  direction: ltr;
 
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);


   @media (max-width: 768px) {
    margin-top: 3rem;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
  }

.contact-title {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #212529;
}

.contact-text {
  font-size: 0.95rem;
  color: #495057;
  margin-bottom: 1.25rem;
  line-height: 1.6;
  direction: ltr;
  text-align: left;
}

.contact-email {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: #0d6efd;
  text-decoration: none;
  border: 1px solid rgba(13, 110, 253, 0.3);
  border-radius: 10px;
  transition: all 0.2s ease;
}

.contact-email:hover {
  background-color: rgba(13, 110, 253, 0.08);
  transform: translateY(-2px);
}

.contact-note {
  font-size: 0.85rem;
  color: #6c757d;
}

`;