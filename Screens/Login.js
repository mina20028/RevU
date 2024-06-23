import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import backgroung from '../assets/background.png';
import logo from '../assets/RevULogin.png';

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
            const response = await fetch('http://192.168.1.5:3000/auth/login', {//IPv4 Address"your laptop"
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok) {
                console.log(data.data)
                await AsyncStorage.setItem(
                    'userdata',
                    JSON.stringify(data.data),
                );
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

            <LinearGradient
                colors={['#7768B9', '#4D34BB']}
                start={{ x: 1.7, y: 0.35 }}
            >

                <View style={styles.header} >
                    <Image source={logo} style={styles.logo} />

                    <Text style={styles.subtitle}>Welcome back!</Text>
                </View>

                <View style={styles.inputContainer}>

                    <Text style={styles.label}>Email</Text>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} >
                        <TextInput
                            placeholder="Email"
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            bottom={20}
                        />
                    </View>
                    <Text style={styles.label}>Password</Text>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <TextInput
                            placeholder="Password"
                            style={styles.input}
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>

                    <Text style={styles.forgotPassword}>
                        Forget password?
                        <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
                            <Text style={styles.resetText}>Reset</Text>
                        </TouchableOpacity>
                    </Text>



                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <TouchableOpacity onPress={handleLogin} style={styles.button}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <View style={styles.sign}>
                            <Text style={styles.signText}>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                                <Text style={styles.signLink}>  Create Account</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7768B9',

    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        resizeMode: 'contain',
        width: 140,
        height: 140,
        top: 90

    },
    subtitle: {
        fontSize: 19,
        color: '#fff',
        top: 95
    },

    inputContainer: {
        backgroundColor: 'white',
        width: 360,
        height: 420,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 151

    },
    label: {
        fontSize: 16,
        color: 'gray',
        top: 42,
        left: 23

    },
    input: {
        borderColor: '#ccc',
        width: 320,
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        top: 50,
        marginBottom: 30
    },
    forgotPassword: {
        left: 22,
        top: 30,
        marginBottom: 50,
        color: 'grey',
    },
    resetText: {
        color: 'red',
        top: 3,
        left: 5

    },
    button: {
        backgroundColor: '#7768B9',
        width: 320,
        borderRadius: 10,
        padding: 10,
        top: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
        fontSize: 16
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
        color: '#7768B9',
        fontWeight: 'bold',
        justifyContent: 'center',
        fontSize: 15
    },
});

