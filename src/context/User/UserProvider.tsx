import React, {useReducer} from 'react';

import {UserState} from '../../interfaces/User';

import userReducer from '../../reducers/userReducer';

import {UserContext} from './UserContext';

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

  return (
    <UserContext.Provider value={{userState, dispatch}}>
      {children}
    </UserContext.Provider>
  );
}
