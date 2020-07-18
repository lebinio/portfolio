import styled from 'styled-components';

import { themes } from '../../utils/themes';

export const Section = styled.section`
  padding: 8rem 0;
  background-color: ${({ theme, variant }) => themes[theme][variant].backgroundColor} !important;
`;

export const EmailLink = styled.a`
  font-weight: 700;
  color: ${({ theme, variant }) => themes[theme][variant].backgroundColor} !important;
`;
