import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DrinksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cardápio de Bebidas</Text>
      <Text style={styles.item}>• Coca-Cola</Text>
      <Text style={styles.item}>• Suco de Laranja</Text>
      <Text style={styles.item}>• Água Mineral</Text>
      <Text style={styles.item}>• Chá Gelado</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: '#0288d1',
  },
  item: {
    fontSize: 20,
    marginVertical: 10,
    color: '#00796b',
  },
});
