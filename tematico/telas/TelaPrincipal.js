import React from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import estilos from './estilos';

export default function TelaPrincipal() {
  const navigation = useNavigation();

  return (
    <ImageBackground 
      source={{ uri: 'https://w.wallhaven.cc/full/k9/wallhaven-k9zppq.jpg' }}  
      style={estilos.BackgroundImage}
    >
    <View style={estilos.container}>
      <Text style={estilos.title}>Assuntos</Text>
      <Button title="Seleção Brasileira de Futebol" onPress={() => navigation.navigate('Tela1')} />
      <Button title="Mr. Robot" onPress={() => navigation.navigate('Tela2')} />
      <Button title="Metal Gear Solid" onPress={() => navigation.navigate('Tela3')} />
      <Button title="Mamonas Assassinas" onPress={() => navigation.navigate('Tela4')} />
    </View>
    </ImageBackground>
  );
}
