import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  Pressable,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  Linking,
} from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.lovemaker}>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://resala.org/friends-of-the-environment/")
          }
        >
          <Image
            source={require("../assets/resala.png")}
            style={styles.resala}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.footer}>Donate for</Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://uniteforchange.com/en/fund/protect-the-environment-fund/"
            )
          }
        >
          <Image
            source={require("../assets/pte.jpg")}
            style={styles.pte}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "white",
    padding: "5%",
  },
  footer: {
    fontSize: 20,
    margin: "2%",
    marginRight: "10%",
  },
  lovemaker: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  resala: {
    width: 80,
    height: 40,
    marginTop: "5%",
    marginLeft: "2%",
    borderWidth: 1,
    borderRadius: 20,
  },
  pte: {
    width: 40,
    height: 40,
    marginTop: "10%",
    marginRight: "2%",
    borderWidth: 1,
    borderRadius: 20,
  },
});
