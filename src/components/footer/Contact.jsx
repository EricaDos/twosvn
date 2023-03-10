import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Footer.scss';
import { enquiryService } from '../../services//api/enquiry/enquiry.service';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [enquiry, setEnquiry] = useState('');

  const submitEnquiryForm = async (event) => {
    setLoading(true);
    event.preventDefault();
    try {
      const result = await enquiryService.submitEnquiry({
        name,
        email,
        number,
        details
      });
      console.log(result);

      setEnquiry(result.data.enquiry);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (loading && !enquiry) return;
    if (enquiry) {
      console.log('navigate to steams page');
      setLoading(false);
    }
  }, [loading, enquiry]);
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
                      <form className="enquiry-form" onSubmit={submitEnquiryForm}>
                        <input
                          type="text"
                          name="name"
                          value={name}
                          placeholder="Name"
                          onChange={(e) => setName(e.target.value)}
                        />
                        <input
                          type="email"
                          name="email"
                          value={email}
                          placeholder="Email Address"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                          type="linenumber"
                          name="number"
                          value={number}
                          placeholder="Mobile Number"
                          onChange={(e) => setNumber(e.target.value)}
                        />
                        <input
                          type="text"
                          name="message"
                          value={details}
                          placeholder="Tell us your project..."
                          onChange={(e) => setDetails(e.target.value)}
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
