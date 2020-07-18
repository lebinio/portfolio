import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import { themes } from '../../utils/themes';
import Divider from '../ShareStyles/Divider';
import RoundButton from '../ShareStyles/RoundButton';
import * as Styled from './style';

function Header({ theme }) {
  return (
    <Styled.Header>
      <Container className="h-100">
        <Row className="h-100 align-items-center justify-content-center text-center">
          <Col lg={10} className="align-self-end">
            <h1 className="text-white text-uppercase font-weight-bold">
              Your Favorite Source of Free Bootstrap Themes
            </h1>
            <Divider theme={theme} variant="primary" className="my-4" />
          </Col>
          <Col lg={8} className="align-self-baseline">
            <p className="text-white font-weight-light mb-5">
              Start Bootstrap can help you build better websites using the Bootstrap framework! Just
              download a theme and start customizing, no strings attached!
            </p>
            <RoundButton theme={theme} variant="primary" href="#about">
              Find Out More
            </RoundButton>
          </Col>
        </Row>
      </Container>
    </Styled.Header>
  );
}

Header.propTypes = {
  theme: PropTypes.oneOf(Object.keys(themes)),
};

Header.defaultProps = {
  theme: 'metal',
};

const mapStateToProps = (state) => ({
  theme: state.config.theme,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
