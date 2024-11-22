import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import { registerUser } from '../api.js';

const RegisterScreen = ({ navigation }) => {
  const [dni, setDni] = useState('');
  const [direccion, setDireccion] = useState('');
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await registerUser({
        dni, email, nombre, apellido, user_password: password
      });
      Alert.alert('Registro exitoso', response);
      navigation.navigate('Catalogo'); 
    } catch (error) {
      Alert.alert('Error en el registro', error.response.data);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="DNI"
        value={dni}
        onChangeText={setDni}
        style={styles.input}
      />
      <TextInput
        placeholder="Direccion"
        value={direccion}
        onChangeText={setDireccion}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
      />
      <TextInput
        placeholder="Apellido"
        value={apellido}
        onChangeText={setApellido}
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FAFAFA', 
  },
  input: {
    height: 60, // Más alto
    borderColor: '#CCCCCC', 
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 10, 
    backgroundColor: '#FFFFFF', 
  },
  button: {
    backgroundColor: '#228B22', 
    padding: 15,
    borderRadius: 10, 
    alignItems: 'center',
    margin: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {
    color: '#1E90FF', 
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333', 
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default RegisterScreen;