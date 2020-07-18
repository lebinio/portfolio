import { Nav as BtNav, Navbar as BtNavbar } from 'react-bootstrap';
import styled from 'styled-components';

export const Navbar = styled(BtNavbar)`
  &&& {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    background-color: #fff;
    transition: background-color 0.2s ease;
    @media (min-width: 992px) {
      box-shadow: none;
    background-color: transparent;
    }
  }
`;

export const NavBrand = styled(BtNavbar.Brand)`
  &&& {
    font-family: 'Merriweather Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', 'Noto Color Emoji';
    font-weight: 700;
    color: #212529;
  }
`;

export const NavLink = styled(BtNav.Link)`
  &&& {
    color: #6c757d;
    font-family: 'Merriweather Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', 'Noto Color Emoji';
    font-weight: 700;
    font-size: 0.9rem;
    &:hover {
      color: #f4623a;
    }
    &:active {
      color: #f4623a !important;
    }
  }
`;
