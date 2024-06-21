import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';
import logo from '../assets/RevU2.png';
const HomeRevU = ({ navigation }) => {
    const handleProductsReviewPress = () => {
        navigation.navigate('ProductsReviews')
    };

    const handlePositiveNegativePress = () => {
        navigation.navigate('PositiveandNegative')
    };

    return (

        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.title}>Sentiment Analysis</Text>
            <Text style={styles.subtitle}>Empower your business with</Text>
            <Text style={styles.subtitle}>insights from reviews</Text>
            <Text style={styles.description}>
                Our model analyzes product reviews to determine the percentage of positive and negative feedback. Discover the sentiment behind your customer reviews to make informed decisions.
            </Text>

            <TouchableOpacity
                style={styles.buttonproduct}
                onPress={handleProductsReviewPress}
            >
                <Text style={styles.buttonproText}>Products Reviews</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonpostive}
                onPress={handlePositiveNegativePress}
            >
                <Text style={styles.buttonposText}>Positive and Negative</Text>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        width: '100%',
        backgroundColor: '#FFF',
    },
    logo: {
        resizeMode: 'contain',
        width: 100,
        height: 100,
        top: 100
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'red',
        marginBottom: 10,
        top: 110

    },
    subtitle: {
        fontSize: 20,
        color: '#4a148c',
        top: 110
    },
    description: {
        fontSize: 16,
        color: '#6253A7',
        textAlign: 'center',
        marginBottom: 40,
        paddingHorizontal: 18,
        top: 120
    },
    buttonproduct: {
        backgroundColor: '#7768B9',
        borderRadius: 10,
        marginBottom: 30,
        height: 55,
        width: 290,
        alignItems: 'center',
        justifyContent: 'center',
        top: 100
    },
    buttonpostive: {
        borderColor: '#7768B9',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 20,
        height: 55,
        width: 290,
        alignItems: 'center',
        justifyContent: 'center',
        top: 100
    },
    buttonproText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonposText: {
        color: '#7768B9',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HomeRevU;

