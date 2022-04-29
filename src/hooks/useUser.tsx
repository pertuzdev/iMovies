import {useCallback} from 'react';
import {useContext} from 'react';
import {UserContext} from '../context/User/UserContext';
import {validateUser} from '../actions/UserActions';

export function useUser() {
  const {userState, dispatch} = useContext(UserContext);

  const login = useCallback(
    ({email, password}) => {
      validateUser({dispatch, email, password});
    },
    [dispatch],
  );

  const logout = useCallback(() => {
    dispatch({type: 'LOGOUT'});
  }, [dispatch]);

  const cleanError = useCallback(() => {
    dispatch({type: 'CLEAN_ERROR'});
  }, [dispatch]);

  return {login, logout, userState, cleanError};
}
