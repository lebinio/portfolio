import { Link } from 'gatsby';
import { PropTypes } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';

import { themes } from '../../utils/themes';
import * as Styled from './style';

function NavBar({ theme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <Styled.Navbar expand="lg" scrolled={scrolled}>
      <Container>
        <Styled.NavBrand>
          <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
            <img
              src="/images/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Lebin"
            />{' '}
            <b>Lebin</b>
          </Link>
        </Styled.NavBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Styled.NavLink theme={theme} variant="primary" scrolled={scrolled} href="#about">
              About
            </Styled.NavLink>
            <Styled.NavLink theme={theme} variant="primary" scrolled={scrolled} href="#services">
              Services
            </Styled.NavLink>
            <Styled.NavLink theme={theme} variant="primary" scrolled={scrolled} href="#portfolio">
              Portfolio
            </Styled.NavLink>
            <Styled.NavLink theme={theme} variant="primary" scrolled={scrolled} href="#contact">
              Contact
            </Styled.NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Styled.Navbar>
  );
}

NavBar.propTypes = {
  theme: PropTypes.oneOf(Object.keys(themes)),
};

NavBar.defaultProps = {
  theme: 'metal',
};

const mapStateToProps = (state) => ({
  theme: state.config.theme,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
