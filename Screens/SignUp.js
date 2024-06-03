import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native';
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
        navigation.navigate('Login');
    }
    const button1 = () => {
        navigation.navigate('Onboarding');
    }
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: -40000 }} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View>
                    <Image source={backgroung} style={{ width: width, height: height }} />
                    <View style={{ alignItems: 'center' }}>
                        <Image source={logo}
                            style={{ resizeMode: 'contain', width: 170, height: 170, bottom: 650 }}

                        />
                    </View>

                    <View >
                        <Text style={styles.login}>Sign Up</Text>

                    </View>
                    <View style={{ bottom: 550, alignItems: 'center' }} >
                        <View >
                            <TextInput
                                placeholder="Email"
                                style={styles.input}
                                bottom={20}

                            />

                        </View>
                        <TextInput
                            placeholder="Full Name"
                            style={styles.input}

                        />

                        <TextInput
                            placeholder="Password"
                            style={styles.input}
                            top={20}

                        />

                        <TextInput
                            placeholder="Confirm Password"
                            style={styles.input}
                            top={40}
                        />
                        <TextInput
                            placeholder="Date Of Birthday"
                            style={styles.input}
                            top={60}
                        />


                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={button1} style={{
                            backgroundColor: '#39A7FF',
                            width: 340,
                            borderWidth: 2,
                            borderBlockColor: '#3572EF',
                            borderRadius: 15,
                            padding: 10,
                            bottom: 460,
                            alignItems: 'center'
                        }} >
                            <Text style={{ color: 'white', fontWeight: 'bold', justifyContent: 'center', fontSize: 15 }}>Login</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', bottom: 440 }}>
                            <Text style={{ fontWeight: 'bold', justifyContent: 'center', fontSize: 15 }}>Have an account already?</Text>
                            <TouchableOpacity onPress={button}>
                                <Text style={{ color: '#39A7FF', fontWeight: 'bold', justifyContent: 'center', fontSize: 15 }}>  login</Text>
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
    login: {
        color: 'white',
        fontSize: 50,
        bottom: 650,
        fontWeight: 'bold',
        left: 10
    },
    input: {
        borderColor: "gray",
        width: 340,
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,

    },
});
