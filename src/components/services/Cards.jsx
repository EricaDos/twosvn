import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import './Service.scss';

const Cards = ({ title, description, imgUrl }) => {
  return (
    <>
      <Col size={12} sm={3} md={3}>
        <div className="service-imgbx">
          <img src={imgUrl} />
          <div className="service-txtx" id="service">
            <h3>{title}</h3>
            <span>{description}</span>
          </div>
        </div>
      </Col>
    </>
  );
};

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired
};

export default Cards;
