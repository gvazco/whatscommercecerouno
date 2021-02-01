import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MiTienda from "../Pantallas/MiTienda/MiTienda";
import EditarProducto from "../Pantallas/MiTienda/EditarProducto";
import AddProducto from "../Pantallas/MiTienda/AddProducto";

const Stack = createStackNavigator();

export default function MiTiendaStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#128c7e" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        component={MiTienda}
        name="mitienda"
        options={{
          title: "Mi Tienda",
        }}
      />
      <Stack.Screen
        component={AddProducto}
        name="add-producto"
        options={{
          title: "Agregar Nuevo Producto",
          headerStyle: { backgroundColor: "#128c7e" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        component={EditarProducto}
        name="edit-producto"
        options={{
          title: "Editar Producto",
        }}
      />
    </Stack.Navigator>
  );
}
