import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import backgroung from '../assets/background.png';
import logo from '../assets/RevUSignUp.png';


export default function SignUp({ navigation }) {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [age, setAge] = useState('');

    const [emailError, setEmailError] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [ageError, setAgeError] = useState('');

    const validateEmail = (email) => {
        const regex = /^[^0-9\s@]+[0-9]?[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        return re.test(password);
    };

    const validateFullname = (fullName) => {
        const re = /^[a-zA-Z\s]+$/;
        return re.test(fullName);
    };

    const validateAge = (age) => {
        const re = /^[\d]+$/;
        return re.test(age);
    };

    const validateInputs = () => {
        let valid = true;

        if (!email) {
            setEmailError('Email is required');
            valid = false;
        } else if (!validateEmail(email)) {
            setEmailError("Invalid email format Must be 'email@text.com'");
            return;
        } else {
            setEmailError("");
        }

        if (!fullName) {
            setFullNameError('Full Name is required');
            valid = false;
        } else if (!validateFullname(fullName)) {
            setFullNameError("Invalid FullName format");
            return;
        } else {
            setFullNameError('');
        }

        if (!password) {
            setPasswordError('Password is required');
            valid = false;
        } else if (!validatePassword(password)) {
            setPasswordError("Password must be at least 6 characters long and include uppercase, lowercase, digit, and special character");
            return;
        } else {
            setPasswordError('');
        }

        if (!confirmPassword) {
            setConfirmPasswordError('Confirm Password is required');
            valid = false;
        } else if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match');
            valid = false;
        } else {
            setConfirmPasswordError('');
        }

        if (!age) {
            setAgeError('Age is required');
            valid = false;
        } else if (age < 18 || age > 60) {
            setAgeError('You must be between 18 and 60 years old');
            valid = false;

        } else if (!validateAge(age)) {
            setAgeError("Invalid Age format");
            return;
        } else {
            setAgeError('');
        }

        return valid;
    };

    const handleSignUp = async () => {
        if (!validateInputs()) {
            return;
        }

        const userData = {
            username: fullName,
            email: email,
            password: password,
            age: age,
        };

        try {
            const response = await fetch('http://192.168.1.2:3000/auth/signUp', {
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
        <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
            <LinearGradient
                colors={['#7768B9', '#4D34BB']}
                start={{ x: 1.7, y: 0.35 }}
                style={{ height: 1010 }}
            >
                <View style={styles.container}>

                    <View style={styles.header}>
                        <Image source={logo} style={styles.logo} />
                        <Text style={styles.subHeaderText}>Enter your details below</Text>
                    </View>


                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <TextInput
                                placeholder="Email"
                                style={styles.input}
                                value={email}
                                onChangeText={setEmail}


                            />
                        </View>
                        {emailError ? <Text style={styles.errorEmail}>{emailError}</Text> : null}


                        <Text style={styles.label}>FullName</Text>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <TextInput
                                placeholder="Full Name"
                                style={styles.input}
                                value={fullName}
                                onChangeText={setFullName}

                            />
                        </View>
                        {fullNameError ? <Text style={styles.errorfullname}>{fullNameError}</Text> : null}


                        <Text style={styles.label}>Password</Text>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <TextInput
                                placeholder="Password"
                                style={styles.input}
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}

                            />
                        </View>
                        {passwordError ? <Text style={styles.errorpassword}>{passwordError}</Text> : null}


                        <Text style={styles.label}>confirmPassword</Text>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <TextInput
                                placeholder="Confirm Password"
                                style={styles.input}
                                secureTextEntry
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                            />
                        </View>
                        {confirmPasswordError ? <Text style={styles.errorcomfirmpassword}>{confirmPasswordError}</Text> : null}


                        <Text style={styles.label}>Age</Text>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <TextInput
                                placeholder="Age"
                                style={styles.input}
                                value={age}
                                onChangeText={setAge}

                            />
                        </View>
                        {ageError ? <Text style={styles.errorAge}>{ageError}</Text> : null}

                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={handleSignUp} style={styles.button}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                        <View style={styles.login}>
                            <Text style={styles.loginText}>Already have an account ?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={styles.loginLink}>  Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>



                </View>
            </LinearGradient>
        </ScrollView>
    );
}

const styles = StyleSheet.create({


    container: {
        flex: 1,


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
    subHeaderText: {
        color: '#fff',
        fontSize: 19,
        top: 95
    },

    inputContainer: {
        backgroundColor: 'white',
        width: 360,
        height: 800,
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
        marginBottom: 35
    },
    errorEmail: {
        color: 'red',
        top: 20,
        left: 25,
        marginBottom: -15
    },
    errorfullname: {
        color: 'red',
        top: 20,
        left: 25,
        marginBottom: -13
    },
    errorpassword: {
        color: 'red',
        top: 20,
        left: 25,
        marginBottom: -13,
        paddingRight: 9
    },
    errorcomfirmpassword: {
        color: 'red',
        top: 20,
        left: 25,
        marginBottom: -15
    },
    errorAge: {
        color: 'red',
        top: 20,
        left: 25,
        marginBottom: -15
    },

    button: {
        backgroundColor: '#7768B9',
        width: 320,
        padding: 10,
        bottom: 200,
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,

    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
        fontSize: 15
    },
    login: {
        flexDirection: 'row',
        bottom: 190
    },
    loginText: {
        fontWeight: 'bold',
        justifyContent: 'center',
        fontSize: 15
    },
    loginLink: {
        color: '#7768B9',
        fontWeight: 'bold',
        justifyContent: 'center',
        fontSize: 15
    },
});
