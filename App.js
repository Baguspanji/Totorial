import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';

const Stack = createStackNavigator();

const MainApp = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
          />
          <Stack.Screen
          name="Product"
          component={ProductScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default MainApp;