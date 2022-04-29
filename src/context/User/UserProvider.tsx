import React, {useReducer} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {UserState} from '../../interfaces/User';

import userReducer from '../../reducers/userReducer';

import {UserContext} from './UserContext';
import {useEffect} from 'react';

const initialState: UserState = {
  user: null,
  token: null,
  loading: false,
  error: '',
};

type UserProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export function UserProvider({children}: UserProviderProps) {
  const [userState, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@token');
        if (value !== null) {
          console.log(value, 'value');
          dispatch({type: 'SET_TOKEN_STORED', payload: {token: value}});
          console.log(initialState);
        }
      } catch (e) {
        console.log(e);
      }
    };
    if (!userState.token) {
      getData();
    }
  }, [userState.token]);

  return (
    <UserContext.Provider value={{userState, dispatch}}>
      {children}
    </UserContext.Provider>
  );
}
