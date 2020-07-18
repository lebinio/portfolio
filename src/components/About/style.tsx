import styled from 'styled-components';

import { ThemeName, getColor } from '../../utils/themes';

type SectionProps = {
  theme: ThemeName;
  variant: string;
};

export const Section = styled.section<SectionProps>`
  padding: 8rem 0;
  background-color: ${({ theme, variant }: SectionProps): string =>
    getColor(theme, variant)?.backgroundColor} !important;
`;
