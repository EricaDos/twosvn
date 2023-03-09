import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/images/TWOSVN-1.png';
import { HashLink } from 'react-router-hash-link';
import './Navbar.scss';

function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    // <Router>
    <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <span className="navbar-text">
          <HashLink to="#connect">
            <button className="vvd">
              <span>DISCUSS A PROJECT</span>
            </button>
          </HashLink>
        </span>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="#services"
              className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('services')}
            >
              SERVICES
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('project')}
            >
              PROJECTS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </Router>
  );
}
export default NavBar;
