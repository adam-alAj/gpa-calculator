import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <Page>
       <h2 className="about-title">About Us</h2>

  <p className="about-text">
    GPA Calculator is a free and easy-to-use tool designed to help university
    students accurately calculate their semester and cumulative GPA in just a
    few steps.
  </p>

  <p className="about-text">
    The platform focuses on supporting Palestinian universities by
    providing grading systems tailored to their academic standards, with
    continuous updates and expansion.
  </p>

  <div className="about-divider" />

  <p className="about-author">
    This project was developed by a university student with a strong interest
    in software development and educational tools, aiming to simplify academic
    calculations and provide practical solutions for fellow students.
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
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);

   @media (max-width: 768px) {
    margin-top: 3rem;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
  }
  .about-title {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #212529;
}

.about-text {
  font-size: 0.95rem;
  color: #495057;
  line-height: 1.7;
  margin-bottom: 0.9rem;
  direction: ltr;
  text-align: left;
}

.about-divider {
  width: 100%;
  height: 3px;
  margin: 1.4rem auto;
  background-color: rgba(13, 110, 253, 0.25);
  border-radius: 2px;
}

.about-author {
  font-size: 0.9rem;
  color: #6c757d;
  line-height: 1.6;
  direction: ltr;
  text-align: left;
}

`;