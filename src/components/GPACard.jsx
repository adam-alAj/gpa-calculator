import React from "react";
import styled from "styled-components";
import { Button, Alert } from "react-bootstrap";
import UniversitySelector from "./UniversitySelector";
import CourseRow from "./CourseRow";
import { useState } from "react";



export default function GPACard() {
  const [univ, setUniv] = useState(null);
  const [courses, setCourses] = useState([{ name: "", hours: 1, grade: "A" }]);
  const [gpa, setGpa] = useState(null);

  const addCourse = () => setCourses([...courses, { name: "", hours: 1, grade: "A" }]);
  const update = (idx, field, val) => {
    const arr = [...courses]; arr[idx][field] = val; setCourses(arr);
  };
  const remove = (idx) => { if (courses.length === 1) return; setCourses(courses.filter((_, i) => i !== idx)); };
  const calc = () => {
    const sc = univ?.scale; if (!sc) return;
    let pts = 0, hrs = 0; courses.forEach((c) => { pts += sc[c.grade] * c.hours; hrs += Number(c.hours); });
    setGpa((pts / hrs).toFixed(2));
  };

  return (

    <PageWrapper>
      <div className="overlay" />
      {univ?.logo && <UniversityLogo src={univ.logo} alt={univ.name} />}

      <StyledWrapper>
        <Layout>
          <div className="card">
            <div className="bg">
              {/* هنا نضع المحتوى فوق الطبقة البلورية */}
              <UniversitySelector onChange={setUniv} />
              <HeadersRow>
                <span></span>
                <span className="h">Credit Hours</span>
                <span className="g">Grade</span>
                <span></span> {/* خانة الحذف */}
                <span></span>
              </HeadersRow>
              {courses.map((c, i) => (
                <CourseRow key={i} idx={i} data={c} scale={univ?.scale} update={update} onDelete={remove} />
              ))}

              <div className="d-flex justify-content-center gap-5 mt-4">
                <CButton variant="success" onClick={addCourse}>Add Course</CButton>
                <CButton variant="primary" onClick={calc}>Calculate GPA</CButton>
              </div>

              {gpa && (
                <Alert
                  className={`mt-4 text-center gpa-alert ${gpa >= 2.5 ? "gpa-good" : "gpa-warning"
                    }`}
                >
                  Your GPA is: <strong>{gpa}</strong>
                </Alert>
              )}
              
            </div>
          </div>


          {/* ===== Info Card ===== */}
          <InfoCard>
            <h2>What is GPA?</h2>
            <p>
              GPA (Grade Point Average) is a numerical representation of a student's
              academic performance, calculated based on the grades earned and credit
              hours completed.
            </p>

            <h2>How to calculate Semester GPA</h2>
            <p>
              Semester GPA is calculated by multiplying each course grade by its
              credit hours, summing the results, then dividing by the total credit
              hours for that semester.
            </p>

            <h2>Explanation of Grades</h2>
            <p>
              Grades are typically converted to a 4.0 scale, where A represents
              excellent performance and lower grades reduce the GPA accordingly.
            </p>

            <h2>Notes for Palestinian Universities</h2>
            <p>
              Most Palestinian universities follow a 4.0 GPA system, but grading
              scales may vary slightly. Always verify your university’s official
              grading policy.
            </p>
          </InfoCard>
        </Layout>


      </StyledWrapper>
    </PageWrapper>
  );
}

/* -------------------------- Styled Components -------------------------- */
const PageWrapper = styled.div`

  /* طبقة الميش المتحركة */
  &::before {
    content: "";
    position: fixed;
    inset: -150px; /* تكبير الطبقة لتغطية الحواف بشكل أفضل */
    z-index: -3;
    background:
      radial-gradient(circle at 25% 75%, #3a78f0 0%, transparent 35%),
      radial-gradient(circle at 75% 25%, #1c4fc0 0%, transparent 35%),
      radial-gradient(circle at 50% 50%, #2a65b5 0%, transparent 35%);
    filter: blur(90px);
    background-size: 250% 250%;
    animation: meshMove 15s ease-in-out infinite alternate;
    opacity: 0.7; /* تخفيف شدة اللون */
  }

  /* طبقة التلألؤ (glitter) */
  &::after {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -2;
    background-image:
      radial-gradient(2px 2px at 20px 30px, #efebeb86, transparent),
      radial-gradient(2px 2px at 50px 80px, #efebeb86, transparent),
      radial-gradient(1.5px 1.5px at 90px 40px, #efebeb86, transparent),
      radial-gradient(1.5px 1.5px at 140px 90px, #efebeb86, transparent),
      radial-gradient(2px 2px at 180px 60px, #efebeb86, transparent);
    background-repeat: repeat;
    background-size: 220px 120px;
    animation: glitter 6s linear infinite;
     opacity: 0.009; /* تقليل شدة التلألؤ */
  }

  /* طبقة شفافة لإبقاء النصوص واضحة */
  .overlay {
    position: absolute;
    inset: 0;
    z-index: -1;
    background: rgba(255, 255, 255, 0.20);
    backdrop-filter: blur(4px);
  }

  /* الحركات */
  @keyframes meshMove {
    0% { background-position: 0% 0%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 100%; }
  }

  @keyframes glitter {
    0% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-50px) rotate(5deg); }
    100% { transform: translateY(-100px) rotate(-5deg); }
  }
`;
const Layout = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: flex-start;
  justify-content: center;

 @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const InfoCard = styled.div`
  width: 100%;
  max-width: 420px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(18px);
  border-radius: 16px;
  padding: 2rem;
  box-shadow:
    0 12px 30px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);

  h2 {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
    color: #1f2937;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.7;
    color: #4b5563;
    margin-bottom: 1.4rem;
  }

  @media (max-width: 768px) {
   order: 3;
    max-width: 95%;
    padding: 1.5rem;
    text-align: center;
  }
`;


