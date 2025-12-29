import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

export default function FAQ() {
  const questions = [
    { q: "What is cumulative GPA?", a: "It is the average of your grades calculated on a 4.0 scale, reflecting your academic performance throughout your university years." },
    { q: "How do I calculate semester GPA?", a: "Multiply each course grade by its credit hours, sum the results, then divide by the total credit hours for that semester." },
    { q: "Does semester GPA affect cumulative GPA?", a: "Yes, every semester is added to the cumulative, so a strong semester raises the cumulative directly." },
    { q: "How many credit hours should I register per semester?", a: "15–18 hours, balancing difficult and easy courses to avoid overload." },
    { q: "How do I choose courses that raise my GPA?", a: "Pick subjects that match your strengths and ask about previous years' questions." },
    { q: "Does attendance affect the grade?", a: "In some courses yes, because it adds participation marks." },
    { q: "When should I start tracking my GPA?", a: "From the third week, update your calculation monthly to avoid surprises." },
    { q: "What if I fail a course?", a: "Retake it immediately, because F affects you negatively, but the new grade is what counts." },
    { q: "Can I use the calculator offline?", a: "Yes, after the page loads you can disconnect and the calculator still works." },
    { q: "Which universities are currently supported?", a: "Bethlehem University, Palestine Ahliya University, Al-Quds University, Palestine Polytechnic University, Hebron University and Dar al-Kalima University." },
    { q: "How can I add my university?", a: "Send university name + grading criteria to adam1alafandi1@gmail.com and we’ll add it." },
    { q: "Does the site store my data?", a: "No, all calculations happen in your browser, nothing is sent to the server." },
    { q: "How can I raise my GPA quickly?", a: "Allocate time for hard courses, use office hours, and update your calculation monthly." },
    { q: "Can I use the calculator for more than one university?", a: "Yes, choose your university from the list and its own criteria will apply." },
    { q: "What happens after I get a high GPA?", a: "Apply for scholarships, part-time jobs, or request recommendation letters from professors." },
    { q: "Can I print the results?", a: "Yes, press Ctrl+P or use the print icon on the page." },
    { q: "Is there a mobile app?", a: "The site is responsive and works as a web app; a standalone app will be released soon." },
    { q: "How can I contact support?", a: "Send a message to adam1alafandi1@gmail.com or use the Contact Us page." }
  ];

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - GPA Calculator</title>
        <meta name="description" content="Find answers to the most common questions about GPA calculation, university grading systems, and how to improve your GPA." />
        <meta name="keywords" content="GPA calculator, university grading, GPA improvement, Palestinian universities, frequently asked questions, GPA tips, study strategies" />
      </Helmet>

      
        <div className="overlay" />
        <Page>
          <Title>Frequently Asked Questions</Title>
          <Subtitle>Everything you need to know about GPA, universities, and improving your academic performance</Subtitle>

          <List>
            {questions.map((item, i) => (
              <Item key={i}>
                <Question>{item.q}</Question>
                <Answer>{item.a}</Answer>
              </Item>
            ))}
          </List>

          <CTA>
            Didn't find your answer? Contact us via
            <a href="/contact"> the Contact Us page </a>
            and we'll add your question here.
          </CTA>
        </Page>
     
    </>
  );
}

/* ================== styled-components ================== */


const Page = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 2rem;
  margin-top: 4rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(18px);
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.7);
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 0.5rem;
  color: #1f2937;
  text-align: center;
   direction: ltr;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 2.5rem;
  color: #424a56ff;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Item = styled.div`
  border-left: 4px solid #0a4f7a;
  padding-left: 1rem;
`;

const Question = styled.h3`
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
  color: #0a4f7a;
  text-align: left;
   direction: ltr;
`;

const Answer = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: #4b5563;
  margin: 0;
  text-align: left;
   direction: ltr;
`;

const CTA = styled.p`
  text-align: center;
  margin-top: 2.5rem;
  font-size: 0.95rem;
  color: #6c757d;
  text-align: center;
   direction: ltr;
  a {
    color: #0a4f7a;
    text-decoration: none;
    font-weight: 600;
    &:hover { text-decoration: underline; }
  }
`;