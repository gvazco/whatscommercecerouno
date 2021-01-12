import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacit,
  ScrollView,
} from "react-native";
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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { cargarImagenesxAspecto } from "../../Utils/Utils";

export default function AddProducto() {
  const [titulo, settitulo] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const [precio, setprecio] = useState(0.0);
  const [imagenes, setimagenes] = useState("");
  const [categoria, setcategoria] = useState("");
  const [rating, setrating] = useState(5);
  const [errores, seterrores] = useState("");
  const btnref = useRef();
  const navigation = useNavigation();

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View
        style={{
          borderBottomColor: "#25d366",
          borderBottomWidth: 2,
          width: 100,
          marginTop: 20,
          alignSelf: "center",
        }}
      />
      <Input
        placeholder="Titulo"
        onChengeText={(text) => settitulo(text)}
        inputStyle={styles.input}
        errorMessage={errores.titulo}
      />
      <Input
        placeholder="Descripción"
        onChengeText={(text) => setdescripcion(text)}
        inputStyle={styles.textarea}
        errorMessage={errores.descripcion}
        multiline={true}
      />
      <Input
        placeholder="Precio"
        onChengeText={(text) => setprecio(parseFloat(text))}
        inputStyle={styles.input}
        errorMessage={errores.precio}
        keyboardType="name-phone-pad"
      />
      <Text style={styles.txtlabel}>Calidad del Producto o Servicio</Text>
      <AirbnbRating
        count={5}
        reviews={["Baja", "Deficiente", "Normal", "Muy Bueno", "Excelente"]}
        defaultRating={5}
        size={35}
        onFinishRating={(value) => {
          setrating(value);
        }}
      />
      <Text style={styles.txtlabel}>Cargar Imágenes</Text>
      <SubirImagenes imagenes={imagenes} setimagenes={setimagenes} />
      <Text style={styles.txtlabel}>Asignar Categoría</Text>
      <Button
        title="Agregar Nuevo Producto"
        buttonStyle={styles.btnaddnew}
        ref={btnref}
      />
    </KeyboardAwareScrollView>
  );
}

function SubirImagenes(props) {
  const { imagenes, setimagenes } = props;
  const removerimagen = (imagen) => {
    Alert.alert(
      "Eliminar Imagen",
      "¿Estas seguro de que quieres eliminar la imagen?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          onPress: () => {
            setimagenes(filter(imagenes, (imagenURL) => imagenURL !== imagen));
          },
        },
      ]
    );
  };

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.viewimagenes}
    >
      {size(imagenes) < 5 && (
        <Icon
          type="material-community"
          name="plus"
          color="#7a7a7a"
          containerStyle={styles.containerIcon}
          onPress={async () => {
            const resultado = await cargarImagenesxAspecto([1, 1]);
            if (resultado.status) {
              setimagenes([...imagenes, resultado.imagen]);
            }
          }}
        />
      )}

      {map(imagenes, (imagen, index) => (
        <Avatar
          key={index}
          style={styles.miniatura}
          source={{ uri: imagen }}
          onPress={() => {
            removerimagen(imagen);
          }}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 50,
    margin: 5,
    padding: 5,
    elevation: 3,
  },
  input: {
    width: "90%",
    borderRadius: 10,
    borderColor: "#707070",
    marginTop: 20,
    paddingHorizontal: 20,
    height: 50,
  },
  textarea: { height: 150 },
  txtlabel: {
    fontSize: 20,
    fontFamily: "Roboto",
    textAlign: "center",
    fontWeight: "bold",
    color: "#075e54",
  },
  btnaddnew: {
    backgroundColor: "#128c7e",
    marginTop: 20,
    marginBottom: 40,
    marginHorizontal: 20,
  },
  viewimagenes: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 10,
  },
  containerIcon: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    height: 150,
    width: 100,
    backgroundColor: "#e3e3e3",
    padding: 10,
  },
  miniatura: { width: 100, height: 150, marginRight: 10 },
});
