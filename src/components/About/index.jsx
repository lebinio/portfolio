import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import { themes } from '../../utils/themes';
import Divider from '../ShareStyles/Divider';
import RoundButton from '../ShareStyles/RoundButton';
import * as Styled from './style';

function About({ theme }) {
  return (
    <Styled.Section theme={theme} variant="primary" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="text-white mt-0">I&apos;ve got what you need!</h2>
            <Divider theme={theme} variant="default" className="my-4" />
            <p className="text-white text-50 mb-4">
              Start Bootstrap has everything you need to get your new website up and running in no
              time! Choose one of our open source, free to download, and easy to use themes! No
              strings attached!
            </p>
            <RoundButton theme={theme} variant="default" href="#services">
              Get Started!
            </RoundButton>
          </Col>
        </Row>
      </Container>
    </Styled.Section>
  );
}

About.propTypes = {
  theme: PropTypes.oneOf(Object.keys(themes)),
};

About.defaultProps = {
  theme: 'metal',
};

const mapStateToProps = (state) => ({
  theme: state.config.theme,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(About);
