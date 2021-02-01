import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Tienda from "../Pantallas/Tienda/Tienda";
import Contacto from "../Pantallas/Tienda/Contacto";
import MensajesLista from "../Pantallas/Tienda/MensajesLista";
import Detalle from "../Pantallas/Tienda/Detalle";

const Stack = createStackNavigator();

export default function TiendaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Tienda}
        name="tienda"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        component={Detalle}
        name="detalle"
        options={{
          headerTransparent: true,
          headerTintColor: "#128c7e",
          title: "",
        }}
      />
      <Stack.Screen
        component={MensajesLista}
        name="mensajes-lista"
        options={{
          title: "Mensajes",
          headerStyle: { backgroundColor: "#128c7e" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        component={Contacto}
        name="contacto"
        options={{
          title: "Contacto",
          headerStyle: { backgroundColor: "#128c7e" },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
}
