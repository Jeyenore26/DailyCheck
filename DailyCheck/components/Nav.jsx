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
    backgroundColor: "#00D658",
    paddingTop: "10%",
    borderWidth: 0.5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  icon: {
    fontSize: 21,
    color: "black",
    fontWeight: "bold",
    marginTop: "4.5%",
    marginRight: "10%",
  },
});
