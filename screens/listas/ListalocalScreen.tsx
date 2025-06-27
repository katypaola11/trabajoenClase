import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import datos from "../../assets/data/futurama.json"
import Tarjeta from '../../components/Tarjeta'

export default function ListalocalScreen() {


    
    return (
        <View>
            <Text style={styles.txt}>Lista Local</Text>
            <FlatList
                data={datos}
                renderItem={({ item }) =>
                    <Tarjeta informacion={item}/>
               
                }
            />


        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 20,
    },
    img:{
        width:40,
        height:40
    }
})