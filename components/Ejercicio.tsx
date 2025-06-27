import { Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Ejercicio(props: any) {

    const [visible, setvisible] = useState(false)

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setvisible(!visible)}>
                <Text style={styles.text}>{props.info.titulo}</Text>
            </TouchableOpacity>
            <Modal
                visible={visible}
            >
                <View style={styles.modal}>
                    <Text style={styles.text}>{props.info.id}</Text>
                    <Text style={styles.text}>{props.info.titulo}</Text>
                    <Text style={styles.text}>{props.info.genero}</Text>
                    <Image source={{ uri: props.info.imagen }} style={styles.img} />
                </View>

                <Button title="Cerrar" onPress={() => setvisible(!visible)} />

            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9db90',
        alignItems: 'center'

    },
    modal: {
        backgroundColor: "#fc8f4f",
        flex: 1,
        alignItems: "center"


    },
    img: {
        height: 80,
        width: 80,
        resizeMode: 'contain'
    },
    text: {
        fontSize: 20,
    },
})