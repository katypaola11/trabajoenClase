import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';


export default function LoginScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text style={[styles.txt, { fontSize: 60 }]}>Login</Text>
            <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('Tabs')} >
                <View style={styles.fila}></View>
                <Text style={styles.txt}>Ir a calculadora</Text>
                    <Entypo name="login" size={24} color="#170ec8" />
                <View/>
                <Image style={styles.img} source={require("../assets/images/calcular.png")} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#12bdca",
        flex: 1
    },
    txt: {
        color: "white",
        fontSize: 40

    },
    btn: {
        backgroundColor: "#666",
        width: "80%",
        height: 100,
        borderRadius: 10,
        alignItems: "center",
        padding:20
    },
    img: {
        height: 100,
        width: 100,
    },
    fila: {
        flexDirection: "row",
    }
})