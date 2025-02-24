import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  BackgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff', 
  },
  button: {
    marginVertical: 10,
  },
  alertText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default estilos;
