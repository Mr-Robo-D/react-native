import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GeradorMegaSena = ({ numerosUsuario, numerosSorteados }) => {
  const numerosComuns = numerosUsuario.filter(num => numerosSorteados.includes(num));
  let textoResultado = 'Não ganhou, tente novamente.';
  
  if (numerosComuns.length === 6) {
    textoResultado = 'Parabéns, você fez SENA!';
  } else if (numerosComuns.length === 5) {
    textoResultado = 'Você fez QUINA!';
  } else if (numerosComuns.length === 4) {
    textoResultado = 'Você fez QUADRA!';
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>Números Sorteados: {numerosSorteados.join(', ')}</Text>
      <Text style={[estilos.texto, estilos.textoResultado]}>{textoResultado}</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    marginVertical: 20,
    padding: 10,
  },
  texto: {
    fontSize: 18,
    color: '#ffff',
  },
  textoResultado: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffff',
  },
});

export default GeradorMegaSena;
