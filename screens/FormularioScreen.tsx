import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Switch, TextInput } from 'react-native-gesture-handler'
import { Card, Divider } from 'react-native-paper'

export default function FormularioScreen() {

    const [usuario, setusuario] = useState("")
    const [edad, setedad] = useState(0)
    const [visible, setvisible] = useState(false)

    const [datos, setdatos] = useState({ "usuario": "", "edad": 0 })


    function guardar() {

        if (usuario.trim() == "") {
            console.error("datos en blanco")
        }


        setdatos({
            "usuario": usuario,
            "edad": edad
        })
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40 }}>Formulario</Text>


            <TextInput placeholder='Ingresar Usuario' style={styles.input} onChangeText={(texto) => setusuario(texto)} />

            <TextInput placeholder='Ingresar edad' style={styles.input} onChangeText={(texto) => setedad(+texto)} />

            <Button title='Guardar' onPress={() => guardar()} />

            <Divider />
            <Text>Ver Datos</Text>
            <Switch value={visible} onValueChange={() => setvisible(!visible)} />
            <View style={styles.linea} />

            {visible == true
                ? <View>
                    <Text style={styles.txt}>{datos.usuario}</Text>
                    <Text style={styles.txt}>{datos.edad} </Text>
                </View>
                : <Text>alerta spoiler</Text>}

        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 30
    },
    container: {
        flex: 1,
        backgroundColor: '#6666',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        fontSize: 30,
        backgroundColor: "#7f79f6",
        width: "60%",
        margin: 10,
        borderRadius: 10
    },
    linea: {
        borderWidth: 1,
        width: "100%",
        margin: 10
    }
})