import notificationReducer from './notification';

export const initState = {
	notification: notificationReducer.initState,
}

const reducers = (state, action) => {
    // previous state
	const {
		notification,
	} = state;

    // current state
	const currentState = {
		notification: notificationReducer.reducer(notification, action),
	};

	return currentState;
}

export default reducers;