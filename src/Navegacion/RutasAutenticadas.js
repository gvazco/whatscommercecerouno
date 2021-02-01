import React, { useState, useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import ShopButton from "../Componentes/ShopButton";
import CustomDrawerContent from "../Componentes/CustomDrawerContent";

import TiendaStack from "./TiendaStack";
import PerfilStack from "./PerfilStack";
import MiTienda from "./MiTiendaStack";

import { ObtenerUsuario } from "../Utils/Acciones";
import * as data from "../Utils/users.json";

// const usersjson = data;
// console.log(usersjson);

//aquí importaremos algunos componentes más tarde.

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabBar = () => {
  const [user, setuser] = useState("");

  useEffect(() => {
    (async () => {
      setuser(await ObtenerUsuario());
    })();
  }, []);

  useCallback(() => {
    (async () => {
      setuser(await ObtenerUsuario());
    })();
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="tienda"
      tabBarOptions={{
        inactiveTintColor: "#fff",
        activeTintColor: "#fff",
        style: {
          borderTUpLeftRadius: 30,
          borderTopRightRadius: 30,
          alignItems: "center",
          backgroundColor: "#128c7e",
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => mostrarIcono(route, color),
      })}
    >
      <Tab.Screen
        component={TiendaStack}
        name="tienda"
        optiones={{ title: "Tienda" }}
      />

      {user.email === "gustavovazco@gmail.com" ? (
        <Tab.Screen
          component={MiTienda}
          name="mitienda"
          options={{ title: "", tabBarIcon: () => <ShopButton /> }}
        />
      ) : (
        console.log("not")
      )}
      <Tab.Screen
        component={PerfilStack}
        name="cuenta"
        options={{ title: "Cuenta" }}
      />
    </Tab.Navigator>
  );
};

function mostrarIcono(route, color) {
  let iconName = "";

  switch (route.name) {
    case "tienda":
      iconName = "cart-outline";
      break;

    case "cuenta":
      iconName = "account-circle-outline";
      break;

    case "mitienda":
      iconName = "cart-outline";
      break;
  }

  return (
    <Icon type="material-community" name={iconName} size={24} color={color} />
  );
}

export default function RutasAutenticadas() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Tienda"
          component={TabBar}
          options={{
            title: "Tienda",
            drawerIcon: () => {
              <Icon type="material-community" name="store" size={24} />;
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
