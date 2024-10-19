import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext } from 'react'
import { router } from 'expo-router'
import UserContext from './Context/UserContext'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './redux/store'
import { decrement, increment, reset } from './redux/actions/CounterAction'

const Index = () => {

    const { userName, setUserName } = useContext(UserContext);

    const counter = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch();


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Enter your Name</Text>
            <TextInput
                value={userName}
                onChangeText={(t) => setUserName?.(t)}
                style={styles.input} />
            {/* <Button  onPress={() => router.push("/home")} title='Go Home'/> */}
            <Pressable onPress={() => router.push("/home")} style={styles.btn}>
                <Text style={{ color: "#fff" }} >Go Home</Text>
            </Pressable>

            <Pressable onPress={() => router.push("/form")} style={styles.btn2}>
                <Text style={{ color: "#fff" }} >Go to Form</Text>
            </Pressable>



            <View>
                {/* <Button onPress={() => dispatch(increment())} title='Increment' />
                <Button onPress={() => dispatch({ type: "INCREMENT", payload: { by: 10 } })}
                    title='Increment by 10' />
                <Button onPress={() => dispatch(decrement())} title='Decrement' /> */}

                <Text style={{textAlign:"center",fontSize:20}}>{counter}</Text>

                <Pressable onPress={() => dispatch(increment())} style={styles.btn2}>
                    <Text style={styles.btnText} >INCREMENT</Text>
                </Pressable>
                <Pressable onPress={() => dispatch({ type: "INCREMENT", payload: { by: 10 } })} style={styles.btn2}>
                    <Text style={styles.btnText} >INCREMENT BY 10</Text>
                </Pressable>
                <Pressable onPress={() => dispatch(decrement())} style={styles.btn2}>
                    <Text style={styles.btnText} >DECREMENT</Text>
                </Pressable>
                <Pressable onPress={() => dispatch(reset())} style={styles.btn2}>
                    <Text style={styles.btnText} >RESET</Text>
                </Pressable>
            </View>

        </View>
    );
}

export default Index;

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginVertical: 10,
        borderRadius: 10,
        width: "60%",
    },
    btn: {
        backgroundColor: "#000",
        padding: 16,
        borderRadius: 16,
    },

    btn2: {
        backgroundColor: "black",
        padding: 10,
        borderRadius: 5,
        marginVertical: 15,
    },
    btnText:{ 
        color: "#fff",
        textAlign:"center",
        userSelect:"none"
    }

});
