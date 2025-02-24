import React from 'react';
import { View, Text, Button, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import estilos from './estilos';

export default function Tela3() {
  const navigation = useNavigation();

  const Raiden = () => {
    Alert.alert(
      "Curiosidade sobre Raiden",
      "Muitos fãs ficaram surpresos e até desapontados ao descobrir que jogariam a maior parte do jogo como Raiden, um novo personagem, em vez de Solid Snake."
    );
  };

  const Profetico = () => {
    Alert.alert(
      "Previsões Proféticas",
      "O jogo previu a manipulação de informações e a disseminação de fake news. A trama envolve a organização 'The Patriots' controlando informações para manipular a sociedade, algo que se tornou uma preocupação real com o aumento das fake news e da manipulação de dados nas redes sociais.\n\n" +
      "Vigilância em Massa: O jogo aborda a vigilância em massa e a coleta de dados pessoais, temas que se tornaram muito relevantes com o avanço da tecnologia e a crescente preocupação com a privacidade online."
    );
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://preview.redd.it/metal-gear-solid-2-blue-cover-phone-wallpapers-1080x2400-v0-7938wnhrqdgc1.jpg?width=1080&crop=smart&auto=webp&s=1cf0cc50dc57fa244f12ddce10693fb6b58df68e' }}  
      style={estilos.BackgroundImage}
    >
      <View style={estilos.container}>
        <Text style={estilos.title}>Metal Gear Solid 2</Text>
        <Text style={estilos.subtitle}></Text>
        <Button title="Raiden" onPress={Raiden} />
        <Button title="Profético" onPress={Profetico} />
      </View>
    </ImageBackground>
  );
}
