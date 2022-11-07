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
  const [visible1, setvisible1] = useState(false);
  return (
    <View style={styles.container}>
      <View>
        <Modal transparent visible={visible1} animationType="slide">
          <View style={styles.modalbg}>
            <View style={styles.modalcontainer}>
              <TouchableOpacity
                onPress={() => {
                  setvisible1(false);
                }}
                style={styles.close}
              >
                <Image
                  source={require("../assets/close.png")}
                  style={styles.closebtn}
                ></Image>
              </TouchableOpacity>
              <ScrollView>
                <View>
                  <Text>donation is goog</Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
      <TouchableOpacity
        style={styles.bitBybit}
        onPress={() => setvisible1(true)}
      >
        <Text style={styles.footer}>Donate</Text>
      </TouchableOpacity>
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
  modalbg: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalcontainer: {
    backgroundColor: "#09A8B3",
    width: "80%",
    height: "50%",
    margin: "4%",
    borderRadius: 10,
    elevation: 20,
  },
  closebtn: {
    width: 25,
    height: 25,
    marginBottom: "2%",
  },
  close: {
    margin: "2%",
    alignItems: "flex-end",
  },
});
