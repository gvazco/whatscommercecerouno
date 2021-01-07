import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function MiTienda() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>Mi Tienda</Text>
      <Icon
        name="plus"
        type="material-community"
        color="#128c7e"
        containerStyle={styles.btncontainer}
        onPress={() => {
          navigation.navigate("add-producto");
        }}
        reverse
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btncontainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
  },
});
