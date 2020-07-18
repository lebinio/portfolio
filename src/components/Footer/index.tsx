import PropTypes from 'prop-types';
import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

function Footer() {
  return (
    <footer className="bg-light py-3">
      <Container>
        <div className="small text-center text-muted">Copyright © 2020 - Lebin</div>
      </Container>
    </footer>
  );
}

Footer.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
