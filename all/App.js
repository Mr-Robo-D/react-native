import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground, StyleSheet } from 'react-native';
import Menu from './src/telas/Menu/Menu';
import Megasena from './src/telas/Megasena/Megasena';
import Convite from './src/telas/Convite/Convite';
import Calculadora from './src/telas/Calculadora/Calculadora';
import Nascimento from './src/telas/Nascimento/Nascimento';
import Cardapio from './src/telas/Cardapio/Cardapio';


const Stack = createStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
        
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen name="Menu" component={Menu} />
           <Stack.Screen name="Calculadora" component={Calculadora} />
           <Stack.Screen name="Nascimento" component={Nascimento} />
           <Stack.Screen name="Convite" component={Convite} />
            <Stack.Screen name="Megasena" component={Megasena} />
            <Stack.Screen name="Cardapio" component={Cardapio} />

   
          
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
