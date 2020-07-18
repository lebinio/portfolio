import { CHANGE_THEME, RESET_THEME } from '../actions/actionTypes';
import { defaultTheme } from '../../utils/themes';

let initialState = { theme: defaultTheme };

if (typeof window !== 'undefined') {
  const storedState = window.localStorage.getItem('config');
  if (storedState) {
    try {
      initialState = JSON.parse(storedState);
    } catch(e) {
      console.error(e);
    }
  }
}

export default function basicReducer(state = initialState, action) {
  const newState = {
    ...state
  };
  switch (action.type) {
    case CHANGE_THEME:
      newState.theme = action.payload;
      break;
    case RESET_THEME:
      newState.theme = defaultTheme;
      break;
    default:
      break;
  }

  if (typeof window !== 'undefined') {
    window.localStorage.setItem('config', JSON.stringify(newState));
  }

  return newState;
}
