
import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const Detalhes = ({ route }) => {
    const { user } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{user.nome}</Text>
            <Text>ID: {user.id}</Text>
            <Text>Email: {user.email}</Text>
             <Text>Sexo: {user.sexo}</Text>
              <Text>UF: {user.UF}</Text>
           

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Detalhes;