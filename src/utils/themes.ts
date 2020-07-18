import { isUndefined } from 'util';

import { string } from 'prop-types';

export enum ThemeName {
  METAL = 'metal',
  TREE = 'tree',
  WATER = 'water',
  FIRE = 'fire',
  EARTH = 'earth',
}

export interface Color {
  backgroundColor: string;
  color: string;
}

export interface Theme {
  primary: Color;
  default: Color;
}

const defaultColor: Color = {
  backgroundColor: '#fff',
  color: '#000',
};

const metalTheme: Theme = {
  primary: {
    backgroundColor: '#d0d1d5',
    color: '#fff',
  },
  default: defaultColor,
};
const treeTheme: Theme = {
  primary: {
    backgroundColor: '#8bc443',
    color: '#fff',
  },
  default: defaultColor,
};
const waterTheme = {
  primary: {
    backgroundColor: '#007cdc',
    color: '#fff',
  },
  default: defaultColor,
};
const fireTheme = {
  primary: {
    backgroundColor: '#ff1244',
    color: '#fff',
  },
  default: defaultColor,
};
const earthTheme = {
  primary: {
    backgroundColor: '#f8bd0b',
    color: '#fff',
  },
  default: defaultColor,
};
export const themes = new Map<string, Theme>();
themes.set(ThemeName.METAL, metalTheme);
themes.set(ThemeName.TREE, treeTheme);
themes.set(ThemeName.WATER, waterTheme);
themes.set(ThemeName.FIRE, fireTheme);
themes.set(ThemeName.EARTH, earthTheme);

export const defaultTheme = 'tree';

export const defaultVariant = 'default';

export const getTheme = (themeName: ThemeName): Theme => {
  const theme = themes.get(themeName);
  if (isUndefined(theme)) {
    return treeTheme;
  }
  return theme;
};

export const getColor = (themeName: ThemeName, variant: string): Color => {
  const theme = getTheme(themeName);
  if (variant === 'primary') {
    return theme.primary;
  }
  return defaultColor;
};
