import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ConfirmarNumero from "../Pantallas/Cuenta/ConfirmarNumero";
import EnviarConfirmacion from "../Pantallas/Cuenta/EnviarConfirmacion";

const Stack = createStackNavigator();

export default function CuentaStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={EnviarConfirmacion}
          name="enviar-confirmacion"
          options={{
            title: "Confirma tu Número de Teléfono",
            headerStyle: { backgroundColor: "#128c7e" },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          component={ConfirmarNumero}
          name="confirmar-movil"
          options={{
            title: "Confirma tu Número",
            headerStyle: { backgroundColor: "#128c7e" },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
