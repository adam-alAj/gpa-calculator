import React from "react";
import styled from "styled-components";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <Page>
      <h2 className="contact-title">Contact Us</h2>

      <p className="contact-text">
        Have a question, suggestion, or collaboration idea?
        Reach out through any of the channels below — we read every message and usually reply within 24 hours.
      </p>

      {/* Email */}
      <a href="mailto:adam1alafandi1@gmail.com" className="contact-email">
        <FaEnvelope className="icon" />
        adam1alafandi1@gmail.com
      </a>

      {/* Social Links */}
      <SocialWrapper>
        <SocialLink href="https://www.facebook.com/adam.alafandi.2025" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook />
        </SocialLink>

        <SocialLink href="https://www.instagram.com/artist_adam_alafandi" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </SocialLink>

        <SocialLink href="https://www.linkedin.com/in/adam-alafandi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </SocialLink>

        <SocialLink href="https://github.com/adam-alAj" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </SocialLink>
      </SocialWrapper>

      <p className="contact-note">We aim to respond within 24 hours.</p>
    </Page>
  );
}

/* ----------------- Styled Components ----------------- */
const Page = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 100px auto 2rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  backdrop-filter: blur(8px);
  direction: ltr;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 3rem;
    padding: 1.5rem;
    box-shadow: none;
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
    margin-bottom: 1.5rem;
    line-height: 1.6;
    text-align: left;
  }

  .contact-email {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1.2rem;
    margin-bottom: 2rem;
    font-weight: 600;
    color: #0d6efd;
    text-decoration: none;
    border: 1px solid rgba(13, 110, 253, 0.3);
    border-radius: 10px;
    transition: all 0.2s ease;
    .icon {
      font-size: 1.1rem;
    }
    &:hover {
      background-color: rgba(13, 110, 253, 0.08);
      transform: translateY(-2px);
    }
  }

  .contact-note {
    font-size: 0.85rem;
    color: #6c757d;
    margin-top: 1.5rem;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  margin-bottom: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #f3f4f6;
  color: #374151;
  font-size: 1.3rem;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
  &:hover {
    transform: translateY(-3px);
  }
  &[aria-label="Facebook"]:hover {
    background: #1877f2;
    color: #fff;
  }
  &[aria-label="Instagram"]:hover {
    background: linear-gradient(45deg, #f58529, #dd2a7b, #8134af);
    color: #fff;
  }
  &[aria-label="LinkedIn"]:hover {
    background: #0a66c2;
    color: #fff;
  }
  &[aria-label="GitHub"]:hover {
    background: #181717;
    color: #fff;
  }
`;