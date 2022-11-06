import React from 'react'
import { View, Text, StyleSheet, Button, Alert, Pressable, Image, TouchableOpacity } from 'react-native'


export default function Budy() {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <View style={styles.LoveMaker}>
                        <TouchableOpacity style={styles.bitBybit} onPress={() => Alert.alert('yosef is sexy')}>
                            <Image style={styles.picture} source={require('../assets/plastic.png')} />
                            <Text>Plastic</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bitBybit} onPress={() => Alert.alert('yosef is sexy')}>
                            <Image style={styles.picture} source={require('../assets/solidwaste.png')} />
                            <Text>Solid Waste</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.LoveMaker}>
                        <TouchableOpacity style={styles.bitBybit} onPress={() => Alert.alert('yosef is sexy')}>
                            <Image style={styles.picture} source={require('../assets/E-waste.png')} />
                            <Text>E-Waste</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bitBybit} onPress={() => Alert.alert('yosef is sexy')}>
                            <Image style={styles.picture} source={require('../assets/Scrape.png')} />
                            <Text>Scrape</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.LoveMaker}>
                        <TouchableOpacity style={styles.bitBybit} onPress={() => Alert.alert('yosef is sexy')}>
                            <Image style={styles.picture} source={require('../assets/Paper.png')} />
                            <Text>Paper</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bitBybit} onPress={() => Alert.alert('yosef is sexy')}>
                            <Image style={styles.picture} source={require('../assets/other.png')} />
                            <Text>Other</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: "10%",
        marginTop: "25%",

    },


    picture: {
        width: 75,
        height: 75,
        marginLeft: "13%",
        marginRight: "13%",
    },

    bitBybit: {
        alignItems: 'center',
        marginTop: "12%",
        marginBottom: "10%",


    },

    LoveMaker: {
        flexDirection: 'row',
        justifyContent: 'center',
    }

})