import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default function Nav() {
    return (
        <View style={styles.container}>
            <Text style={styles.icon}>icon1</Text>
            <Text style={styles.icon}>icon2</Text>
            <Text style={styles.icon}>icon3</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: 'black',
      padding: 35,
      borderWidth: 0.5,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,

        
    },
    icon: {
        fontSize: 20,
        color: 'white',
        marginTop: 10,
    }

  });
