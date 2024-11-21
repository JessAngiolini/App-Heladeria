import { View, TextInput, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { recoverPassword } from '../api'; 

const RecoverPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [loading, setLoading] = useState(false); // Para manejar el estado de carga

  const onSubmit = async () => {
    if (!validateData()) {
      return;
    }
    setLoading(true);
    try {
      const response = await recoverPassword(email);
      console.log('Respuesta del backend:', response);
      setLoading(false);
      Alert.alert('Éxito', 'Revisa tu correo electrónico para continuar.');
    } catch (error) {
      console.error('Error en la recuperación de contraseña:', error);
      setLoading(false);
      Alert.alert('Error', 'No se pudo recuperar la contraseña.');
    }
  };

  const validateData = () => {
    setErrorEmail('');
    let valid = true;

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setErrorEmail('Ingresa un email válido.');
      valid = false;
    }
    return valid;
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.inputForm}
        placeholder="Ingresa tu email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        returnKeyType="send"
      />
      {errorEmail ? <Text style={styles.errorMessage}>{errorEmail}</Text> : null}
      <TouchableOpacity
        style={styles.buttonForm}
        onPress={onSubmit}
      >
        <Text style={styles.buttonText}>Recuperar contraseña</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FAFAFA', 
  },
  inputForm: {
    height: 50, 
    width: '100%', 
    borderColor: '#CCCCCC', 
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 10, 
    backgroundColor: '#FFFFFF',
    fontSize: 16,
  },
  buttonForm: {
    backgroundColor: '#228B22',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10, 
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorMessage: {
    color: '#FF0000', 
    marginBottom: 20,
    fontSize: 14,
  },
});

export default RecoverPassword;
