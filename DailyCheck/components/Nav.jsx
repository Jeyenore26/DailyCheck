import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Nav() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Logo.png")}
        style={{ width: 50, height: 50, marginBottom: '1.5%', justifyContent: 'center' }}
      ></Image>
      <Text style={styles.icon}>WasteWare</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
    paddingTop: "15%",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  icon: {
    fontSize: 21,
    color: "black",
    justifyContent: "flex-end",
    fontWeight: "bold",
    marginTop: "1.5%",
    marginRight: "10%",
  },
});
