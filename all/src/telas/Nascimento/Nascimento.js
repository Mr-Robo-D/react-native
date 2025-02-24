import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ImageBackground } from 'react-native';

const Data_Nascimento = () => {
  const [dataNascimento, setDataNascimento] = useState('');
  const [idade, setIdade] = useState('');
  const [categoria, setCategoria] = useState('');

  const calcularIdade = () => {
    const [dia, mes, ano] = dataNascimento.split('/');
    const dataNasc = new Date(`${ano}-${mes}-${dia}`);
    const dataAtual = new Date();

    if (isNaN(dataNasc.getTime())) {
      setIdade('Data inválida. Formato correto: DD/MM/AAAA');
      setCategoria('');
      return;
    }

    let anos = dataAtual.getFullYear() - dataNasc.getFullYear();
    let meses = dataAtual.getMonth() - dataNasc.getMonth();
    let dias = dataAtual.getDate() - dataNasc.getDate();

    if (dias < 0) {
      meses -= 1;
      dias += new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0).getDate();
    }

    if (meses < 0) {
      anos -= 1;
      meses += 12;
    }

    const idadeString = `${anos} anos, ${meses} meses e ${dias} dias`;

    setIdade(idadeString);

    if (anos <= 19) {
      setCategoria('Jovem');
    } else if (anos >= 20 && anos <= 59) {
      setCategoria('Adulto');
    } else {
      setCategoria('Idoso');
    }
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://i.ibb.co/BHJTYZK/wallhaven-42jm79.jpg' }} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.texto_principal}>Exemplo: 27/04/1999</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua data de nascimento (DD/MM/AAAA)"
          value={dataNascimento}
          onChangeText={setDataNascimento}
        />
        <Button title="Calcular Idade" onPress={calcularIdade} />

        {idade ? (
          <View style={styles.resulto}>
            <Text style={styles.resultoTexto}>Idade: {idade}</Text>
            <Text style={styles.resultoTexto}>Categoria: {categoria}</Text>
          </View>
        ) : null}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 16,
    paddingHorizontal: 8,
    color: 'red',
  },
  resulto: {
    marginTop: 20,
  },
  resultoTexto: {
    fontSize: 18,
    marginVertical: 5,
    color: 'green',
  },
  texto_principal: {
    color: 'black',
    height: 80,
    margin: 52,
    padding: 20,
    fontStyle: 'italic',
    fontSize: 20,
    borderWidth: 8,
    borderColor: 'purple'
  },
});

export default Data_Nascimento;
