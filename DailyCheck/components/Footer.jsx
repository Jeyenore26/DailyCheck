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
        <Text style={styles.footer}>I wanna jump off a cliff.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingBottom: "20%",
  },
  footer: {
    margin: "2%",
    fontSize: 18,
  },
});
