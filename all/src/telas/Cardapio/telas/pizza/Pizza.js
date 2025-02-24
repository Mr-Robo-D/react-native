import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PizzaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cardápio de Pizzas</Text>
      <Text style={styles.item}>• Pizza Margherita</Text>
      <Text style={styles.item}>• Pizza de Pepperoni</Text>
      <Text style={styles.item}>• Pizza de Quatro Queijos</Text>
      <Text style={styles.item}>• Pizza Portuguesa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff3e6',
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: '#e76f51',
  },
  item: {
    fontSize: 20,
    marginVertical: 10,
    color: '#264653',
  },
});
