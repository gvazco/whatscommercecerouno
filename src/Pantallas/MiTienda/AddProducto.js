import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import {
  Input,
  Image,
  Button,
  Icon,
  Avatar,
  AirbnbRating,
} from "react-native-elements";
import { map, size, filter, isEmpty } from "lodash";
import { useNavigation } from "@react-navigation/native";
import Loading from "../../Componentes/Loading";

export default function AddProducto() {
  const [titulo, settitulo] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const [precio, setprecio] = useState("");

  return (
    <View>
      <Text>Añadir Producto</Text>
    </View>
  );
}
