import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext } from 'react'
import { router } from 'expo-router'
import UserContext from './Context/UserContext'

const Index = () => {

    const { userName, setUserName } = useContext(UserContext);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <label>Enter your Name</label>
            <TextInput
                value={userName}
                onChangeText={(t) => setUserName?.(t)}
                style={styles.input} />
            <Button onPress={() => router.push("/home")} title='Go Home' />


        </View>
    );
}

export default Index;

const styles = StyleSheet.create({
    input: {
            borderWidth: 1,
            paddingVertical: 10,
            marginVertical:10,      
    }
});
