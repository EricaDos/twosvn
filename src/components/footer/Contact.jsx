import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Footer.scss';

function Contact() {
  const [newMessage, setNewMessage] = useState('');
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newNumber, setNewNumber] = useState('');
  // eslint-disable-next-line no-unused-vars

  return (
    <section className="contact" id="banner">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <h1>LETS WORK TOGETHER</h1>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <form>
                        <input
                          type="text"
                          name="name"
                          value={newName}
                          placeholder="Name"
                          onChange={(e) => setNewName(e.target.value)}
                        />
                        <input
                          type="email"
                          name="email"
                          value={newEmail}
                          placeholder="Email Address"
                          onChange={(e) => setNewEmail(e.target.value)}
                        />
                        <input
                          type="linenumber"
                          name="number"
                          value={newNumber}
                          placeholder="Mobile Number"
                          onChange={(e) => setNewNumber(e.target.value)}
                        />
                        <input
                          type="text"
                          name="message"
                          value={newMessage}
                          placeholder="Tell us your project..."
                          onChange={(e) => setNewMessage(e.target.value)}
                        />
                        <button type="submit">Send</button>
                      </form>
                    </Col>
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Contact;
