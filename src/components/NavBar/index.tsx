import { Link } from 'gatsby';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import * as Styled from './style';

export default function NavBar() {
  return (
    <Styled.Navbar expand="lg">
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
            <Styled.NavLink href="#about">About</Styled.NavLink>
            <Styled.NavLink href="#services">Services</Styled.NavLink>
            <Styled.NavLink href="#portfolio">Portfolio</Styled.NavLink>
            <Styled.NavLink href="#contact">Contact</Styled.NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Styled.Navbar>
  );
}
