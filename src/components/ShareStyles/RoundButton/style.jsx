import { Button } from 'react-bootstrap';
import styled from 'styled-components';

import { themes } from '../../../utils/themes';

export const RoundButton = styled(Button)`
  padding: 1.25rem 2.25rem;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  border-radius: 10rem;
  background-color: ${({ theme, variant }) => themes[theme][variant].backgroundColor} !important;
  color: ${({ theme, variant }) => themes[theme][variant].color} !important;
  &:hover {
    filter: brightness(85%);
  }
`;
