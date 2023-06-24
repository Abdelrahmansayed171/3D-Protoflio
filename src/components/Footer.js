import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/a-logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className="mylogo"/>
          </Col>
          <Col>
            <h1>Abdelrahman Nafady</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/abdelrahmannafady/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/abdelrahman.sayed.92372" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/Abdelrahmansayed171" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. Orca</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
