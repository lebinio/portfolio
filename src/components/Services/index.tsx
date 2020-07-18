import { faGem, faGlobe, faHeart, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import { themes } from '../../utils/themes';
import Divider from '../ShareStyles/Divider';
import * as Styled from './style';

function Services({ theme }) {
  const services = [
    {
      key: 1,
      name: 'Sturdy Themes',
      description: 'Our themes are updated regularly to keep them bug free!',
      icon: faGem,
    },
    {
      key: 2,
      name: 'Up to Date',
      description: 'All dependencies are kept current to keep things fresh.',
      icon: faLaptopCode,
    },
    {
      key: 3,
      name: 'Ready to Publish',
      description: 'You can use this design as is, or you can make changes!',
      icon: faGlobe,
    },
    {
      key: 4,
      name: 'Made with Love',
      description: "Is it really open source if it's not made with love?",
      icon: faHeart,
    },
  ];

  return (
    <Styled.Section theme={theme} variant="default" id="services">
      <Container className="container">
        <h2 className="text-center mt-0">At Your Service</h2>
        <Divider theme={theme} variant="primary" className="my-4" />
        <Row>
          {services.map((service) => (
            <Col lg={3} md={6} className="text-center" key={service.key}>
              <div className="mt-5">
                <Styled.Icon
                  theme={theme}
                  variant="primary"
                  icon={service.icon}
                  className="mb-4"
                  size="4x"
                />
                <h3 className="h4 mb-2">{service.name}</h3>
                <p className="text-muted mb-0">{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Styled.Section>
  );
}

Services.propTypes = {
  theme: PropTypes.oneOf(Object.keys(themes)),
};

Services.defaultProps = {
  theme: 'metal',
};

const mapStateToProps = (state) => ({
  theme: state.config.theme,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Services);
