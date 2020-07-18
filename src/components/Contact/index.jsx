import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import { themes } from '../../utils/themes';
import Divider from '../ShareStyles/Divider';
import * as Styled from './style';

function Contact({ theme }) {
  return (
    <Styled.Section theme={theme} variant="default" id="contact">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-lg-8 text-center">
            <h2 className="mt-0">Let&apos;s Get In Touch!</h2>
            <Divider theme={theme} variant="primary" className="my-4" />
            <p className="text-muted mb-5">
              Ready to start your next project with me? Give me a call or send me an email and I
              will get back to you as soon as possible!
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={4} className="ml-auto text-center mb-5 mb-lg-0">
            <FontAwesomeIcon icon={faPhone} size="3x" className="mb-3 text-muted" />
            <div>+084 9317 53897</div>
          </Col>
          <Col className="col-lg-4 mr-auto text-center">
            <FontAwesomeIcon icon={faEnvelope} size="3x" className="mb-3 text-muted" />
            <Styled.EmailLink theme={theme} variant="primary" className="d-block" href="mailto:lebinh.xz@gmail.com">
              lebinh.xz@gmail.com
            </Styled.EmailLink>
          </Col>
        </Row>
      </Container>
    </Styled.Section>
  );
}

Contact.propTypes = {
  theme: PropTypes.oneOf(Object.keys(themes)),
};

Contact.defaultProps = {
  theme: 'metal',
};

const mapStateToProps = (state) => ({
  theme: state.config.theme,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
