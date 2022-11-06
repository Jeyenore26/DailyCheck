import React from 'react'
import { View, Text, StyleSheet, Button, Alert, Pressable, Image, TouchableOpacity } from 'react-native'


export default function Budy() {
    return (
        <View style={styles.container}>
            <View>
                <Pressable style={styles.innerButt} onPress={() => Alert.alert('yosef is sexy')}>
                    <View style={styles.LoveMaker}>
                        <TouchableOpacity style={styles.bitBybit}>
                            <Image style={styles.picture} source={require('../assets/plastic.png')} />
                            <Text>Plastic</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bitBybit}>
                            <Image style={styles.picture} source={require('../assets/solidwaste.png')} />
                            <Text>Solid Waste</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.LoveMaker}>
                        <TouchableOpacity style={styles.bitBybit}>
                            <Image style={styles.picture} source={require('../assets/E-waste.png')} />
                            <Text>E-Waste</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bitBybit}>
                            <Image style={styles.picture} source={require('../assets/Scrape.png')} />
                            <Text>Scrape</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.LoveMaker}>
                        <TouchableOpacity style={styles.bitBybit}>
                            <Image style={styles.picture} source={require('../assets/Paper.png')} />
                            <Text>Paper</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bitBybit} >
                            <Image style={styles.picture} source={require('../assets/other.png')} />
                            <Text>Other</Text>
                        </TouchableOpacity>
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

