import { StyleSheet, Text, View, Button, TextInput, Switch } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-paper'

export default function RegistroScreen() {
  const [nombre, setnombre] = useState("")
  const [apellido, setapellido] = useState("")
  const [email, setemail] = useState("")
  const [telefono, settelefono] = useState("")
  const [contra, setcontra] = useState("")
  const [confirmar, setconfirmar] = useState("")
  const [datos, setdatos] = useState({ "nombre": "", "apellido": "", "email": "", "telefono": "", "contra": "", "confirmar": "" })
  const [visible, setvisible] = useState(false)

  function Guardar() {
    if (contra == confirmar) {
      console.error('Contraseña Validada')
    } else {
      console.error('Contraseña Invalida')
      return;
    }

    setdatos({
      "nombre": nombre,
      "apellido": apellido,
      "email": email,
      "telefono": telefono,
      "contra": contra,
      "confirmar": confirmar
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro Usuario</Text>

      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder='Ingrese Nombre'
        value={nombre}
        onChangeText={setnombre}
      />

      <Text style={styles.label}>Apellido</Text>
      <TextInput
        style={styles.input}
        placeholder='Ingrese Apellido'
        value={apellido}
        onChangeText={setapellido}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder='Ingrese Email'
        keyboardType='email-address'
        value={email}
        onChangeText={setemail}
        autoCapitalize='none'
      />

      <Text style={styles.label}>Telefono</Text>
      <TextInput
        style={styles.input}
        placeholder='Ingrese Telefono'
        keyboardType='phone-pad'
        value={telefono}
        onChangeText={settelefono}
      />

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder='Ingrese Contraseña'
        secureTextEntry
        value={contra}
        onChangeText={setcontra}
      />

      <Text style={styles.label}>Confirmar Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder='Confirmar Contraseña'
        secureTextEntry
        value={confirmar}
        onChangeText={setconfirmar}
      />

      <View style={styles.button}>
        <Button title='Guardar' onPress={Guardar} color="#3b82f6" />
      </View>

      <Divider style={styles.divider} />

      <View style={styles.switchContainer}>
        <Text>Aceptar términos y suscripción a newsletter</Text>
        <Switch value={visible} onValueChange={() => setvisible(!visible)} />
      </View>

      <Divider style={styles.divider} />

      {visible ? (
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Nombre: {datos.nombre}</Text>
          <Text style={styles.infoText}>Email: {datos.email}</Text>
        </View>
      ) : (
        <Text style={styles.alert}>Alerta spoiler</Text>
      )}

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
  divider: {
    marginVertical: 20,
    height: 1,
    backgroundColor: '#ddd',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoContainer: {
    marginTop: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#555',
  },
  alert: {
    fontStyle: 'italic',
    color: '#999',
    marginTop: 10,
  }
})
