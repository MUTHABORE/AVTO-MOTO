import {extend} from '../utils/utils';
import {ActionType} from './actions';

const initialState = {
  isPopupOpen: false,
}

const popup = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.POPUP_STATE_CHANGE:
      return extend(state, {
        isPopupOpen: !state.isPopupOpen,
      });
    }
  return state;
}

export {popup};
