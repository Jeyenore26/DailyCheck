import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'


export default function Nav() {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', margin: '4%', }}>
                <Image style={{ width: 50, height: 50 }} source={require('../assets/tree.png')}></Image>
                <Text style={styles.icon}>DailyCheck</Text>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#e5e5e5',
        padding: "2%",
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 25,


    },
    icon: {
        fontSize: 20,
        color: 'black',
        marginTop: "7%",
    }

});
