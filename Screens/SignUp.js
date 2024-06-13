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

export default function SignUp({ navigation }) {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [age, setAge] = useState('');

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            Alert.alert("Passwords do not match");
            return;
        }

        const userData = {
            username: fullName,
            email: email,
            password: password,
            age: age,

        };



        try {
            const response = await fetch('http://192.168.1.4:3000/auth/signUp', {//IPv4 Address"your laptop"
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const result = await response.json();

            if (response.ok) {
                Alert.alert('Success', 'Sign up successful');
                navigation.navigate('Onboarding')
            } else {
                Alert.alert('Error', result.message || 'Sign up failed');
            }
        } catch (error) {
            console.error('Error signing up:', error);
            Alert.alert('Error', 'An error occurred. Please try again.');
        }
    };

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: -40000 }} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View>
                    <Image source={backgroung} style={{ width: width, height: height }} />
                    <View style={styles.logoContainer}>
                        <Image source={logo} style={styles.logo} />
                    </View>
                    <View >
                        <Text style={styles.header}>Sign Up</Text>
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
                            placeholder="Full Name"
                            style={styles.input}
                            value={fullName}
                            onChangeText={setFullName}
                        />
                        <TextInput
                            placeholder="Password"
                            style={styles.input}
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                            top={20}
                        />
                        <TextInput
                            placeholder="Confirm Password"
                            style={styles.input}
                            secureTextEntry
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            top={40}
                        />
                        <TextInput
                            placeholder="Age"
                            style={styles.input}
                            value={age}
                            onChangeText={setAge}
                            top={60}
                        />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={handleSignUp} style={styles.button}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                        <View style={styles.login}>
                            <Text style={styles.loginText}>Have an account already?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={styles.loginLink}>  Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: -400
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
        bottom: 690
    },
    header: {
        color: 'white',
        fontSize: 50,
        bottom: 690,
        fontWeight: 'bold',
        left: 10,
    },
    inputContainer: {
        bottom: 550,
        alignItems: 'center'
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
        borderBlockColor: '#3572EF',
        borderRadius: 15,
        padding: 10,
        bottom: 460,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
        fontSize: 15
    },
    login: {
        flexDirection: 'row',
        bottom: 440
    },
    loginText: {
        fontWeight: 'bold',
        justifyContent: 'center',
        fontSize: 15
    },
    loginLink: {
        color: '#39A7FF',
        fontWeight: 'bold',
        justifyContent: 'center',
        fontSize: 15
    },
});
