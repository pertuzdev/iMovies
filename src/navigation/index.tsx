import React from 'react';
import {UserProvider} from '../context/User/UserProvider';
import Routes from './Routes';

const Providers = () => {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
};

export default Providers;
