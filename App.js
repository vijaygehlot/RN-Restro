import React, {useEffect, useState} from 'react';
import RestroStack from './src/navigation/RestroStack';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <RestroStack />
    </NavigationContainer>
  );
};

export default App;
