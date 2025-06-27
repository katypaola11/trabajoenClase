import { Button, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function DireccionScreen() {
  const [calle, setcalle] = useState("")
  const [numeroExteriror, setnumeroExterior] = useState("")
  const [cuidad, setcuidad] = useState("")
  const [referencias, setreferencias] = useState("")
  const [datos, setdatos] = useState({ "calle": "", "numeroExterior": "", "cuidad": "", "referencias": "" })

  function guardar() {
    if (!calle || !numeroExteriror || !cuidad) {
      console.error("Campos obligatorios")
      return
    } else {
      console.error("Datos Guardados")
    }

    setdatos({
      "calle": calle,
      "numeroExterior": numeroExteriror,
      "cuidad": cuidad,
      "referencias": referencias
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dirección</Text>

      <Text style={styles.label}>Calle</Text>
      <TextInput
        style={styles.input}
        placeholder='Ingrese calle'
        value={calle}
        onChangeText={setcalle}
      />

      <Text style={styles.label}>Número Exterior</Text>
      <TextInput
        style={styles.input}
        placeholder='Ingrese Número Exterior'
        keyboardType='numeric'
        value={numeroExteriror}
        onChangeText={setnumeroExterior}
      />

      <Text style={styles.label}>Ciudad</Text>
      <TextInput
        style={styles.input}
        placeholder='Ingrese Ciudad'
        value={cuidad}
        onChangeText={setcuidad}
      />

      <Text style={styles.label}>Referencias</Text>
      <TextInput
        style={styles.input}
        placeholder='Ingrese Referencias'
        value={referencias}
        onChangeText={setreferencias}
      />

      <View style={styles.button}>
        <Button title='Guardar' onPress={guardar} color="#3b82f6" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    color: '#111',
  },
  label: {
    marginTop: 12,
    marginBottom: 6,
    fontWeight: '500',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  button: {
    marginTop: 20,
    borderRadius: 6,
    overflow: 'hidden',
  },
})
