import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import BottomTabs from './navigation/BottomTabs';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
  },
});

export default App;
