import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Nav() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Logo.png")}
        style={{ width: 70, height: 70 }}
      ></Image>
      <Text style={styles.icon}>WasteWare</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#80ed99",
    paddingTop: "10%",
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  icon: {
    fontSize: 21,
    color: "black",
    fontWeight: "bold",
    marginTop: "4.5%",
    marginRight: "10%",
  },
});
