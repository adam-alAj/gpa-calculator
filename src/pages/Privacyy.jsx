import styled from "styled-components";

export default function Privacy() {
  return (
   
       <Card>
      <Title>Privacy Policy</Title>

      <Section>
        <Heading>1. Introduction</Heading>
        <Paragraph>
          This Privacy Policy describes how GPA Calculator (the “Site”) collects, uses, and safeguards your information when you visit <strong>https://gpa-calculator-puce-zeta.vercel.app</strong> (the “Service”). We are committed to protecting your privacy and ensuring that any information you provide is used only in accordance with this policy.
        </Paragraph>
      </Section>

      <Section>
        <Heading>2. Information We Collect</Heading>
        <Paragraph>
          <strong>2.1 User-Provided Data:</strong> The Service allows you to enter course names, credit hours, and grades for the purpose of GPA calculation. <strong>This information is processed entirely within your browser and is never transmitted to our servers.</strong>
        </Paragraph>
      </Section>

      <Section>
        <Heading>3. Cookies and Similar Technologies</Heading>
        <Paragraph>
          <strong>3.1 Essential Cookies:</strong> We do not set any first-party cookies for core functionality.
        </Paragraph>
        <Paragraph>
          <strong>3.2 Third-Party Cookies:</strong> The Site displays advertisements through <strong>Google AdSense</strong>. Google may use cookies or unique device identifiers to:
        </Paragraph>
        <List>
          <li>Personalize the ads you see</li>
          <li>Limit the number of times you see an advertisement</li>
          <li>Measure the effectiveness of ad campaigns</li>
        </List>
        <Paragraph>
          You can manage or opt out of personalized advertising by visiting <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>.
        </Paragraph>
      </Section>

      <Section>
        <Heading>4. How We Use Information</Heading>
        <Paragraph>
          We use aggregated, anonymized analytics to:
        </Paragraph>
        <List>
          <li>Monitor Site uptime and performance</li>
          <li>Identify popular features and pages</li>
          <li>Detect and mitigate abuse or technical errors</li>
        </List>
        <Paragraph>
          We <strong>never</strong> sell, rent, or trade any information to third parties.
        </Paragraph>
      </Section>

      <Section>
        <Heading>5. Changes to This Policy</Heading>
        <Paragraph>
          We may update this Privacy Policy from time to time. The revised version will be posted on this page with a new “Last updated” date. We encourage you to review this page periodically for any changes.
        </Paragraph>
      </Section>

      <DateStamp>Last updated: 12 January 2026</DateStamp>
    </Card>
    
  );
}

/* ===== Styles ===== */



const Card = styled.div`
  padding: 2.5rem 3rem;
  max-width: 820px;
  margin: 100px auto 2rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  direction: ltr;
  text-align: left;

  @media (max-width: 768px) {
    margin-top: 3rem;
    padding: 1.8rem;
  }
`;

const Title = styled.h1`
  font-size: 1.9rem;
  font-weight: 700;
  color: #0a4f7a;
  margin-bottom: 2rem;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Heading = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.75rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: #374151;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  margin-left: 1.2rem;
  margin-bottom: 1rem;
  li {
    margin-bottom: 0.5rem;
    color: #374151;
  }
`;

const DateStamp = styled.div`
  font-size: 0.85rem;
  color: #6b7280;
  text-align: right;
  margin-top: 2.5rem;
`;