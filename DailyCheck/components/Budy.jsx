import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button, Alert, Pressable, Image, TouchableOpacity, Modal } from 'react-native'







export default function Budy() {
    const MoModal = ({ visible, children }) => {

        const [on, seton] = useState(visible)
        useEffect(() => {
            toggleModalW();
        }, [visible])
        const toggleModalW = () => {
            if (visible) {
                seton(true);
            }
            else {
                seton(false)
            }
        }
        return <Modal transparent visible={on} animationType='slide'>
            <View style={styles.weatherbg}>
                <View style={styles.weathercontainer}>
                    {children}
                </View>
            </View>
        </Modal>
    }
    const [visible, setvisible] = useState(false);
    return (

        <View style={styles.container}>

            <View>
                <MoModal visible={visible}>
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => { setvisible(false) }}>
                                <Image source={require('../assets/close.png')} style={{ width: 30, height: 30 }}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white' }}>
                            Egypt
                        </Text>
                    </View>
                </MoModal>
            </View>
            <Button title="dd" onPress={() => setvisible(true)}></Button>

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
    },
    weatherbg: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    weathercontainer: {
        width: "80%",
        backgroundColor: '#bde0fe',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
    },

})