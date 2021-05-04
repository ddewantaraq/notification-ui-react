// References: https://github.com/pourya7/react-without-redux

import React, { useCallback, useContext, useReducer } from 'react';
import mainReducer, { initState } from '../reducers';

const Store = React.createContext({});
const asyncer = (dispatch, state) => (action) =>
  typeof action === 'function' ?  action(dispatch, state) : dispatch(action);

export const useGlobalStore = () => useContext(Store);

const Provider = ({children}) => {
  const [ state, dispatchBase ] = useReducer(mainReducer, initState);

  // eslint-disable-next-line
  const dispatch = useCallback(asyncer(dispatchBase, state), []);

  return (
    <Store.Provider value={{ state, dispatch }}>
      {children}
    </Store.Provider>
  );
}

export default Provider;