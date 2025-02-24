import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Button, ImageBackground } from 'react-native';

export default function Calculadora() {
  const [celsius, setarCelsius] = useState('');
  const [fahrenheit, setarFahrenheit] = useState('');
  const [kmh, setarKmh] = useState('');
  const [mph, setarMph] = useState('');
  const [resultadoKmh, setarResultadoKmh] = useState(0);
  const [resultadoMph, setarResultadoMph] = useState(0);
  const [resultadoFahrenheit, setarResultadoFahrenheit] = useState(0);
  const [resultadoCelsius, setarResultadoCelsius] = useState(0);

  function calcularFahrenheit() {
    const fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    setarResultadoFahrenheit(fahrenheit);
  }

  function calcularCelsius() {
    const celsius = (parseFloat(fahrenheit) - 32) / 1.8;
    setarResultadoCelsius(celsius);
  }

  function calcularMph() {
    const mph = (parseFloat(kmh) / 1.60934);
    setarResultadoMph(mph);
  }

  function calcularKmh() {
    const kmh = (parseFloat(mph) * 1.60934);
    setarResultadoKmh(kmh);
  }

  return (
    <View style={estilos.container}>
      <ImageBackground source={{ uri: 'https://i.ibb.co/fHmpRTH/fghfh.jpg' }} style={estilos.background}></ImageBackground>

      <Text style={estilos.titulo}>Conversor de Temperatura e Velocidade</Text>

      <TextInput
        style={estilos.entrada}
        keyboardType="numeric"
        placeholder="Celsius para Fahrenheit"
        value={celsius}
        onChangeText={setarCelsius}
        placeholderTextColor="#777"
        maxLength={4}
      />
      <Button
        title="Converter Temperatura"
        onPress={calcularFahrenheit}
        color="red"
      />
      <Text style={estilos.resultado}>
        {celsius ? `${celsius}°C é igual a ${resultadoFahrenheit.toFixed(2)}°F` : ''}
      </Text>

      <TextInput
        style={estilos.entrada}
        keyboardType="numeric"
        placeholder="Fahrenheit para Celsius"
        value={fahrenheit}
        onChangeText={setarFahrenheit}
        placeholderTextColor="#777"
        maxLength={4}
      />
      <Button
        title="Converter Temperatura"
        onPress={calcularCelsius}
        color="red"
      />
      <Text style={estilos.resultado}>
        {fahrenheit ? `${fahrenheit}°F é igual a ${resultadoCelsius.toFixed(2)}°C` : ''}
      </Text>

      <TextInput
        style={estilos.entrada}
        keyboardType="numeric"
        placeholder="Km/h para Mph"
        value={kmh}
        onChangeText={setarKmh}
        placeholderTextColor="#777"
        maxLength={4}
      />
      <Button
        title="Converter Velocidade"
        onPress={calcularMph}
        color="red"
      />
      <Text style={estilos.resultado}>
        {kmh ? `${kmh} km/h é igual a ${resultadoMph.toFixed(2)} mph` : ''}
      </Text>

      <TextInput
        style={estilos.entrada}
        keyboardType="numeric"
        placeholder="Mph para Km/h"
        value={mph}
        onChangeText={setarMph}
        placeholderTextColor="#777"
        maxLength={4}
      />
      <Button
        title="Converter Velocidade"
        onPress={calcularKmh}
        color="red"
      />
      <Text style={estilos.resultado}>
        {mph ? `${mph} mph é igual a ${resultadoKmh.toFixed(2)} km/h` : ''}
      </Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
  },
  entrada: {
    height: 50,
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 16,
    fontSize: 18,
    color: 'black',
    backgroundColor: 'white',
  },
  resultado: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
  },
});
