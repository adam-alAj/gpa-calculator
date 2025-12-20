import React, { useState } from "react";
import styled from "styled-components";
import { Button, Alert, Form } from "react-bootstrap";
import UniversitySelector from "../components/UniversitySelector";
import AdTop from "../components/AdTop";
import AdAfterCalc from "../components/AdAfterCalc";

export default function Cumulative() {
  const [semesters, setSemesters] = useState([
    { name: "First Semester", hours: 15, gpa: 3.2 },
  ]);
  const [cGpa, setCGpa] = useState(null);
  const [univ, setUniv] = useState(null);
  const addSemester = () =>
    setSemesters([...semesters, { name: "", hours: 0, gpa: 0 }]);

  const update = (idx, field, val) => {
    const arr = [...semesters];
    arr[idx][field] = val;
    setSemesters(arr);
  };

  const remove = (idx) => {
    if (semesters.length === 1) return;
    setSemesters(semesters.filter((_, i) => i !== idx));
  };

  const calc = () => {
    const sc = univ?.scale; if (!sc) return;
    let totalPoints = 0;
    let totalHours = 0;
    semesters.forEach((s) => {
      totalPoints += Number(s.hours) * Number(s.gpa);
      totalHours += Number(s.hours);
    });
    setCGpa((totalPoints / totalHours).toFixed(2));
  };

  return (
    <PageWrapper>
      <AdTop />
      <div className="overlay" />
{univ?.logo && <UniversityLogo src={univ.logo} alt={univ.name} />}
      <StyledWrapper>
        <div className="card">
          <div className="bg">
            <UniversitySelector onChange={setUniv} />
            <HeadersRow>
              <span>Semester Name</span>
              <span className="h">Credit Hours</span>
              <span>GPA</span>
              <span></span> {/* خانة الحذف */}
            </HeadersRow>
            {semesters.map((s, i) => (
              <SemesterRow key={i}>

                <Input
                  placeholder="Semester name (optional)"
                  value={s.name}
                  onChange={(e) => update(i, "name", e.target.value)}
                />



                <Input
                  type="number"
                  placeholder="Credit Hours"
                  min="1"
                  value={s.hours}
                  onChange={(e) => update(i, "hours", e.target.value)}
                />



                <Input
                  type="number"
                  step="0.01"
                  placeholder="GPA"
                  min="0"
                  max="4"
                  value={s.gpa}
                  onChange={(e) => update(i, "gpa", e.target.value)}
                />

                <StyledButton>
                  <button aria-label="Delete item" className="delete-button" onClick={() => remove(i)}>
                    <svg className="trash-svg" viewBox="0 -10 64 74" xmlns="http://www.w3.org/2000/svg">
                      <g id="trash-can">
                        <rect x={16} y={24} width={32} height={30} rx={3} ry={3} fill="#e74c3c" />
                        <g transform-origin="12 18" id="lid-group">
                          <rect x={12} y={12} width={40} height={6} rx={2} ry={2} fill="#c0392b" />
                          <rect x={26} y={8} width={12} height={4} rx={2} ry={2} fill="#c0392b" />
                        </g>
                      </g>
                    </svg>
                  </button>
                </StyledButton>
              </SemesterRow>
            ))}

            <div className="d-flex justify-content-center gap-4 mt-4">
              <CButton variant="outline-success" onClick={addSemester}>
                Add Semester
              </CButton>
              <CButton variant="primary" onClick={calc}>
                Calculate Cumulative GPA
              </CButton>
            </div>

            {cGpa && (
              <Alert
                className={`mt-4 text-center gpa-alert ${cGpa >= 2.5 ? "gpa-good" : "gpa-warning"
                  }`}
              >
                Your Cumulative GPA is: <strong>{cGpa}</strong>
              </Alert>
            )}
            <AdAfterCalc />
          </div>
          <div className="blob" />
        </div>
      </StyledWrapper>
    </PageWrapper>
  );
}

/* ------------------- styled-components (نفس تأثيرات Semester) ------------------- */
const PageWrapper = styled.div`
 position: relative;
  min-height: 110vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  overflow: hidden;
  background: linear-gradient(135deg, #eaf0ff, #ffffff, #f0f4ff);
  border-radius: 12px;
  border: 1.5px solid #6b6969ff;
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(201, 200, 200, 0.8);

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
const UniversityLogo = styled.img`
  position: absolute;
  top: 0.8rem;        /* بعد بسيط عن أعلى الصفحة */
  left: 50%;
  transform: translateX(-50%);
  width: 106px;
  height: 106px;
  object-fit: contain;
  z-index: 10;        /* فوق كل شيء */
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
  border-radius: 6px;
  border: 1.5px solid #929292ff;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  direction: ltr; /* إجبار الاتجاه على الإنجليزي */
  

 
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
  
  @media (max-width: 768px) {
    padding: 1rem 0;

    .card {
      width: 95%;
    }
  }
    .gpa-good {
    width: 100%;
  max-width: 40em;
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
    width: 100%;
  max-width: 40em;
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
    font-size: 0.95rem;
    padding: 14px;
  }
`;
const HeadersRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 50px; /* نفس أعمدة SemesterRow */
  gap: 5.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  color: #6c757d;
  text-align: center;

  .h{
    margin-right: 1.66rem;
  }
   @media (max-width: 768px) {
    display: none;
  }

`;
const SemesterRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;

  input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #ced4da;
    border-radius: 6px;
  }

  .delete-button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
  }
  @media (max-width: 768px) {
   flex-direction: column;
  align-items: stretch;
  gap: 0.5rem;

  input {
    width: 90%;          /* أصغر من الافتراضي */
    height: 100%;       /* ارتفاع موحد */
    font-size: 0.85rem;    /* تصغير الخط */
    padding: 14px 0.75rem;  /* تقليل الحشو */
    margin-bottom: 7px;      /* إزالة الهامش السفلي */
    margin-left: 10px;
  }
 
`;
const Input = styled(Form.Control)`
  border-radius: 10px;
  border: 0;
   outline: 2px solid #febf00;
  outline-offset: 3px;
  background-color: #e2e2e2;
  padding: 10px 1rem;
  transition: 0.25s;
  direction: ltr; /* إجبار الاتجاه على الإنجليزي */
  margin-left: 6px;
  margin-right: 0;
  

  &:focus {
    outline-offset: 5px;
    background-color: #fff;
  }
    
`;
const StyledButton = styled.div`
  .delete-button {
  position: relative;
  padding: 0.8em;          /* أصغر حجم داخلي */
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 1em;        /* أصغر حجم خط */
  transition: transform 0.2s ease;
}

.trash-svg {
  width: 2.4em;              /* أصغر عرض */
  height: 2.4em;             /* أصغر ارتفاع */
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  overflow: visible;
}

  #lid-group {
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .delete-button:hover #lid-group {
    transform: rotate(-28deg) translateY(2px);
  }

  .delete-button:active #lid-group {
    transform: rotate(-12deg) scale(0.98);
  }

  .delete-button:hover .trash-svg {
    transform: scale(1.08) rotate(3deg);
  }

  .delete-button:active .trash-svg {
    transform: scale(0.96) rotate(-1deg);
  }
  @media (max-width: 768px) {
    .trash-svg {
      width: 2.8em;
      height: 2.8em;
    }
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
  }
}

   
`;




