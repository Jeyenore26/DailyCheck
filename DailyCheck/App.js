import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Nav from "./components/Nav";
import Budy from "./components/Budy";
import Footer from "./components/Footer";

export default function App() {
  return (
    <View style={styles.body}>
      <Nav />
      <Budy />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#80ed99",
  },
});
