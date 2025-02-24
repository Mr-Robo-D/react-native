import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Button, ImageBackground} from 'react-native';

export default function App() {
  const [celsius, setarCelsius] = useState('');
  const [kmh, setarKmh] = useState('');
  const [resultadoKmh, setarResultadoKmh] = useState(0);
  const [resultadoFahrenheit, setarResultadoFahrenheit] = useState(0);

  function calcularFahrenheit() {
    const fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    setarResultadoFahrenheit(fahrenheit);
  }

  function calcularKmh() {
    const mph = (parseFloat(kmh) / 1.60934);
    setarResultadoKmh(mph);
  }

  return (
    
    <View style={estilos.container}>
        <ImageBackground source={require('/img/fghfh.jpg')} style={estilos.background}></ImageBackground>


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
        placeholder="Km/h para Mph"
        value={kmh}
        onChangeText={setarKmh}
        placeholderTextColor="#777"
        maxLength={4}
      />

      <Button 
        title="Converter Velocidade"
        onPress={calcularKmh}
        color="red"
      />

      <Text style={estilos.resultado}>
        {kmh ? `${kmh} km/h é igual a ${resultadoKmh.toFixed(2)} mph` : ''}
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