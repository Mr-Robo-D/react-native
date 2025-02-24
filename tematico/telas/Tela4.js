import React from 'react';
import { View, Text, Button, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import estilos from './estilos';

export default function Tela4() {
  const navigation = useNavigation();

  const Nome = () => {
    Alert.alert(
      "Nome Original da Banda",
      "Antes de se chamarem Mamonas Assassinas, a banda era conhecida como Utopia e tocava principalmente covers de Legião Urbana, Rush e Paralamas do Sucesso."
    );
  };

  const Fim = () => {
    Alert.alert(
      "Trágico Fim",
      "A carreira meteórica dos Mamonas Assassinas durou apenas oito meses. Em 2 de março de 1996, o avião em que a banda viajava se chocou contra a Serra da Cantareira, resultando na morte de todos os ocupantes."
    );
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://scontent-gru2-2.xx.fbcdn.net/v/t39.30808-6/300428373_454810109994579_6547457544771300284_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=YVJci7Ci078Q7kNvgE1DfSO&_nc_ht=scontent-gru2-2.xx&_nc_gid=AcIWo_kk1h6ZLy57bo4gclo&oh=00_AYCaWqu2eghXrsATV4SaNZBMY8-bLU4fY4SDaV7_0FzTwA&oe=67123593' }}  
      style={estilos.BackgroundImage}
    >
      <View style={estilos.container}>
        <Text style={estilos.title}>-</Text>
        <Text style={estilos.subtitle}>-</Text>
        <Button title="Nome Original" onPress={Nome} />
        <Button title="Fim =//" onPress={Fim} />
      </View>
    </ImageBackground>
  );
}
