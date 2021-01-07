import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import ShopButton from "../Componentes/ShopButton";

import TiendaStack from "./TiendaStack";
import PerfilStack from "./PerfilStack";
import MiTienda from "./MiTiendaStack";

//aquí importaremos algunos componentes más adelante

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="tienda"
      tabBarOptions={{
        inactiveTintColor: "#fff",
        activeTintColor: "#fff",
        style: {
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          alignItems: "center",
          backgroundColor: "#128c7e",
          paddingBottom: 5,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => mostrarIcono(route, color),
      })}
    >
      <Tab.Screen
        component={TiendaStack}
        name="tienda"
        options={{ title: "Tienda" }}
      />
      <Tab.Screen
        component={MiTienda}
        name="mitienda"
        options={{ title: "", tabBarIcon: () => <ShopButton /> }}
      />
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
      <TabBar />
    </NavigationContainer>
  );
}
