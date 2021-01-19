import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  Icon,
  Avatar,
  Image,
  Rating,
  Badge,
  SearchBar,
} from "react-native-elements";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { size } from "lodash";
import { ListarProductos, ObtenerUsuario } from "../../Utils/Acciones";
import Busqueda from "../../Componentes/Busqueda";

export default function Tienda() {
  const navigation = useNavigation();
  const [productList, setproductList] = useState([]);
  const [search, setsearch] = useState("");
  const [mensajes, setmensajes] = useState("Cargando...");
  const [notificaciones, setnotificaciones] = useState(0);
  const { photoURL } = ObtenerUsuario();

  useEffect(() => {
    (async () => {
      setproductList(await ListarProductos());
      console.log("**************Productos***************");
      console.log(productList);
    })();
  }, []);

  return (
    <View style={styles.frame}>
      <StatusBar backgroundColor="#128c7e" />
      <View style={styles.header}>
        <KeyboardAwareScrollView>
          <View style={styles.menu}>
            <Avatar
              rounded
              size="medium"
              source={
                photoURL
                  ? { uri: photoURL }
                  : require("../../../assets/avatar.jpg")
              }
            />

            <Image
              source={require("../../../assets/logo.png")}
              style={styles.logo}
            />

            <View>
              <Icon
                type="material-community"
                name="bell-outline"
                color="#fff"
                size={30}
              />
              <Badge
                status="error"
                containerStyle={{ position: "absolute", top: -4, right: -4 }}
                value={2}
              />
            </View>
          </View>
          <Busqueda />
        </KeyboardAwareScrollView>
      </View>

      {size(productList) > 0 ? (
        <FlatList
          data={productList}
          renderItem={(producto) => (
            <Producto producto={producto} navigation={navigation} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text>{mensajes}</Text>
      )}
    </View>
  );
}

function Producto(props) {
  const { producto, navigation } = props;

  const {
    titulo,
    descripcion,
    precio,
    imagenes,
    rating,
    id,
    usuario,
  } = producto.item;

  const { displayName, photoURL } = usuario;

  console.log(producto);
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        navigation.navigate("detalle", { id, titulo });
      }}
    >
      <Image source={{ uri: imagenes[0] }} style={styles.imgproducto} />
      <View style={styles.infobox}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text>{descripcion.substring(0, 50)}...</Text>
        <Text style={styles.vendidopor}>Vendido por:</Text>
        <View style={styles.avatarbots}>
          <Avatar
            source={
              photoURL
                ? { uri: photoURL }
                : require("../../../assets/avatar.jpg")
            }
            rounded
            size="large"
            style={styles.avatar}
          />
          <Text style={styles.displayname}> {displayName} </Text>
        </View>
        <Rating
          imageSize={15}
          startingValue={rating}
          style={{ paddingLeft: 40 }}
          readonly
        />
        <Text style={styles.precio}>{precio.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: "22%",
    width: "100%",
    backgroundColor: "#128c7e",
  },
  menu: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  logo: { width: 50, height: 50 },
  card: {
    flex: 1,
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderBottomColor: "#128c7e",
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  imgproducto: { width: 150, height: 200, borderRadius: 10 },
  infobox: { paddingLeft: 10, alignItems: "center", flex: 1 },
  titulo: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    color: "#075e54",
  },
  vendidopor: {
    fontSize: 16,
    marginTop: 5,
    color: "#075e54",
    fontWeight: "700",
  },
  avatarbots: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  avatar: {
    width: 30,
    height: 30,
  },
  displayname: {},
  precio: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "#128c7e",
    alignSelf: "center",
  },
});
