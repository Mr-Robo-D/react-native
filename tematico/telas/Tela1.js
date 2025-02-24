import React from 'react';
import { View, Text, Button, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import estilos from './estilos';

export default function Tela1() {
  const navigation = useNavigation();

  const handleCopa2002Press = () => {
    Alert.alert(
      "Copa do Mundo 2002",
      "A Seleção Brasileira marcou 18 gols durante a Copa do Mundo de 2002. Esse desempenho ajudou o Brasil a conquistar o seu quinto título mundial, com Ronaldo sendo o artilheiro do torneio com 8 gols."
    );
  };

  const handleCopa1994Press = () => {
    Alert.alert(
      "Copa do Mundo 1994",
      "A Copa de 1994, realizada nos Estados Unidos, teve a maior média de público da história das Copas, com cerca de 68 mil torcedores por jogo.\n\n" +
      "Primeira Final Decidida nos Pênaltis: Foi a primeira vez que uma final de Copa do Mundo terminou empatada em 0 a 0 e foi decidida nos pênaltis. O Brasil venceu a Itália por 3 a 2 nas cobranças.\n\n" +
      "Primeiro Cartão Vermelho para um Goleiro: O goleiro italiano Gianluca Pagliuca foi o primeiro goleiro a receber um cartão vermelho em uma Copa do Mundo, durante a partida contra a Noruega.\n\n" +
      "Estreia de Telões e Replays: Para agradar ao público norte-americano, a FIFA permitiu o uso de telões nos estádios, que mostravam replays dos lances mais polêmicos, algo inédito até então."
    );
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://w.wallhaven.cc/full/ne/wallhaven-ne216r.jpg' }}  
      style={estilos.BackgroundImage}
    >
      <View style={estilos.container}>
        <Text style={estilos.title}>Seleção Brasileira de Futebol</Text>
        <Text style={estilos.subtitle}></Text>
        <Button title="Copa do Mundo 1994" onPress={handleCopa1994Press} />
        <Button title="Copa do Mundo 2002" onPress={handleCopa2002Press} />
      </View>
    </ImageBackground>
  );
}
