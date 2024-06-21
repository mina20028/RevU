import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, } from "react-native";

import AppIntroSlider from "react-native-app-intro-slider";
import { AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import Login from "./Login";
//import * as Progress from 'react-native-progress';
const slides = [
    {
        key: "one",
        title: "Welcome in RevU",
        text: "Discover what customers love with our AI-powered review analysis.",
        image: require("../assets/photos/Photo1.png"),

    },
    {
        key: "two",
        text1: "Explore the world of reviews with ease.",
        image: require("../assets/photos/photo2.png"),
    },
    {
        key: "three",
        title: "Let's go now",
        text2: "Navigate the sea of customer opinions with AI-powered precision.",
        image: require("../assets/photos/photo3.png"),
    },
];

let customFonts = {
    'kalam': require('../assets/fonts/Kalam-Bold.ttf'),
    'frederic': require('../assets/fonts/FrederickatheGreat-Regular.ttf'),
    'Gelline': require('../assets/fonts/Gelline.ttf'),
    'Bego': require('../assets/fonts/Sketch Bego.ttf'),
};
export default class Onboarding extends React.Component {
    state = {
        fontsLoaded: false,
    };

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync();
    }



    state = { showHomePage: false };
    _renderItem = ({ item }) => {

        return (
            <View style={styles.container}>
                <Image
                    source={item.image}
                    style={{
                        height: Dimensions.get('window').height / 2.8,
                        width: Dimensions.get('window').width - 20,
                        marginTop: '60%',
                        resizeMode: 'contain'
                    }}
                />
                <Text
                    style={{
                        bottom: 370,
                        fontSize: 45,
                        //color: 'black',
                        textAlign: "center",
                        // fontWeight: 'bold',
                        fontFamily: 'Bego'

                    }}>
                    {item.title}
                </Text>

                <Text style={{
                    textAlign: 'center',
                    color: '#4D34BB',
                    fontSize: 30,
                    marginLeft: 19,
                    marginRight: 19,
                    textAlign: 'center',
                    fontFamily: 'Gelline',
                    bottom: 90
                    // fontWeight: 'bold',

                }}>
                    {item.text}

                </Text>
                <Text style={{
                    textAlign: 'center',
                    color: '#4D34BB',
                    fontSize: 30,
                    marginLeft: 19,
                    marginRight: 19,
                    textAlign: 'center',
                    fontFamily: 'Gelline',
                    bottom: 50
                    // fontWeight: 'bold',

                }}>
                    {item.text1}

                </Text>
                <Text style={{
                    textAlign: 'center',
                    color: '#4D34BB',
                    fontSize: 30,
                    marginLeft: 19,
                    marginRight: 19,
                    textAlign: 'center',
                    fontFamily: 'Gelline',
                    bottom: 90
                    // fontWeight: 'bold',

                }}>
                    {item.text2}

                </Text>
            </View>
        )
    }
    _renderNextButton = () => {
        return (
            <View >
                <Text style={{ top: 14, fontWeight: 'bold', color: '#7768B9' }}>Next</Text>
            </View>
        )
    }
    _renderDoneButton = () => {
        return (
            <View >
                <Text onPress={() => this.props.navigation.navigate('Tabbar')} style={{ top: 14, fontWeight: 'bold', color: '#7768B9' }} >Done</Text>
            </View>
        )
    }

    _renderSkipButton = () => {
        return (
            <View>
                <Text onPress={() => this.props.navigation.navigate('Tabbar')} style={{ top: 14, fontWeight: 'bold', color: '#7768B9' }} >Skip</Text>
            </View>
        )
    }


    render() {
        if (!this.state.fontsLoaded) {
            return null;
        }
        if (this.state.showHomePage) {
            return (<OnboardingScreen />

            )
        } else
            return (

                <AppIntroSlider
                    showSkipButton={true}
                    renderItem={this._renderItem}
                    data={slides}

                    renderDoneButton={this._renderDoneButton}
                    renderSkipButton={this._renderSkipButton}
                    renderNextButton={this._renderNextButton}


                    activeDotStyle={{
                        backgroundColor: "black",
                        width: 20,
                    }}
                />

            )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: "center",
        height: 200,


    },
    buttonCircle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        shadowOffset: { width: 5, height: 5 },
        shadowColor: 'red',
        shadowOpacity: 0.5,

    },


});