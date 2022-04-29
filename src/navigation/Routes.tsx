import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {useUser} from '../hooks/useUser';

import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import {MovieProvider} from '../context/Movie/MovieProvider';

const Routes = () => {
  const {userState} = useUser();

  const {token} = userState;

  return (
    <NavigationContainer>
      {token ? (
        <MovieProvider>
          <HomeStack />
        </MovieProvider>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default Routes;
