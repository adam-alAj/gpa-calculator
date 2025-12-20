import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import React from "react";
import FormText from 'react-bootstrap/FormText';
import styled from "styled-components";


export default function UniversitySelector({ onChange }) {
  const [list, setList] = useState([]);
  const [sel, setSel] = useState("");

  useEffect(() => {
    fetch("/universities.json")
      .then((r) => r.json())
      .then((d) => {
        const defaultUni = d.find(u => u.id === "default");
        const others = d.filter(u => u.id !== "default")
          .sort((a, b) => a.name.localeCompare(b.name, "en"));

        const sorted = [defaultUni, ...others];
        setList(sorted);
        setSel(sorted[0]?.id);
        onChange(sorted[0]);
      })
      .catch(() => {
        const f = [{ id: "default", name: "Bethlehem University", logo: "/logos/beth.jpg", scale: { A: 4, "B+": 3.5, B: 3, "C+": 2.5, C: 2, "D+": 1.5, D: 1, F: 0 } }];
        setList(f);
        setSel("default");
        onChange(f[0]);
      });
  }, [onChange]);


  return (
    <Form.Group className="mb-3 pe-3">
      <FormText
        as="div"
        className="shabah-text"
      >Choose Your University
      </FormText>
      <Select value={sel} onChange={(e) => { const u = list.find((x) => x.id === e.target.value); setSel(u.id); onChange(u); }}>
        {list.map((u) => <option key={u.id} value={u.id}>{u.name}</option>)}
      </Select>

    </Form.Group>

  );
}
/* -------------------------- Styled Components -------------------------- */
const Select = styled(Form.Select)`
margin-left: 5px;
border-radius: 10px;
border: 1px solid #5c5d5eff;

@media (max-width: 768px) {
  width: 95%;
  height: 50px;
}
`;
