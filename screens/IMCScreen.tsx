import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

export default function IMCScreen() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);


    function calcular() {
        let IMC = peso / (altura *altura)


        if (IMC <= 18.49) {
            Alert.alert("Peso Bajo");
        } else if (IMC >= 18.5 && IMC  <= 24.99) {
            Alert.alert("Peso Normal");
        } else if (IMC  >= 25 && IMC  <= 29.99) {
            Alert.alert("Sobrepeso");
        } else if (IMC  >= 30 && IMC  <= 34.99) {
            Alert.alert("Obesidad Leve");
        } else {
            Alert.alert("Obesidad Morbida");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24, textAlign: 'center' }}>Revisión de IMC - "Peso"</Text>

            <View style={styles.fila}>
                <TextInput
                    placeholder='Ingresa tu peso'
                    onChangeText={(texto) => setAltura(+texto)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Ingresa tu altura'
                    onChangeText={(texto)=> setPeso(parseFloat(texto))}
                    style={styles.input}
                />
            </View>

            <View style={styles.linea} />

            <Button title='Calcular' onPress={()=> calcular()} />

            {peso / (altura * altura)< 18.49
                ? <Text>Peso Insuficiente</Text>
                :<Text> Peso aceptable</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    fila: {
        flexDirection: 'row',
        marginVertical: 10
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    },
    linea: {
        backgroundColor: 'black',
        marginVertical: 10,
        width: "50%",
        height: 1
    },
    input: {

    }
});


