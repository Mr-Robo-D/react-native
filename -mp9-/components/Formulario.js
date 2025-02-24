import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, StyleSheet, Alert } from 'react-native';
import users from './src/data/users'

const Formulario = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [sexo, setSexo] = useState('');
     const [UF, setUF] = useState('');

    const handleSubmit = () => {
        
        const newUser = { id: users.length + 1, nome, email, sexo, UF };
        users.push(newUser); 
        console.log('Usuário cadastrado:', newUser);
        Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
        navigation.goBack(); 
        
    };

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
                style={styles.input}
            />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
             <TextInput
                placeholder="UF"
                value={UF}
                onChangeText={setUF}
                style={styles.input}
            />
            <TextInput
                placeholder="Sexo"
                value={sexo}
                onChangeText={setSexo}
                style={styles.input}
            />
            <Button title="Cadastrar" onPress={handleSubmit} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default Formulario;
