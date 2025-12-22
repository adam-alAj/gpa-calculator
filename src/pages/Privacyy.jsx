import styled from "styled-components";

export default function Privacy() {
  return (
   
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
    
  );
}

/* ===== Styles ===== */



const Card = styled.div`
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
    box-shadow: none;
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
  text-align: left;
   @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.7;
  }
`;
