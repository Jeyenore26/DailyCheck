import React from 'react'
import { View, Text, StyleSheet, Button, Alert, Pressable, Image } from 'react-native'


export default function Budy() {
  return (
    <View style={styles.container}>
        <View>
            <Pressable style={styles.innerButt} onPress={() => Alert.alert('yosef is sexy')}>
                <View style={styles.LoveMaker}>
                    <View style={styles.bitBybit}>
                        <Image style={styles.picture} source={require('./1.png')} />
                        <Text>Plastic</Text>
                    </View>
                    <View style={styles.bitBybit}>
                        <Image style={styles.picture} source={require('./1.png')} />
                        <Text>Solid Waste</Text>
                    </View>
                </View>
                <View style={styles.LoveMaker}>
                    <View style={styles.bitBybit}>
                        <Image style={styles.picture} source={require('./1.png')} />
                        <Text>E-Waste</Text>
                    </View>
                    <View style={styles.bitBybit}>
                        <Image style={styles.picture} source={require('./1.png')} />
                        <Text>Scrape</Text>
                    </View>
                </View>
                <View style={styles.LoveMaker}>
                    <View style={styles.bitBybit}>
                        <Image style={styles.picture} source={require('./1.png')} />
                        <Text>Paper</Text>
                    </View>
                    <View style={styles.bitBybit} >
                        <Image style={styles.picture} source={require('./1.png')} />
                        <Text>Other</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        padding: 60,
        marginTop: 80,

    },

    innerButt: { 
        borderWidth: 2,
        borderRadius: 5,
        
    },

    picture: {
        width: 70,
        height: 70,
        marginLeft: 48,
        marginRight: 48,
    },

    bitBybit: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30,
 

    },

    LoveMaker: {
        flexDirection: 'row',
        justifyContent: 'center',
    }

})

