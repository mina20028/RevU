import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
export default function PositiveandNegative({ navigation }) {
    const [inputValue, setInputValue] = useState('');


    const handleclassify = (text) => {
        setInputValue(text);
    }

    const press = () => {
        const value = parseFloat(inputValue);
        if (value > 50) {

            setDisplayText(
                <Text style={{ color: 'black', fontSize: 20 }}>
                    result: <Text style={{ color: 'blue', fontSize: 20 }}>{value}
                    </Text>
                </Text>
            );
        } else {

            setDisplayText(
                <Text style={{ color: 'black', fontSize: 20 }}>
                    Accuracy rate:
                </Text>
            );
        }
    };
    const [displayText, setDisplayText] = useState('');

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Ionicons name="arrow-back" top={15} size={24} color="#fff" onPress={() => navigation.goBack()} />
                <Text style={styles.headerText}>Positive & Negative</Text>
            </View>
            <Text style={styles.hText} >Amazon Review Classifier</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Enter Review</Text>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TextInput
                        placeholder="Enter Review"
                        style={styles.input}
                        onChangeText={handleclassify}
                    />
                </View>

                <TouchableOpacity onPress={press} style={styles.Button}>
                    <Text style={styles.ButtonText}>Search</Text>
                </TouchableOpacity>
                <Text style={{ top: 80, left: 20 }}>{displayText}</Text>
            </View>




        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#7768B9',
        paddingHorizontal: 10,
        paddingVertical: 30,
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        top: 15,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    hText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 22,
        left: 20,
        top: 25

    },
    inputContainer: {
        width: 360,
        height: 800,
        marginTop: 10
    },

    label: {
        fontSize: 18,
        color: 'black',
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
    Button: {
        backgroundColor: '#7768B9',
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        borderRadius: 10,
        marginRight: 10,
        left: 20,
        alignItems: 'center',
        width: 170,
        height: 50,
        top: 45

    },
    ButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

