import React from "react";
import { View, Alert, StyleSheet } from "react-native";
import { loginUser } from "../api";
import LoginForm from "../components/LoginForm.js";

const LoginScreen = ({ navigation }) => {
  const handleLogin = async (credentials) => {
    try {
      const response = await loginUser(credentials);
      Alert.alert("Inicio de sesión exitoso", `Token: ${response.token}`);
      navigation.navigate("Catalogo");
    } catch (error) {
      Alert.alert("Error al iniciar sesión", error);
    }
  };

  return (
    <View style={styles.container}>
      <LoginForm onLogin={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});

export default LoginScreen;
