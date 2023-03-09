import { Container, Row, Col } from 'react-bootstrap';

import logo from '../../assets/images/TWOSVN-1.png';
import navIcon3 from '../../assets/images/nav-icon3.svg';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. BUILT BY 27</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
