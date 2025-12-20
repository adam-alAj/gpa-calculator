import { Row, Col, Form } from "react-bootstrap";
import React from "react";
import styled from "styled-components";

export default function CourseRow({ idx, data, scale, update, onDelete }) {
  const safeScale =
    scale ?? { A: 4, "B+": 3.5, B: 3, "C+": 2.5, C: 2, "D+": 1.5, D: 1, F: 0 };

  return (
    <StyledRow className="mb-4">
      <Col xs={12} md={4}>
        <Input
          placeholder="Course Name"
          value={data.name}
          onChange={(e) => update(idx, "name", e.target.value)}
        />
      </Col>

      <Col xs={6} md={2}>
        <Input
          type="number"
          placeholder="Hours"
          min="1"
          value={data.hours}
          onChange={(e) => update(idx, "hours", +e.target.value)}
        />
      </Col>

      <Col xs={6} md={2}>
        <GradeSelect
          value={data.grade}
          onChange={(e) => update(idx, "grade", e.target.value)}
        >
          {Object.keys(safeScale).map((g) => (
            <option key={g}>{g}</option>
          ))}
        </GradeSelect>
      </Col>

      <Col xs={8} md={2} className="text-center">
        <BadgeWrapper>
          <span className="grade">{data.grade}</span>
        </BadgeWrapper>
      </Col>

      <Col xs={4} md={2} className="text-end">
        <StyledButton>
          <button aria-label="Delete item" className="delete-button" onClick={() => onDelete(idx)}>
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
      </Col>
    </StyledRow>
  );
}

const StyledRow = styled(Row)`
  align-items: center;

  @media (max-width: 768px) {
    row-gap: 0.75rem;
  }
`;

const Input = styled(Form.Control)`
  border-radius: 10px;
  border: 0;
  outline: 2px solid #febf00;
  outline-offset: 3px;
  background: #e2e2e2;
  padding: 10px 1rem;
  margin-left: 10px;

  &:focus {
    background: #fff;
    outline-offset: 5px;
  }
     @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const GradeSelect = styled(Form.Select)`
  height: 46px;
  border-radius: 10px;
  border: 0;
  outline: 2px solid #febf00;
  outline-offset: 3px;
  background: #e2e2e2;

  &:focus {
    background: #fff;
  }
`;

const BadgeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0332aa;
  color: #fff;
  border-radius: 12px;
  height: 46px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 0.9rem;
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
  }`;
