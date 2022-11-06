import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Nav from './components/Nav'
import Budy from './components/Budy'

export default function App() {
  return (

    <View style={styles.body}>
      <ScrollView>
      <Nav />
      <Budy />
      <StatusBar style="auto" />
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
 body: { 
  backgroundColor: "#F8F9FB",

 }
})
