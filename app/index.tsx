import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext } from 'react'
import { router } from 'expo-router'
import UserContext from './Context/UserContext'

const Index = () => {

    const { userName, setUserName } = useContext(UserContext);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Enter your Name</Text>
            <TextInput
                value={userName}
                onChangeText={(t) => setUserName?.(t)}
                style={styles.input} />
            {/* <Button  onPress={() => router.push("/home")} title='Go Home'/> */}
                <Pressable onPress={() => router.push("/home")} style={styles.btn}>
                    <Text style={{color:"#fff"}} >Go Home</Text>
                </Pressable>

        </View>
    );
}

export default Index;

const styles = StyleSheet.create({
    input: {
            borderWidth: 1,
            paddingVertical: 10,
            paddingHorizontal:5,
            marginVertical:10,
            borderRadius:10,
            width:"60%",   
    },
    btn:{
        backgroundColor:"#000",
        padding:16,
        borderRadius:16,
    }
});
