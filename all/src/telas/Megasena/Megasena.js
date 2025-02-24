import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ImageBackground } from 'react-native';
import GeradorMegaSena from './MegaSenaGenerator';

const MegaSena = () => {
  const [numerosUsuario, setNumerosUsuario] = useState(['', '', '', '', '', '']);
  const [numerosSorteados, setNumerosSorteados] = useState([0]);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const gerarNumerosAleatorios = () => {
    let numerosAleatorios = [];
    while (numerosAleatorios.length < 6) {
      const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
      if (!numerosAleatorios.includes(numeroAleatorio)) {
        numerosAleatorios.push(numeroAleatorio);
      }
    }
    return numerosAleatorios;
  };

  const handleGerarNumeros = () => {
    const numeros = numerosUsuario.map(Number);
    if (new Set(numeros).size !== 6 || numeros.some(num => num < 1 || num > 60)) {
      Alert.alert('Erro', 'Insira 6 números válidos e sem repetição entre 1 e 60');
      return;
    }
    setNumerosSorteados(gerarNumerosAleatorios());
    setMostrarResultado(true);
  };

  const handleMudancaNumero = (valor, indice) => {
    const novosNumerosUsuario = [...numerosUsuario];
    novosNumerosUsuario[indice] = parseInt(valor, 10); 
    setNumerosUsuario(novosNumerosUsuario);
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://iphoneswallpapers.com/wp-content/uploads/2020/12/100-Dollar-Bills-iPhone-Wallpaper.jpg' }} 
      style={estilos.background}
    >
  
      <View style={estilos.container}>
        <Text style={estilos.titulo}>Jogo da Mega-Sena</Text>
        <Text style={estilos.subtitulo}>Insira 6 números (1-60):</Text>

        <View style={estilos.containerEntradaNumeros}>
          {numerosUsuario.map((numero, indice) => (
            <TextInput
              key={indice}
              keyboardType="numeric"
              value={String(numero)} 
              onChangeText={(valor) => handleMudancaNumero(valor, indice)}
              style={estilos.entrada}
            />
          ))}
        </View>

        <Button title="Sortear Números" onPress={handleGerarNumeros} />

        {mostrarResultado && (
          <GeradorMegaSena numerosUsuario={numerosUsuario.map(Number)} numerosSorteados={numerosSorteados} />
        )}
      </View>
   </ImageBackground>
  );
};

const estilos = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffff',
  },
  subtitulo: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#ffff',
  },
  containerEntradaNumeros: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  entrada: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 5,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default MegaSena;
