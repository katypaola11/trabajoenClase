import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Switch, TextInput } from 'react-native-gesture-handler'
import { Divider, RadioButton } from 'react-native-paper'

export default function EncuestaScreen() {
  const [contacto, setcontacto] = useState("");
  const [recomendacion, setrecomendacion] = useState("");
  const [valoracion, setvaloracion] = useState("");
  const [visible, setvisible] = useState(false);

  const enviarEncuesta = () => {
    Alert.alert("Encuesta Enviada", "Gracias por tu participacion!");
    console.log({
      contacto,
      recomendacion,
      valoracion,
      permitirContacto: visible
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Encuesta de Satisfacción</Text>

      <Text style={styles.label}>Contacto:</Text>
      <TextInput
        placeholder='Ingresa tu Contacto'
        keyboardType='numeric'
        style={styles.input}
        value={contacto}
        onChangeText={(text) => setcontacto(text)}
      />

      <Text style={styles.label}>¿Recomendarías el producto?</Text>
      <RadioButton.Group
        onValueChange={(resp) => setrecomendacion(resp)}
        value={recomendacion}
      >
        <RadioButton.Item label='Sí' value='si' />
        <RadioButton.Item label='No' value='no' />
      </RadioButton.Group>

      <Text style={styles.label}>Valoración del Producto:</Text>
      <TextInput
        placeholder='Ingresa tu razón de valoración'
        onChangeText={(text) => setvaloracion(text)}
        value={valoracion}
        style={styles.input}
      />

      <Text style={styles.label}>¿Permitir contacto para seguimiento?</Text>
      <Switch
        value={visible}
        onValueChange={() => setvisible(!visible)}
        style={styles.switch}
      />

      <View style={styles.buttonContainer}>
        <Button
          title='Enviar Encuesta'
          onPress={enviarEncuesta}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1
  },
  titulo: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center'
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 15
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    borderRadius: 5,
    marginBottom: 10
  },
  switch: {
    marginVertical: 10
  },
  buttonContainer: {
    marginTop: 20
  }
});