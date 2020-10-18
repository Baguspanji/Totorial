import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import StudentScreen from './src/screens/StudentScreen';

const Stack = createStackNavigator();

const MainApp = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home"
            component={HomeScreen}
            options={{ title: 'Bagus Panji'}}
            />
            <Stack.Screen
            name="Product"
            component={ProductScreen}
            options={{ title: 'Menu Makan'}}
            />
            <Stack.Screen
            name="Student"
            component={StudentScreen}
            options={{ title: 'Data Mahasiswa'}}
            />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default MainApp;