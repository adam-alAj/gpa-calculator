import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet";

export default function Home() {
  const nav = useNavigate();

  return (
    <>
    <Helmet>
      <title>Pl GPA Calculator</title>
      <meta name="description" content="Calculate your semester and cumulative GPA easily." />
      <meta name="keywords" content="GPA calculator, semester GPA, cumulative GPA, university grades, Palestinian universities, GPA calculation, grade converter, Adam Alafandi, marks" />
      <meta property="og:title" content="GPA Calculator" />
      <meta property="og:description" content="Calculate your semester and cumulative GPA easily." />
      <meta property="og:image" content="%PUBLIC_URL%/GPA.png" />
      <meta property="og:url" content="https://gpa-calculator-puce-zeta.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>

    <Wrapper>
      <Glow />
      <HeroCard>
        <Badge>Fast • Accurate • University-Ready</Badge>

        <Title>University GPA Calculator</Title>

        <Description>
          Calculate your semester or cumulative GPA with precision and ease.
          Support for Palestinian and Arab universities is coming soon.
        </Description>

        <Actions>
          <PrimaryButton onClick={() => nav("/semester")}>
            🎓 Semester GPA
          </PrimaryButton>
          <SecondaryButton onClick={() => nav("/cumulative")}>
            📊 Cumulative GPA
          </SecondaryButton>
        </Actions>

        <Hint>Choose how you want to calculate your GPA</Hint>
      </HeroCard>
    </Wrapper>
    <InfoSection>
        <h2>What is a University GPA?</h2>
        <p>
          The Grade Point Average (GPA) is a standard way of measuring academic
          achievement in universities. It represents the average value of the grades
          earned across all completed courses, weighted by credit hours.
        </p>

        <h2>How GPA is Calculated</h2>
        <p>
          GPA is calculated by multiplying the grade points of each course by its
          credit hours, summing all results, and dividing by the total number of credit
          hours. This method ensures that courses with more weight have a greater
          impact on the final GPA.
        </p>

        <h2>Cumulative vs Semester GPA</h2>
        <p>
          Semester GPA reflects performance during a single academic term, while
          cumulative GPA includes all semesters completed so far. Both are important
          indicators used for academic standing, scholarships, and graduation
          eligibility.
        </p>

        <h2>Palestinian University Grading Systems</h2>
        <p>
          Most Palestinian universities use a 4.0 grading scale, although grading
          policies may vary slightly between institutions. Students are always advised
          to consult their official university academic regulations.
        </p>

        <h2>Why Use This GPA Calculator?</h2>
        <p>
          This tool is designed to help students accurately calculate their GPA without
          confusion. It reduces errors, saves time, and provides quick results in a
          clean and user-friendly interface optimized for all devices.
        </p>
      </InfoSection>
    </>
  );
  
}

/* ================== styled-components ================== */

const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    #007adf,
    #00c6ff,
    #0a4f7a
  );
  background-size: 300% 300%;
  animation: gradientMove 10s ease infinite;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;
  overflow: hidden;

  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

/* subtle light glow behind card */
const Glow = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(255,255,255,0.15),
    transparent 70%
  );
  filter: blur(60px);
`;

const HeroCard = styled.div`
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(14px);
  border-radius: 28px;
  padding: 3rem 3.5rem;
  max-width: 720px;
  text-align: center;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
  z-index: 2;

  @media (max-width: 600px) {
    padding: 2.2rem 1.8rem;
  }
`;

const Badge = styled.div`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  background: rgba(255,255,255,0.2);
  font-size: 0.85rem;
  margin-bottom: 1.4rem;
  letter-spacing: 0.5px;
`;

const Title = styled.h1`
  font-size: 3.2rem;
  margin-bottom: 1rem;
  line-height: 1.15;
  text-shadow: 0 6px 20px rgba(0,0,0,0.35);

  @media (max-width: 600px) {
    font-size: 2.4rem;
    box-shadow: none;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  max-width: 620px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
  opacity: 0.95;
  direction: ltr;

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const BaseButton = styled.button`
  padding: 0.85rem 2.3rem;
  font-size: 1.05rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 10px 30px rgba(0,0,0,0.25);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0,0,0,0.35);
  }

  &:active {
    transform: translateY(0);
  }
`;

const PrimaryButton = styled(BaseButton)`
  background: #ffffff;
  color: #0a4f7a;
`;

const SecondaryButton = styled(BaseButton)`
  background: rgba(10, 79, 122, 0.85);
  color: #ffffff;
`;

const Hint = styled.div`
  margin-top: 1.6rem;
  font-size: 0.9rem;
  opacity: 0.8;
`;
const InfoSection = styled.section`
  max-width: 900px;
  margin: 4rem auto;
  padding: 0 1.5rem;
  line-height: 1.8;
  color: #333; // لون النص ليكون مقروءاً على الخلفية البيضاء
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: left;
  direction: ltr;
  
  h2 {
    color: #0a4f7a;
    margin-top: 2rem;
    font-size: 1.8rem;
  }

  p {
    margin-bottom: 1.2rem;
    font-size: 1.1rem;
    color: #555;
  }
`;