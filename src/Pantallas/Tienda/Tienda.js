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
import { Icon, Avatar, Image, Rating, Badge } from "react-native-elements";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { size } from "lodash";
import { ListarProductos, ObtenerUsuario } from "../../Utils/Acciones";

export default function Tienda() {
  const navigation = useNavigation();
  const [productList, setproductList] = useState([]);
  const [search, setsearch] = useState("");
  const [setmensajes, setsetmensajes] = useState("Cargando...");
  const [notificaciones, setnotificaciones] = useState(0);
  const { photoURL } = ObtenerUsuario();

  useEffect(() => {
    (async () => {
      console.log(await ListarProductos());
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
        </KeyboardAwareScrollView>
      </View>
      <Text>Tienda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: "20%",
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
});
