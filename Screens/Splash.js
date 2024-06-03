import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Animated } from 'react-native';
import logo from '../assets/RevU.png';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function Splash({ navigation }) {

    setTimeout(() => {
        navigation.replace('Login')
    }, 500)
    return (
        <LinearGradient style={styles.container}
            colors={['#3ABEF9', '#3572EF', '#050C9C']}
            start={{ x: .9, y: 0.45 }}


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
