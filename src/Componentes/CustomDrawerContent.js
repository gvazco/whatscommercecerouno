import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Icon } from "react-native-elements";
import { ObtenerUsuario, cerrarsesion } from "../Utils/Acciones";

export default function CustomDrawerContent(props) {
  const { displayName, photoURL, email } = ObtenerUsuario();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar
                rounded
                size="medium"
                source={
                  photoURL
                    ? { uri: photoURL }
                    : require("../../assets/avatar.jpg")
                }
                onPress={() => props.navigation.toggleDrawer()}
              />

              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Text style={styles.title}>{displayName}</Text>
                <Text style={styles.caption}>{email} </Text>
              </View>
            </View>
          </View>

          <View style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="cart-outline"
                  color={color}
                  size={size}
                  type="material-community"
                />
              )}
              label="Tienda"
              onPress={() => {
                props.navigation.navigate("tienda");
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="store"
                  color={color}
                  size={size}
                  type="material-community"
                />
              )}
              label="Mi Tienda"
              onPress={() => {
                props.navigation.navigate("mitienda");
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="account-outline"
                  color={color}
                  size={size}
                  type="material-community"
                />
              )}
              label="Cuenta"
              onPress={() => {
                props.navigation.navigate("cuenta");
              }}
            />
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="exit-to-app"
              color={color}
              size={size}
              type="material-community"
            />
          )}
          label="Cerrar Sesión"
          onPress={() => {
            cerrarsesion();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
