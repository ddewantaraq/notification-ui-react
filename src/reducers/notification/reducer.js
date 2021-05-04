import {
  NOTIFICATION_SUCCESS,
  NOTIFICATION_ERROR,
  CLEAR_MESSAGE
} from './constant';

export const initState = {
  message: '',
  type: null
};

const notificationReducer = (state=initState, action) => {
  switch (action.type) {
    case NOTIFICATION_SUCCESS:
      return {
        ...state,
        type: 'success',
        message: action.message
      }
    case NOTIFICATION_ERROR:
      return {
        ...state,
        type: 'error',
        message: action.message
      }
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: ''
      }
    default:
      return state;
  }
}

export default notificationReducer;