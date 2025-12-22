import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Offcanvas, Button } from "react-bootstrap";
import CloseButton from "./CloseButton";

export default function Header() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark" expand="lg" dir="ltr">
        <Container fluid>
          {/* زر الهامبرغر */}
          <Button variant="outline-light" onClick={handleShow} className="me-2">
            ☰
          </Button>

          <Navbar.Brand onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            GPA Calculator
          </Navbar.Brand>

          {/* الروابط الظاهرة على الشاشات الكبيرة */}
          <Nav className="me-auto d-none d-lg-flex">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/semester")}>Semester GPA</Nav.Link>
            <Nav.Link onClick={() => navigate("/cumulative")}>Cumulative GPA</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* النافذة الجانبية */}
      <Offcanvas show={show} onHide={handleClose} placement="start" style={{ zIndex: 9999 }} dir="ltr">
        <Offcanvas.Header closeButton={false}>
          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "0.5rem" }}>
            <Offcanvas.Title className="sidebar-title">Menu</Offcanvas.Title>
            <CloseButton onClose={handleClose} />
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body  className="d-flex flex-column"
    style={{ textAlign: "left", direction: "ltr" }}
  >
          <Nav className="flex-column sidebar-nav">
           <Nav.Link className="sidebar-link" onClick={() => { navigate("/"); handleClose(); }}>Home</Nav.Link>
      <Nav.Link className="sidebar-link" onClick={() => { navigate("/semester"); handleClose(); }}>Semester GPA</Nav.Link>
      <Nav.Link className="sidebar-link" onClick={() => { navigate("/cumulative"); handleClose(); }}>Cumulative GPA</Nav.Link>
      <Nav.Link className="sidebar-link" onClick={() => { navigate("/privacy"); handleClose(); }}>Privacy Policy</Nav.Link>
      <Nav.Link className="sidebar-link" onClick={() => { navigate("/contact"); handleClose(); }}>Contact Us</Nav.Link>
      <Nav.Link className="sidebar-link" onClick={() => { navigate("/about"); handleClose(); }}>About Us</Nav.Link>
          </Nav>
        </Offcanvas.Body>

      </Offcanvas>
    </>
  );
}