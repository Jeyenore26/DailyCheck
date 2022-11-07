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
        <TouchableOpacity onPress={() => Linking.openURL("http://google.com")}>
          <Text style={styles.footer}>Donate</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("http://google.com")}>
          <Text style={styles.footer}>Donate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  footer: {
    margin: "2%",
    fontSize: 18,
  },
  lovemaker: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
