import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

import { themes } from '../../utils/themes';

export const PortfolioBox = styled.a`
  position: relative;
  display: block;
  background-color: transparent;
`;

export const PortfolioCaption = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  text-align: center;
  opacity: 0;
  color: ${({ theme, variant }) => themes[theme][variant].color};
  background: ${({ theme, variant }) => themes[theme][variant].backgroundColor};
  transition: opacity 0.25s ease;
  text-align: center;
  &:hover {
    opacity: 0.9;
  }
`;

export const ProjectCategory = styled.div`
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme, variant }) => themes[theme][variant].color};
`;

export const ProjectName = styled.div`
  font-size: 1.2rem;
  color: ${({ theme, variant }) => themes[theme][variant].color};
`;

export const RowNoGutters = styled(Row)`
  margin-right: 0;
  margin-left: 0;
`;

export const ColNoGutters = styled(Col)`
  padding-right: 0;
  padding-left: 0;
`;