const UniversityLogo = styled.img`
  position: absolute;
  top: 0.8rem;        /* بعد بسيط عن أعلى الصفحة */
  left: 30%;       
  margin-top: 65px;
  transform: translateX(-50%);
  width: 106px;
  height: 106px;
  object-fit: contain;
  z-index: 10;        /* فوق كل شيء */
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
  border-radius: 6px;
  border: 1.5px solid #929292ff;

 @media (max-width: 768px) {
    position: static;        /* ← مهم جداً */
    transform: none;
    margin: 6rem auto 1rem auto;
    order: 1;                /* ← بعد الناف بار مباشرة */
    display: block;
  }
`;

const StyledWrapper = styled.div`
 display: flex;
  justify-content: left;
  align-items: center;
  padding: 10rem 0;
  direction: ltr; /* إجبار الاتجاه على الإنجليزي */
  
@media (max-width: 768px) {
   
    order: 2;
    justify-content: center;
    padding: 2rem 0;
    width: 100%;
  }
 
  .card {
    position: relative;
    width: 100%;
    max-width: 720px;   
    min-height: 400px;
    height: auto;
    border-radius: 14px;
    z-index: 1111;
    overflow: hidden;
    display: flex;             
  align-items: center;        
  justify-content: center;  
    justify-content: flex-start;
    stroke: 4px solid black;
    box-shadow:
      0 12px 30px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.6);
     @media (max-width: 768px) {
      box-shadow: none;
      margin: 0 auto;
      width: 95%;
    }
  }

 .bg {
    position: relative;
     z-index: 2; 
    top: 5px;
    left: 5px;
    width: 100%;
    padding: 1rem;
    min-height: 380px;
    height: auto;
    padding-bottom: 10px;
    background: rgba(255, 255, 255, .95);
    backdrop-filter: blur(24px);
    border-radius: 10px;
    overflow: hidden;
    gap: 2.5em;
  }
    .gpa-good {
    width:40em ;
    margin: 0 auto;
  background: linear-gradient(145deg, #cfeff6ff, #adf7dbff);
  border: 1px solid #1c5246ff;
  border-radius: 14px;
  padding: 18px;
  font-size: 1.07rem;
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);

  transform: perspective(800px) translateZ(0);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: #065f46;
}
  .gpa-good:hover {
  transform: perspective(800px) translateY(-4px) rotateX(2deg);
  box-shadow:
    0 14px 28px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

.gpa-good strong {
  font-size: 1.3rem;
  color: #01583fff;
}

.gpa-warning {
    width:40em ;
    margin: 0 auto;
  background: linear-gradient(135deg, #fededeff, #fedadaff);
  border: 1px solid #630200ff;
  border-radius: 14px;
  padding: 18px;
  font-size: 1.07rem;
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);

  transform: perspective(800px) translateZ(0);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: #7f1d1d;
}
 .gpa-warning:hover {
  transform: perspective(800px) translateY(-4px) rotateX(2deg);
  box-shadow:
    0 14px 28px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

.gpa-warning strong {
  font-size: 1.3rem;
  color: #580101ff;
}

@media (max-width: 768px) {
  padding: 1rem;

  .card {
    width: 95%;
    box-shadow: none;
  }

  .bg {
    padding: 1rem;
  }

  .gpa-good,
  .gpa-warning {
    width: 100%;
    font-size: 0.95rem;
    box-shadow:none ;
  }
}

     
`;
const HeadersRow = styled.div`
  display: grid;
  grid-template-columns: auto auto auto 10px 50px; /* حجم الأعمدة حسب المحتوى */
  gap: 0.6rem; /* تقليل الفراغ بين الأعمدة */
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  color: #6c757d;
  text-align: center;
  
  .g{
    margin-left: 1.6rem;
  }
     @media (max-width: 768px) {
    display: none;
  }


  `;

const CButton = styled(Button)`
  padding: 1.3em 3em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #23c483;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }

  &:active {
    transform: translateY(-1px);
  }
    .d-flex {
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    box-shadow: none;
  }
}

`;

