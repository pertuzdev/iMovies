import {User, UserState} from '../interfaces/User';

export type UserActionType =
  | {
      type: 'VALIDATE_USER_SUCCESS';
      payload: {
        loading: boolean;
        token: string;
      };
    }
  | {
      type: 'VALIDATE_USER_FAIL';
      payload: {
        loading: boolean;
        error: Object;
      };
    }
  | {
      type: 'VALIDATE_USER_REQUEST';
      payload: {
        loading: boolean;
      };
    }
  | {
      type: 'SET_USER';
      payload: {
        user: User;
      };
    }
  | {
      type: 'LOGOUT';
    };

export default function userReducer(
  state: UserState,
  action: UserActionType,
): UserState {
  switch (action.type) {
    case 'VALIDATE_USER_REQUEST':
      return {...state, loading: true};
    case 'VALIDATE_USER_SUCCESS':
      return {...state, loading: false, token: action.payload.token};
    case 'VALIDATE_USER_FAIL':
      return {...state, loading: false, error: action.payload.error};
    case 'SET_USER':
      return {...state, user: action.payload.user};
    case 'LOGOUT':
      return {...state, loading: false, token: null};
    default:
      return state;
  }
}
