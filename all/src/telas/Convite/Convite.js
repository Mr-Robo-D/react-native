import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';

const ConviteFestaFimAno = () => {
  const [tempoRestante, setTempoRestante] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });
  const [adultos, setAdultos] = useState(0);
  const [idosos, setIdosos] = useState(0);
  const [criancas, setCriancas] = useState(0);

  useEffect(() => {
    const dataEvento = new Date('2024-12-31T00:00:00');
    const intervalo = setInterval(() => {
      const agora = new Date();
      const diferenca = dataEvento.getTime() - agora.getTime();

      const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diferenca / 1000 / 60) % 60);
      const segundos = Math.floor((diferenca / 1000) % 60);

      setTempoRestante({ dias, horas, minutos, segundos });
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const totalPessoas = adultos + idosos + criancas;

  return (
    <ImageBackground source={{ uri: 'https://i.ibb.co/B6NCXQb/ghfghfhj.jpg' }}  style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.titleC}>{`Convite para o Monster of the Universe$ \nData: 31/12/2024\n\n\n                 Contagem Regressiva:`}
        </Text>
        <View style={styles.countdown}>
    
          <Text style={styles.titleContagem}>{`${tempoRestante.dias}d ${tempoRestante.horas}h ${tempoRestante.minutos}m ${tempoRestante.segundos}s`}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end' }}>
          <Text style={{ color: 'purple', fontSize: 40, fontFamily: 'Arial' }}>Total: {totalPessoas}</Text>
        </View>
        <View style={styles.containerC}>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{`Adultos: ${adultos} `}</Text>
            <Button title="+" onPress={() => setAdultos(adultos + 1)} />
            <Button title="-" onPress={() => setAdultos(adultos - 1)} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{`  Idoso: ${idosos} `}</Text>
            <Button title="+" onPress={() => setIdosos(idosos + 1)} />
            <Button title="-" onPress={() => setIdosos(idosos - 1)} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{`  Crianças: ${criancas } `}</Text>
            <Button title="+" onPress={() => setCriancas(criancas + 1)} />
            <Button title="-" onPress={() => setCriancas(criancas - 1)} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  containerC: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
  infoContainer: {
    //alignItems: 'center',
    flexDirection: 'row'
  },
  background: {
    flex: 1,
    resizeMode: 'stretch',
  },
  title: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'arial',
  },
  titleB: {
    
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  titleC: {
    alignContent: 'stretch',
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  date: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
  },
  countdown: {
    color: 'green',
    fontSize: 38,
    marginBottom: 20,
  },
  counter: {
    color: 'white',
    fontSize: 28,
    marginBottom: 20,
  },
  titleContagem: {
    color: 'white',
    fontSize: 28,
  },


  
});

export default ConviteFestaFimAno;
