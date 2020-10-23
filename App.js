import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import InterractiveScreen from './src/screens/InterractiveScreen';
import SantriScreen from './src/screens/SantriScreen';

const Stack = createStackNavigator();

const MainApp = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home"
            component={HomeScreen} //HomeSreen
            options={{ title: 'Bagus Panji'}}
            />
            <Stack.Screen
            name="Product"
            component={ProductScreen}
            options={{ title: 'Menu Makan'}}
            />
            <Stack.Screen
            name="Interractive"
            component={InterractiveScreen}
            /><Stack.Screen
            name="Santri"
            component={SantriScreen}
            options={{ title: 'Data Dummy'}}
            />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default MainApp;