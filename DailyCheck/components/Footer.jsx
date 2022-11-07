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
} from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.footer}>hisiadjoaasdsdj</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  footer: {
    backgroundColor: "#80ed99",
    color: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
