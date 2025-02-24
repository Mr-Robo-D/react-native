import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BurgerScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cardápio de Hambúrgueres</Text>
      <Text style={styles.item}>• Cheeseburger</Text>
      <Text style={styles.item}>• Hambúrguer de Frango</Text>
      <Text style={styles.item}>• Hambúrguer Vegetariano</Text>
      <Text style={styles.item}>• Bacon Burger</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: '#e63946',
  },
  item: {
    fontSize: 20,
    marginVertical: 10,
    color: '#333',
  },
});
