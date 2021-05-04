import {
    NOTIFICATION_SUCCESS,
    NOTIFICATION_ERROR,
    CLEAR_MESSAGE
} from './constant';

export const notifySuccess = (message) => {
    return {
        type: NOTIFICATION_SUCCESS,
        message
    }
}

export const notifyError = (message) => {
    return {
        type: NOTIFICATION_ERROR,
        message
    }
}

const clearMessage = () => {
    return {
        type: CLEAR_MESSAGE
    }
}

export function notificationSuccess(message) {
    return async function (dispatch) {
        dispatch(notifySuccess(message));
	};
}

export function notificationError(message) {
    return async function (dispatch) {
        dispatch(notifyError(message));
	};
}

export function clearingMessage() {
    return async function (dispatch) {
        dispatch(clearMessage());
	};
}