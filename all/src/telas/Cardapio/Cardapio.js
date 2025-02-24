import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground, StyleSheet } from 'react-native';
import MenuScreen from './telas/menu/Menu';
import PizzaScreen from './telas/pizza/Pizza';
import BurgerScreen from './telas/burger/Burger';
import DrinksScreen from './telas/drink/Drink';





const Stack = createStackNavigator();

export default function Cardapio() {
  return (
    
     
        
       <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen name="Menu" component={MenuScreen} />
          <Stack.Screen name="Pizza" component={PizzaScreen} />
          <Stack.Screen name="Hamburger" component={BurgerScreen} />
          <Stack.Screen name="Bebidas" component={DrinksScreen} />
          
          
        </Stack.Navigator>
        
  
    
  );
}

const styles = StyleSheet.create({
  background: {
    color: 'black',
    flex: 1,
  },

});
