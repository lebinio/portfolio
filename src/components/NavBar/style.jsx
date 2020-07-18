import { Nav as BtNav, Navbar as BtNavbar } from 'react-bootstrap';
import styled from 'styled-components';

import { themes } from '../../utils/themes';

export const Navbar = styled(BtNavbar)`
  &&& {
    position: fixed;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    background-color: #fff;
    transition: background-color 0.2s ease;
    @media (min-width: 992px) {
      box-shadow: none;
      background-color: ${({scrolled}) => scrolled ? '#fff': 'transparent'};
      width: 100%;
      z-index: 10;
    }
  }
`;

export const NavBrand = styled(BtNavbar.Brand)`
  &&& {
    font-family: 'Merriweather Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', 'Noto Color Emoji';
    font-weight: 700;
  }
`;

export const NavLink = styled(BtNav.Link)`
  &&& {
    color: ${({scrolled}) => scrolled ? '#000': '#fff'};
    font-family: 'Merriweather Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', 'Noto Color Emoji';
    font-weight: 700;
    font-size: 0.9rem;
    &:hover {
      color: ${({ theme, variant }) => themes[theme][variant].backgroundColor};
    }
    &:active {
      color: ${({ theme, variant }) => themes[theme][variant].backgroundColor} !important;
    }
  }
`;
