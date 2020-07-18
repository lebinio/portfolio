import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { themes } from '../../utils/themes';

export const Themer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  top: 6rem;
  right: 0;
  border: 0;
  padding: 0.5rem;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(34, 39, 46, 0.15);
  color: #001500;
  background-color: #fff;
  border-radius: 0.35rem 0 0 0.35rem;
`;

export const ThemerIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  &:hover {
    color: ${({ theme, variant }) => themes[theme][variant].backgroundColor};
    -webkit-transition: color 100ms linear;
    -ms-transition: color 100ms linear;
    transition: color 100ms linear;
  }
`;

export const ColorBox = styled.div`
  margin-left: 0.5rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 12rem;
  display: ${({show}) => show === true ? 'flex' : 'none'};
`;

export const ColorItem = styled.div`
  cursor: pointer;
  padding: 1rem;
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme, variant }) => themes[theme][variant].backgroundColor};
`;
