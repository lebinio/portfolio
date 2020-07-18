import { CHANGE_THEME, RESET_THEME } from './actionTypes';

export function changeTheme(theme) {
  return { type: CHANGE_THEME, payload: theme };
}

export function resetTheme() {
  return { type: RESET_THEME };
}
