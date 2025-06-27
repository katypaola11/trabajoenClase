import { SectionList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Listado from '../../components/Listado';

export default function ListaExternaScreen() {

    const [datos, setdatos] = useState([])

    async function leer() {
        const resp = await fetch('https://jritsqmet.github.io/web-api/assets/data/api2/sections/crash-s.json');
        const json = await resp.json();
        setdatos(json);
    }

    useEffect(() => {
        leer()
    
        //console.log(datos);
     
    }, [])
    
return (
    <View>
        <Text style={styles.txt}>Lista Externa</Text>
        <SectionList
            sections={datos}
            renderItem={({item}) => 
            <Listado info={item} />
        }
        renderSectionHeader={({section:{title}}: any)=>
        <Text style={styles.txt}>{title}</Text>
      }
        />
    </View>
)


}

const styles = StyleSheet.create({
    txt:{
        fontSize: 28,
        backgroundColor:'#f9db90'
    }
})