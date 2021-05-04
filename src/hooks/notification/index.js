
import { useGlobalStore } from '../../core/provider';

import bindActions from '../../core/bindActions';
import notificationReducer from '../../reducers/notification';

const { actions } = notificationReducer;

/**
 * Notification Custom Hook
 */
const useNotification = () => {
	const { state, dispatch } = useGlobalStore();

	// List of Props
	const { notification } = state;

	// List of Actions
	const {
		notificationSuccess,
		notificationError,
		clearingMessage
	} = actions;

	// Bind Actions
	const notificationActions = bindActions({
		notificationSuccess,
		notificationError,
		clearingMessage
	}, dispatch);

	return { ...notification, ...notificationActions };
}

export default useNotification;