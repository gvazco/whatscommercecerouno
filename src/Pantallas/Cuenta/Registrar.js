import React, { useRef } from "react";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import Toast from "react-native-easy-toast";

import RegisterForm from "../../Componentes/RegisterForm";

export default function Registrar() {
  const toastRef = useRef();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#128c7e" />
      <Image
        source={require("../../../assets/logo.png")}
        style={styles.imgLogo}
      />
      <Text style={styles.textoBanner}>CREAR CUENTA</Text>
      <RegisterForm toastRef={toastRef} />
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#128c7e",
  },
  imgLogo: { width: 140, height: 140, marginTop: 50, alignSelf: "center" },
  textoBanner: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 30,
    color: "#fff",
    alignSelf: "center",
  },
});
