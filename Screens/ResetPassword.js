import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import logo from '../assets/RevU2.png';

const ResetPassword = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [isButtonActive, setIsButtonActive] = useState(false);

    const handleEmailChange = (input) => {
        setEmail(input);
        setIsButtonActive(input.length > 0);
    };

    const handleConfirm = async () => {
        try {
            const response = await fetch('http://192.168.1.5:3000/user/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();
            if (response.ok) {
                Alert.alert('Success', 'Password reset link has been sent to your email');
            } else {
                throw new Error(result.message || 'An error occurred');
            }
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', error.message || 'An error occurred');
        }
    };

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.title}>Reset Password</Text>
            <Text style={styles.subtitle}>Take a moment to reset your password</Text>
            <Text style={styles.texttitle}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Write your email"
                value={email}
                onChangeText={handleEmailChange}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <Text style={styles.rememberPassword}>Remember password?</Text>
            <TouchableOpacity
                style={[styles.button, isButtonActive ? styles.activeButton : styles.inactiveButton]}
                onPress={handleConfirm}
                disabled={!isButtonActive}
            >
                <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
            <View style={styles.sign}>
                <Text style={styles.footerText}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.createAccountText}> Create Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        resizeMode: 'contain',
        width: 100,
        height: 100,
        bottom: 60,
    },
    title: {
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'center',
        bottom: 50,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        bottom: 45,
        color: '#555',
    },
    texttitle: {
        fontSize: 16,
        right: 140,
        bottom: 5,
        color: '#555',
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        width: 325,
        height: 50,
    },
    rememberPassword: {
        textAlign: 'left',
        width: '100%',
        marginTop: -10,
        marginBottom: 50,
        color: '#8888ba',
    },
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
    },
    activeButton: {
        backgroundColor: '#7768B9',
    },
    inactiveButton: {
        backgroundColor: '#8888ba',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    footerText: {
        color: '#555',
    },
    createAccountText: {
        color: '#7768B9',
    },
    sign: {
        flexDirection: 'row',
        top: 30,
    },
});

export default ResetPassword;
