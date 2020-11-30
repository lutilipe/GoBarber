import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import AppProvider from './context';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <AppProvider>
        <View style={styles.container}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#312e38',
    flex: 1,
  },
});

export default App;
