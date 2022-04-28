import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import HomeStack from './src/navigation/HomeStack';
import {MovieProvider} from './src/context/Movie/MovieProvider';

const App = () => {
  return (
    <NavigationContainer>
      <MovieProvider>
        <HomeStack />
      </MovieProvider>
    </NavigationContainer>
  );
};

export default App;
