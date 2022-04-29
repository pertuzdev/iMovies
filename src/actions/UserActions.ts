import {UserActionType} from '../reducers/userReducer';
import {userAPI} from '../services/userAPI';

type LoginProps = {
  dispatch: React.Dispatch<UserActionType>;
  email: string;
  password: string;
};

export const validateUser = ({dispatch, email, password}: LoginProps) => {
  dispatch({type: 'VALIDATE_USER_REQUEST', payload: {loading: true}});
  userAPI
    .post('/login', JSON.stringify({email, password}), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => {
      console.log(res, 'res');
      dispatch({
        type: 'SET_USER',
        payload: {user: {email, password}},
      });
      dispatch({
        type: 'VALIDATE_USER_SUCCESS',
        payload: {loading: false, token: res.data.token},
      });
    })
    .catch(e => {
      console.log(e.response.data, 'error');
      dispatch({
        type: 'VALIDATE_USER_FAIL',
        payload: {loading: false, error: e.response.data.e},
      });
    });
};
