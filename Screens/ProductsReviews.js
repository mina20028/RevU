import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
export default function ProductsReviews({ navigation }) {
    const handleclassify = () => {
        navigation.navigate('ClassifyReview')
    }
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Ionicons name="arrow-back" top={15} size={24} color="#fff" onPress={() => navigation.goBack()} />
                <Text style={styles.headerText}>Products Reviews</Text>
            </View>
            <Text style={styles.hText} >Amazon Review Classifier</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Enter Amazon Product URL</Text>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TextInput
                        placeholder="URL"
                        style={styles.input}
                    />
                </View>

                <Text style={styles.label}>Keyword </Text>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TextInput
                        placeholder="Keyword"
                        style={styles.input}
                    />
                </View>
                <TouchableOpacity onPress={handleclassify} style={styles.Button}>
                    <Text style={styles.ButtonText}>Search</Text>
                </TouchableOpacity>

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

