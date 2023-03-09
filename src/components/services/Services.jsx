import { Container, Row, Tab } from 'react-bootstrap';
import Cards from './Cards';
import service1 from '../../assets/images/service-1.jpg';
import service2 from '../../assets/images/service-2.jpg';
import service3 from '../../assets/images/service-3.jpg';
import service4 from '../../assets/images/service-4.jpg';
import './Service.scss';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Service() {
  const services = [
    {
      title: 'Bespoke Website Development',
      description: 'Designed & developed from scratch to match any specification to help your business grow.',
      imgUrl: service1
    },
    {
      title: 'Shopify E-Commerce',
      imgUrl: service2,
      description: 'Sell your products online & take online payments using our custom built e-commerce solutions.'
    },
    {
      title: 'MVP Development',
      imgUrl: service4,
      description:
        'Partner with Twosvn Agency for streamlined MVP web app and dashboard development, designed for startups.'
    },
    {
      title: 'Blockchain Development',
      imgUrl: service3,
      description: 'Implementing blockchain solutions for enterprises across various verticals and sectors.'
    }
  ];

  return (
    <section className="service" id="service">
      <Container id="service">
        <Row className="align-items-center" id="services">
          <TrackVisibility>
            {({ isVisible }) => <h1>Exports in Bespoke Websites, Shopify and Web3 Integrations</h1>}
          </TrackVisibility>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                <p>
                  TwoSvn Development Agency is a highly skilled and experienced team of developers based in London,
                  Lisbon, and Toronto. They specialize in bespoke website development, application development, and Web3
                  integrations. With years of experience under their belt, TwoSvn has established itself as a top-tier
                  development agency that has worked with a variety of multinational companies.
                </p>{' '}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {services.map((services, index) => {
                          return <Cards key={index} {...services} />;
                        })}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident
                        velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores
                        delectus quasi inventore debitis quo.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident
                        velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores
                        delectus quasi inventore debitis quo.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            )}
          </TrackVisibility>
        </Row>
      </Container>
    </section>
  );
}

export default Service;
