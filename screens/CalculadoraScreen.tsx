import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function CalculadoraScreen() {

    const [numero1, setnumero1] = useState(0)
    const [numero2, setnumero2] = useState(0)
    //const [resultado, setresultado] = useState(0)

    useEffect(() => {
        if (numero1 <= -5 || numero1>=10 ) {
            setnumero1(0)
    
        }
        if (numero2 >= 5 || numero2>=10 ) {
            setnumero1(0)
        }
      


    }, [numero1, numero2])


    function menos() {
        setnumero1(numero1 - 1)

    }

    function limpiar() {
        setnumero1(0)
        setnumero2(0)
    }
    function suma() {
        Alert.alert("Suma", "La suma de los dos numeros es: " + (numero1 + numero2), [
            {
                text: "Borrar",
                onPress: () => limpiar()
            },
            {
                text: "continuar"
            }
        ])
        //setresultado(numero1 + numero2)
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40 }}>Calculadora</Text>

            <View style={styles.fila}>
                <Button title="-" onPress={menos} />
                <Text style={{ fontSize: 40 }}>  {numero1}  </Text>
                <Button title='+' onPress={() => setnumero1(numero1 + 1)} />
            </View>

            <View style={styles.fila}>
                <Button title='-' color={"gray"} onPress={() => setnumero2(numero2 - 1)} />
                <Text style={{ fontSize: 40 }}> {numero2} </Text>
                <Button title='+' color={"gray"} onPress={() => setnumero2(numero2 + 1)} />
            </View>

            <View style={styles.linea} />

            <Button title='suma' onPress={suma} />




        </View>
    )
}

const styles = StyleSheet.create({
    fila: {
        flexDirection: 'row',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    linea: {
        backgroundColor: 'black',
        margin: 1,
        width: "50%",
        borderWidth: 1
    }
})