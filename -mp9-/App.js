import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserList from './components/UserList';
import UserForm from './components/Formulario';
import UserDetail from './components/Detalhes'
import { Button, Icon } from 'react-native-elements';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="UserList"
                screenOptions={screenOptions}
            >

            
                <Stack.Screen
                    name="UserList"
                    component={UserList}
                    options={({ navigation }) => ({
                        title: "Lista de Usuários",
                        headerRight: () => (
                            <Button
                                onPress={() => navigation.navigate("UserForm")}
                                type="clear"
                                icon={<Icon name="add" size={25} color="white" />}
                            />
                        )
                    })}
                />


<Stack.Screen
    name="UserDetail"
    component={UserDetail}
    options={{
        title: "Detalhes do Usuário",
    }}
/>


                <Stack.Screen
                    name="UserForm"
                    component={UserForm}
                    options={{
                        title: "Formulário de Usuários"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#009955',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};

export default App;