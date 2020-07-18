import styled from 'styled-components';

import { themes } from '../../../utils/themes';

export const Divider = styled.hr`
  max-width: 3.25rem;
  border-width: 0.2rem;
  border-color: ${({ theme, variant }) => themes[theme][variant].backgroundColor} !important;
`;
