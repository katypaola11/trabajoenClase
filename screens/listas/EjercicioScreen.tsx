import { FlatList, SectionList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ejercicio from '../../components/Ejercicio'

export default function EjercicioScreen() {

  const [datos, setdatos] = useState([])

  async function leer() {
    const resp = await fetch('https://jritsqmet.github.io/web-api/peliculas3.json');
    const json = await resp.json();
    setdatos(json.peliculas);
  }

  useEffect(() => {
    leer()

    console.log(datos);

  }, [])


  return (
     <View>
    <Text>Ejercicio</Text>
    
    <FlatList
                data={datos}
                renderItem={({ item }) =>
                    <Ejercicio info={item}/>
                }
            />

  </View>
  )
}

const styles = StyleSheet.create({})