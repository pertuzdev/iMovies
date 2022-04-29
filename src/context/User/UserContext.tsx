import {createContext} from 'react';
import {UserState} from '../../interfaces/User';
import {UserActionType} from '../../reducers/userReducer';

export type UserContextProps = {
  userState: UserState;
  dispatch: React.Dispatch<UserActionType>;
};

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps,
);
