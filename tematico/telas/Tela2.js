import React from 'react';
import { View, Text, Button, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import estilos from './estilos';

export default function Tela2() {
  const navigation = useNavigation();

  const handleMrRobot1Press = () => {
    Alert.alert(
      "Preparação dos Atores",
      "Para trazer mais realismo à série, os atores principais, incluindo Rami Malek, participaram de seminários de hackers. Malek, em particular, teve aulas de digitação para parecer mais convincente nas cenas de programação."
    );
  };

  const handleMrRobot2Press = () => {
    Alert.alert(
      "A Famosa Sudadera de Elliot",
      "A icônica sudadera preta com capuz usada por Elliot Alderson é, na verdade, uma peça pessoal de Rami Malek. Ele se sente tão ligado a ela que a equipe de figurino toma medidas especiais para mantê-la em bom estado."
    );
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://media.fstatic.com/CdOVCXgW95PBUkkOHT4cQSe1Xp0=/322x478/smart/filters:format(webp)/media/movies/covers/2015/04/mr-robot-1a-temporada_t113869.jpg' }}  
      style={estilos.BackgroundImage}
    >
      <View style={estilos.container}>
        <Text style={estilos.title}>Mr. Robot</Text>
        <Text style={estilos.subtitle}>Fun facts</Text>
        <Button title="Curiosidade 1" onPress={handleMrRobot1Press} />
        <Button title="Curiosidade 2" onPress={handleMrRobot2Press} />
      </View>
    </ImageBackground>
  );
}
