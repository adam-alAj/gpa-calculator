import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

export default function HowToUse() {
  return (
    <>
      <Helmet>
        <title>How to Use - GPA Calculator</title>
        <meta name="description" content="Step-by-step guide on how to calculate your semester and cumulative GPA using our free tool for Palestinian universities." />
      </Helmet>

      <PageWrapper>
        <Container>
          <Title>How to Use the GPA Calculator</Title>
          <Subtitle>A simple guide to calculate your semester and cumulative GPA in 3 steps</Subtitle>

          <StepsGrid>
            <StepCard>
              <StepImage src="/img/step1.png" alt="Step 1" />
              <StepTitle>Step 1: Choose Your University</StepTitle>
              <StepText>
                Select your university from the dropdown list. Our calculator automatically applies the correct grading scale used by your institution.
              </StepText>
            </StepCard>

            <StepCard>
              <StepImage src="/img/step2.png" alt="Step 2" />
              <StepTitle>Step 2: Enter Your Courses</StepTitle>
              <StepText>
                Add your courses one by one. Enter the course name, credit hours, and the grade you received. You can add or remove courses as needed.
              </StepText>
            </StepCard>

            <StepCard>
              <StepImage src="/img/step3.png" alt="Step 3" />
              <StepTitle>Step 3: Get Your GPA</StepTitle>
              <StepText>
                Click "Calculate GPA" and get your result instantly. You can also print or save the result for future reference.
              </StepText>
            </StepCard>
          </StepsGrid>

          <ExampleSection>
            <ExampleTitle>Example: Semester GPA</ExampleTitle>
            <ExampleText>
              Suppose you took 3 courses this semester:
              <ul>
                <li>Math (3 hours) → Grade: A</li>
                <li>Physics (3 hours) → Grade: B+</li>
                <li>English (2 hours) → Grade: C</li>
              </ul>
              Using your university's scale:
              <br />
              <strong>Total Points = (4×3) + (3.5×3) + (2×2) = 12 + 10.5 + 4 = 26.5</strong>
              <br />
              <strong>Total Hours = 3 + 3 + 2 = 8</strong>
              <br />
              <strong>GPA = 26.5 ÷ 8 = 3.31</strong>
            </ExampleText>
          </ExampleSection>

          <TipBox>
            💡 <strong>Tip:</strong> You can use the calculator offline once the page loads. No data is stored or sent to any server.
          </TipBox>
        </Container>
      </PageWrapper>
    </>
  );
}

/* ================== Styled Components ================== */

const PageWrapper = styled.div`
  padding: 6rem 1rem 3rem;
  background: #f7f9fc;
  min-height: 100vh;
  direction: ltr;
  overflow-x: hidden;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #0a4f7a;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #6c757d;
  margin-bottom: 3rem;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const StepCard = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const StepImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const StepTitle = styled.h3`
  font-size: 1.2rem;
  color: #0a4f7a;
  margin: 1rem 1rem 0.5rem;
`;

const StepText = styled.p`
  font-size: 0.95rem;
  color: #495057;
  padding: 0 1rem 1.5rem;
  line-height: 1.6;
`;

const ExampleSection = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;

  /* Media Query للجوال */
  @media (max-width: 768px) {
    padding: 1.2rem; // تقليل الحواف لتوفير مساحة للشاشة
    margin-bottom: 1.5rem;
    border-radius: 12px; // تنعيم الحواف لتناسب الشاشة الصغيرة
  }
`;

const ExampleTitle = styled.h3`
  font-size: 1.4rem;
  color: #0a4f7a;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem; // تصغير الخط قليلاً ليظهر بشكل متناسق
    text-align: center; // اختيار اختياري: توسيط العنوان في الجوال
  }
`;

const ExampleText = styled.div`
  font-size: 1rem;
  color: #333;
  line-height: 1.8;

  ul {
    margin-left: 1.2rem;
    margin-bottom: 1rem;
    list-style-type: none;
    
    @media (max-width: 768px) {
      margin-left: 0.5rem; // تقليل الإزاحة لليسار لكسب مساحة للنص
      padding-left: 0;
    }
  }

  strong {
    color: #0a4f7a;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem; // خط أصغر قليلاً لراحة العين
    line-height: 1.6; // تقليل التباعد بين الأسطر لعدم جعل الصفحة طويلة جداً
  }
`;

const TipBox = styled.div`
  background: #e6f4ff;
  border-left: 5px solid #0a4f7a;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  color: #0a4f7a;

  @media (max-width: 768px) {
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
    border-left-width: 4px; // تقليل سمك الخط الجانبي قليلاً
  }
`;