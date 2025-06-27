import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Tarjeta(props: any) {
    //console.log(props.informacion.images.main);

    function mostrarMas(data: any) {
        Alert.alert("Informacion", "Especie  " + data.species + "  " + data.occupation)


    }
    return (
        <TouchableOpacity onPress={() => mostrarMas(props.informacion)} style={styles.btn}>
            <Image source={{ uri: props.informacion.images.main }} style={styles.img} />
            <Text style={styles.txt}>{props.informacion.name.first}  {props.informacion.name.last}
            </Text>
            <Text style={styles.txt}>{props.informacion.age}  </Text>
            <Text style={styles.txt}>{props.informacion.homePlanet}  </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#A3A697",
        margin: 5,
        borderRadius: 10

    },
    img: {
        height: 50,
        width: 50,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    txt: {
        fontSize: 20,
        textAlign: 'center'
    }
})