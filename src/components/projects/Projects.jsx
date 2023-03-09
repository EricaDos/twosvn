import { Container, Row, Col, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import projImg2 from '../../assets/images/project-img2.png';
import projImg3 from '../../assets/images/project-img3.png';
import projImg5 from '../../assets/images/project-img5.gif';
import projImg6 from '../../assets/images/project-img6.gif';
import projImg7 from '../../assets/images/project-img7.gif';
import projImg8 from '../../assets/images/project-img8.gif';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Project.scss';
function Project() {
  const projects = [
    {
      title: 'Agric-Nation',
      description: 'Bespoke Landing Page',
      imgUrl: projImg3,
      website: 'www.agric-nation.co.uk'
    },
    {
      title: 'Elite JR',
      description: 'Brand Development and Landing Page.',
      imgUrl: projImg2
    },
    {
      title: 'RP Entertainment',
      description: 'Beskpoke Website Development',
      imgUrl: projImg5,
      website: 'www.rpentertainment.com'
    },
    {
      title: 'DS Cleaners',
      description: 'Wix Custom Website & Brand Development.',
      imgUrl: projImg6,
      website: 'www.dscleanersltd.com'
    },
    {
      title: 'Cosmelle',
      description: 'Shopify E-Commerce Custom Website',
      imgUrl: projImg7
    },
    {
      title: 'Regal Muse',
      description: 'Shopify E-Commerce Custom Website',
      imgUrl: projImg8
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg2
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h1>OUR PROJECTS</h1>
                  <br></br>
                  <span>- BUILT BY 27</span>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident
                          velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis
                          asperiores delectus quasi inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident
                          velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis
                          asperiores delectus quasi inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right"></img>
    </section>
  );
}

export default Project;
