import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

export default function MenuScreen({ navigation }) {
  return (
    <ImageBackground 
      source={{ uri: 'https://i.ibb.co/C2j3k59/food-menu.jpg' }} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>{'Cardápio'}</Text>
        <Button
          title="Pizza"
          onPress={() => navigation.navigate('Pizza')}
          color="#f28a29"
        />
        <Button
          title="Hambúrguer"
          onPress={() => navigation.navigate('Hamburger')}
          color="#f28a29"
        />
        <Button
          title="Bebidas"
          onPress={() => navigation.navigate('Bebidas')}
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
    textAlign: 'center',
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
