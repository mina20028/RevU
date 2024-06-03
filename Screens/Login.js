import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import backgroung from '../assets/background.png';
import { AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import logo from '../assets/RevU.png';
const { width, height } = Dimensions.get('window');

export default function Login({ navigation }) {
    const button = () => {
        navigation.navigate('SignUp');
    }
    return (
        <View style={styles.container}>
            <Image source={backgroung} style={{ position: 'absolute', width: width, height: height, bottom: 80 }} />
            <View >
                <Image source={logo}
                    style={{ resizeMode: 'contain', width: 170, height: 170, bottom: 130 }}

                />
            </View>

            <View >
                <Text style={styles.login}>Login</Text>

            </View>
            <View style={{ bottom: 30 }} >
                <View >
                    <TextInput
                        placeholder="Email"
                        style={styles.input}
                        bottom={20}

                    />
                </View>

                <TextInput
                    placeholder="Password"
                    style={styles.input}

                />

            </View>
            <TouchableOpacity style={{
                backgroundColor: '#39A7FF',
                width: 340,
                borderWidth: 2,
                borderRadius: 15,
                borderBlockColor: '#3572EF',
                padding: 10,
                top: 10,
                alignItems: 'center'
            }} >
                <Text style={{ color: 'white', fontWeight: 'bold', justifyContent: 'center', fontSize: 15 }}>Login</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', top: 30 }}>
                <Text style={{ fontWeight: 'bold', justifyContent: 'center', fontSize: 15 }}>don't have an account?</Text>
                <TouchableOpacity onPress={button}>
                    <Text style={{ color: '#39A7FF', fontWeight: 'bold', justifyContent: 'center', fontSize: 15 }}>  SignUp</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    login: {
        color: 'white',
        fontSize: 50,
        bottom: 150,
        fontWeight: 'bold',
        right: 100
    },
    input: {
        borderColor: "gray",
        width: 340,
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,

    },
});
