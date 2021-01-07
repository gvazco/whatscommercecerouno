import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MiTienda from "../Pantallas/MiTienda/MiTienda";
import AddProducto from "../Pantallas/MiTienda/AddProducto";
import EditarProducto from "../Pantallas/MiTienda/EditarProducto";

const Stack = createStackNavigator();

export default function MiTiendaStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#128c7E" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        component={MiTienda}
        name="mitienda"
        options={{ title: "Mi Tienda" }}
      />
      <Stack.Screen
        component={AddProducto}
        name="add-producto"
        options={{
          title: "Agregar Nuevo Producto",
          headerStyle: { backgroundColor: "#128C7E" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        component={EditarProducto}
        name="editar-producto"
        options={{ title: "Editar Producto" }}
      />
    </Stack.Navigator>
  );
}
