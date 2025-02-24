import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

export default function Menu({ navigation }) {
  return (
    <ImageBackground 
      source={{ uri: 'https://c7.alamy.com/comp/2KF6P34/restaurant-menu-white-background-with-embossed-golden-letters-and-lines-and-mountain-emblem-deluxe-2KF6P34.jpg' }} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>{''}</Text>
        <Button
          title="Megasena"
          onPress={() => navigation.navigate('Megasena')}
          color="#f28a29"
        />
        <Button
          title="Convite"
          onPress={() => navigation.navigate('Convite')}
          color="#f28a29"
        />
        <Button
          title="Calculadora de Conversão"
          onPress={() => navigation.navigate('Calculadora')}
          color="#f28a29"
        />
        <Button
          title="Data de Nascimento"
          onPress={() => navigation.navigate('Nascimento')}
          color="#f28a29"
        />
        <Button
          title="Cardápio"
          onPress={() => navigation.navigate('Cardapio')}
          color="#f28a29"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'rgba(245, 245, 245, 0.20)',
    padding: 50,
  },
  title: {
    fontSize: 38,
    marginBottom: 20,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
