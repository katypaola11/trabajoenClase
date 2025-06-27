import { Alert, Image, StyleSheet, Text, TouchableOpacity, View, Modal, Button } from 'react-native'
import React, { useState } from 'react'


export default function Listado(props:any) {

    const [visible, setvisible] = useState(false)


  
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={()=> setvisible(!visible)}>
        <Image source={{uri:props.info.image}} style={styles.img}/>
        <Text style={styles.text}>{props.info.name}</Text>
     </TouchableOpacity>
     <Modal
     visible={visible}
     >
        <View style={styles.modal} />
        <View style={styles.modal} >
            <Text style={styles.text}>{props.info.id}</Text>
            <Text style={styles.text}>{props.info.description}</Text>
            <Text style={styles.text}> {props.info.atributos} </Text>
            <Image source={{uri:props.info.image}} style={styles.img}/>
        </View>
        <Button title="Cerrar"  onPress={()=> setvisible(!visible)}/>

     </Modal>
     </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f9db90',
        alignItems:'center'

    },
    modal:{
        backgroundColor:"#fc8f4f",
        flex:1,
        alignItems:"center"
        

    },
    img:{
        height:80,
        width:80,
        resizeMode:'contain'
    },
    text:{  
        fontSize:20,     
        },
})