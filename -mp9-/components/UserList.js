import React from 'react';
import { View, FlatList } from 'react-native';
import { ListItem, Avatar, Icon } from '@rneui/themed';
import users from './src/data/users'
import { Button } from 'react-native-elements';

export default comp => {
    function getActions(user) {
        return (
            <>
                <Button
                    onPress={() => comp.navigation.navigate("UserForm", user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="black" />}
                />
                <Button
                    onPress={() => comp.navigation.navigate("UserForm", user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />

                
            </>
        );
    }

    function getUserItem({ item: user }) {
        return (
           <ListItem
    rightElement={getActions(user)}
    bottomDivider
    onPress={() => comp.navigation.navigate("UserDetail", { user })} // Passa o usuário selecionado
>
                <Avatar
                    size={50}
                    rounded
                    source={{ uri: user.avatarUrl }}
                />
                <ListItem.Content>
                    <ListItem.Title>{user.nome}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        );
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    );
}