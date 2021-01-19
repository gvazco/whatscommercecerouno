import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { SearchBar, searchbar } from "react-native-elements";

export default function Busqueda() {
  return (
    <SearchBar
      placeholder="¿Qué estas buscando?"
      containerStyle={{
        backgroundColor: "transparent",
        borderTopColor: "transparent",
        borderBottomColor: "transparent",
      }}
      inputContainerStyle={{ backgroundColor: "#fff", alignItems: "center" }}
      inputStyle={{ fontFamily: "Roboto", fontSize: 20 }}
    />
  );
}

const styles = StyleSheet.create({});
