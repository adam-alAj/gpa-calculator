import styled from "styled-components";

export default function Privacy() {
  return (
    <PageWrapper>
      <Card>
        <Title>Privacy Policy</Title>

        <Text>
          We do not collect any personal data. All calculations are performed
          locally in your browser to ensure full privacy and transparency.
        </Text>

        <Text>
          Google AdSense may use cookies to serve personalized advertisements.
          You can manage or disable cookies at any time through your browser
          settings.
        </Text>
      </Card>
    </PageWrapper>
  );
}

/* ===== Styles ===== */

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f4f7ff, #eef2ff);

  @media (max-width: 768px) {
    padding: 1.25rem;
    align-items: flex-start;
  }
`;

const Card = styled.div`
  max-width: 720px;
  width: 100%;
  padding: 2.5rem;
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #c6c7caff;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);

   @media (max-width: 768px) {
    margin-top: 3rem;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
  }

`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #1f2937;
  text-align: center;
   @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: #4b5563;
  margin-bottom: 1rem;
  direction: ltr;
   @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.7;
  }
`;
