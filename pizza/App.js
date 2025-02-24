import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground, StyleSheet } from 'react-native';
import MenuScreen from './src/telas/menu/Menu';
import PizzaScreen from './src/telas/pizza/Pizza';
import BurgerScreen from './src/telas/burger/Burger';
import DrinksScreen from './src/telas/drink/Drink';

const Stack = createStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
        
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen name="Menu" component={MenuScreen} />
          <Stack.Screen name="Pizza" component={PizzaScreen} />
          <Stack.Screen name="Hamburger" component={BurgerScreen} />
          <Stack.Screen name="Bebidas" component={DrinksScreen} />
          
        </Stack.Navigator>
        
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  background: {
    color: 'black',
    flex: 1,
  },

});
