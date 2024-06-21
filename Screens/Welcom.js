import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import logo from '../assets/RevU2.png';
import image from '../assets/welcom.png';
export default function Welcom({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={logo}
                style={{ resizeMode: 'contain', width: 110, height: 110, }}

            />
            <Image source={image}
                style={{ resizeMode: 'contain', width: 300, height: 300, bottom: -10 }}
            />

            <Text style={styles.header}>
                Welcome to <Text style={{ color: '#7768B9' }}>RevU</Text> </Text>

            <Text style={styles.subtext}>All types of services to get best</Text>
            <Text style={styles.subtext}>products</Text>
            <View style={{ flexDirection: 'row', top: 15, }}>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.registerButton}>
                    <Text style={styles.registerButtonText}>SignUp</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
            </View>

        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        right: 0,
        left: 0,

    },
    animated: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 32,
        bottom: 10
    },
    subtext: {
        fontSize: 16,
        color: '#000000',
        textAlign: 'center',
        bottom: 10,

    },
    registerButton: {
        backgroundColor: '#7768B9',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginRight: 10,
        right: 15,
        alignItems: 'center',
        width: 120,

    },
    registerButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginButton: {
        borderColor: '#7768B9',
        borderWidth: 2,
        width: 120,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        left: 15
    },
    loginButtonText: {
        color: '#7768B9',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
