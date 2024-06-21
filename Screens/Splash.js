import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Animated } from 'react-native';
import logo from '../assets/RevU1.png';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function Splash({ navigation }) {

    setTimeout(() => {
        navigation.replace('Welcom')
    }, 500)
    return (
        <LinearGradient style={styles.container}
            colors={['#7768B9', '#4D34BB']}
            start={{ x: 1.3, y: 0.35 }}


        >
            <Animated.View style={styles.animated}>
                <Image source={logo}
                    style={{ resizeMode: 'contain', width: 210, height: 210 }}

                />
            </Animated.View>
        </LinearGradient >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'blue',
        top: 0,
        right: 0,
        left: 0,

    },
    animated: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',


    },
});
