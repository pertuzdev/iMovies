import {useCallback, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    const removeToken = async () => {
      try {
        await AsyncStorage.removeItem('@token');
      } catch (e) {
        console.log(e);
      }
    };
    removeToken();
  }, [dispatch]);

  const cleanError = useCallback(() => {
    dispatch({type: 'CLEAN_ERROR'});
  }, [dispatch]);

  return {login, logout, userState, cleanError};
}
