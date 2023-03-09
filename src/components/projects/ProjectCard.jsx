import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProjectCard = ({ title, description, imgUrl, website }) => {
  return (
    <Col size={12} sm={6} md={6}>
      <div className="proj-imgbx" id="project">
        <a href={website}>
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h2 href={website}>{title}</h2>
            <p>{description}</p>
          </div>
        </a>
      </div>
    </Col>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired
};

export default ProjectCard;
