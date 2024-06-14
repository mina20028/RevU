import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import backgroung from '../assets/background.png';
import logo from '../assets/RevU.png';

const { width, height } = Dimensions.get('window');

export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleLogin = async () => {
        const userData = {
            email,
            password,
        };

        try {
            const response = await fetch('http://192.168.1.4:3000/auth/login', {//IPv4 Address"your laptop"
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok) {
                Alert.alert('Success', 'Sign up successful');
                navigation.navigate('Tapbar')
            } else {
                Alert.alert('Error', result.message || 'Sign up failed');
            }
        } catch (error) {
            console.error('Error signing up:', error);
            Alert.alert('Error', 'The email or password is incorrect.');
            //  Alert.alert('Error', 'An error occurred. Please try again.');
        }
    };

    return (
        <View style={styles.container}>

            <Image source={backgroung} style={{ position: 'absolute', width: width, height: height, bottom: 80 }} />
            <View >
                <Image source={logo} style={styles.logo} />
            </View>

            <View >
                <Text style={styles.header}>Login</Text>
            </View>

            <View style={styles.inputContainer}>
                <View>
                    <TextInput
                        placeholder="Email"
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        bottom={20}
                    />
                </View>

                <TextInput
                    placeholder="Password"
                    style={styles.input}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}

                />
            </View>


            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.sign}>
                <Text style={styles.signText}>Have an account already?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.signLink}>  SignUp</Text>
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
    backgroundImage: {
        width: width,
        height: height,
        position: 'absolute',
    },
    logoContainer: {
        alignItems: 'center'
    },
    logo: {
        resizeMode: 'contain',
        width: 170,
        height: 170,
        bottom: 130
    },
    header: {
        color: 'white',
        fontSize: 50,
        bottom: 150,
        fontWeight: 'bold',
        right: 100
    },
    inputContainer: {
        bottom: 30
    },
    input: {
        borderColor: "gray",
        width: 340,
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
    },
    button: {
        backgroundColor: '#39A7FF',
        width: 340,
        borderWidth: 2,
        borderRadius: 15,
        borderBlockColor: '#3572EF',
        padding: 10,
        top: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
        fontSize: 15
    },
    sign: {
        flexDirection: 'row',
        top: 30
    },
    signText: {
        fontWeight: 'bold',
        justifyContent: 'center',
        fontSize: 15
    },
    signLink: {
        color: '#39A7FF',
        fontWeight: 'bold',
        justifyContent: 'center',
        fontSize: 15
    },
});

