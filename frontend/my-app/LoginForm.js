import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginForm = ({ onLogin }) => {
  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const handleSubmit = () => {
    onLogin({ dni, user_password: password });
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
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.linkPw}
        onPress={() => navigation.navigate("RecoverPassword")}
      >
        <Text style={styles.linkTextPw}>
          ¿Olvidaste tu contraseña?
          <Text style={styles.linkBold}>Recupérala</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.linkText}>¿No tienes una cuenta? <Text style={styles.linkBold}>Regístrate</Text> </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 75,
    borderColor: "#CCCCCC",
    borderWidth: 1.5,
    marginBottom: 1,
    padding: 10,
    borderRadius: 15,
  },
  button: {
    backgroundColor: "#FFA07A",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    margin: 5,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    marginTop: 20,
    alignItems: "center",
  },
  linkText: {
    color: "#FFA07A",
    textDecorationLine: "underline",
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF69B4",
    textAlign: "center",
    marginBottom: 20,
  },
  linkBold: {
    fontWeight: "bold",
  },
  linkPw: {
    marginBottom: 20,
    alignItems: "center", 
  },
  linkTextPw: {
    color: "#FFA07A",
    fontSize: 14,
  }
});

export default LoginForm;
