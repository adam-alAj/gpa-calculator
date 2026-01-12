import React from "react";
import styled from "styled-components";
import { FaGraduationCap, FaFlag, FaTools, FaHeart } from "react-icons/fa";

export default function About() {
  return (
    <Page>
      <HeaderBox>
        <FaGraduationCap className="icon" />
        <h2 className="about-title">About GPA Calculator</h2>
      </HeaderBox>

      <Section>
        <Point>
          <FaFlag className="point-icon" />
          <div>
            <PointTitle>Palestinian-First Mission</PointTitle>
            <PointText>
              Built exclusively for Palestinian universities, our tool natively
              supports the exact grading scales used by Bethlehem, An-Najah,
              Birzeit, Palestine Ahliya, Polytechnic, Hebron, Dar Al-Kalima and
              more. No approximations—just precise, institution-specific
              calculations.
            </PointText>
          </div>
        </Point>

        <Point>
          <FaTools className="point-icon" />
          <div>
            <PointTitle>Zero-Friction Experience</PointTitle>
            <PointText>
              All logic runs inside your browser: no sign-ups, no data saved, no
              internet required after first load. Add courses in seconds, and continue offline whenever
              needed.
            </PointText>
          </div>
        </Point>

        <Point>
          <FaHeart className="point-icon" />
          <div>
            <PointTitle>Open-Source & Community-Driven</PointTitle>
            <PointText>
              Created by Eng.Adam Alafandi—software-engineering student and
              freelance developer—during his 3rd year to help classmates avoid
              manual GPA mistakes. The project is open-source, welcomes
              contributions, and expands based on student feedback.
            </PointText>
          </div>
        </Point>
      </Section>

      <StatsBar>
        <Stat>
          <StatNumber>8</StatNumber>
          <StatLabel>Universities</StatLabel>
        </Stat>
        <Stat>
          <StatNumber>0</StatNumber>
          <StatLabel>Data Stored</StatLabel>
        </Stat>
        <Stat>
          <StatNumber>24 h</StatNumber>
          <StatLabel>Support Reply</StatLabel>
        </Stat>
      </StatsBar>

      <CTA>
        Want your university added or have a feature request?{" "}
        <a href="mailto:adam1alafandi1@gmail.com">Email us</a> or open an issue
        on <a href="https://github.com/adam-alAj" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </CTA>
    </Page>
  );
}

/* ----------------- Styled Components ----------------- */
const Page = styled.div`
  padding: 2rem;
  max-width: 900px;
  margin: 100px auto 2rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  backdrop-filter: blur(8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  direction: ltr;
  text-align: left;

  @media (max-width: 768px) {
    margin-top: 3rem;
    padding: 1.5rem;
    box-shadow: none;
  }
`;

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
  .icon {
    font-size: 2rem;
    color: #0a4f7a;
  }
  .about-title {
    font-size: 1.8rem;
    font-weight: 700;
    color: #212529;
    margin: 0;
  }
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const Point = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  .point-icon {
    flex-shrink: 0;
    font-size: 1.5rem;
    color: #0a4f7a;
    margin-top: 0.25rem;
  }
`;

const PointTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.4rem;
`;

const PointText = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: #4b5563;
  margin: 0;
`;

const StatsBar = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding: 1.5rem 0;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 2rem;
`;

const Stat = styled.div``;
const StatNumber = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  color: #0a4f7a;
`;
const StatLabel = styled.div`
  font-size: 0.85rem;
  color: #6b7280;
`;

const CTA = styled.div`
  font-size: 0.95rem;
  color: #374151;
  text-align: center;
  a {
    color: #0a4f7a;
    font-weight: 600;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;