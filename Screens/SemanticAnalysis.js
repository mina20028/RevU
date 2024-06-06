import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AwesomeAlert from 'react-native-awesome-alerts';
import { LineChart } from 'react-native-chart-kit';
export default function SemanticAnalysis({ navigation }) {

    const [inputValue, setInputValue] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const handleInputChange = (text) => {
        setInputValue(text);
    };
    const [customFonts] = useFonts({
        'Bego': require('../assets/fonts/Sketch Bego Fill.ttf'),
    });
    const back = () => {
        navigation.goBack();
    };

    const press = () => {
        setShowAlert(!showAlert);
        const value = parseFloat(inputValue);
        if (value > 50) {
            setAlertMessage("Good");
            setDisplayText(
                <Text style={{ color: 'black', fontSize: 20 }}>
                    Accuracy rate: <Text style={{ color: 'blue', fontSize: 20 }}>{value}
                        <Text style={{ color: 'black', fontSize: 20 }}> , Status:</Text> Good</Text>
                </Text>
            );
        } else {
            setAlertMessage("Bad");
            setDisplayText(
                <Text style={{ color: 'black', fontSize: 20 }}>
                    Accuracy rate: <Text style={{ color: 'blue', fontSize: 20 }}>Bad</Text>
                </Text>
            );
        }


    };

    const [displayText, setDisplayText] = useState('');


    if (!customFonts) {
        return null;
    }
    return (
        <LinearGradient style={styles.container}
            colors={['#3572EF', '#3572EF']}
            start={{ x: .9, y: 0.45 }}>
            <View>


                {/* <TouchableOpacity onPress={back}>
                    <View style={styles.design} >
                        <Ionicons name='arrow-back-outline' top={2} size={25} color={'#3ABEF9'} />
                    </View>
                </TouchableOpacity> */}
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ top: 200, fontSize: 40, fontFamily: 'Bego', color: 'white' }}>Welcome</Text>
                </View>
                <View  >
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.square} />
                        <TextInput
                            placeholder="Enter 'product name' or 'link' "
                            style={styles.login}
                            top={200}
                            value={inputValue}
                            onChangeText={handleInputChange}
                            placeholderTextColor={'black'}
                            backgroundColor={'white'}
                            multiline
                            numberOfLines={1}
                            scrollEnabled

                        />
                        <TouchableOpacity onPress={press}>
                            <Fontisto name='search' size={25} color={'black'} top={168} left={150} />
                        </TouchableOpacity>
                        <AwesomeAlert
                            show={showAlert}
                            title='Accuracy'
                            titleStyle={{ fontSize: 22, color: 'black' }}
                            customView={
                                <Text style={{ color: 'black', fontSize: 15 }}>
                                    Accuracy rate: <Text style={{ color: 'blue', fontSize: 15 }}>{alertMessage}</Text>
                                </Text>
                            }
                            messageStyle={{ fontSize: 20, color: 'black' }}
                            showConfirmButton={true}
                            confirmText='Ok'
                            confirmButtonStyle={{ backgroundColor: '#3ABEF9', width: 50, alignItems: 'center' }}
                            confirmButtonTextStyle={{ fontSize: 15 }}
                            onConfirmPressed={() => {
                                setShowAlert(false)
                            }}

                        />
                        <Text style={{ top: 200 }}>{displayText}</Text>

                    </View>
                </View>

                <LineChart

                    data={{
                        labels: ['X'],
                        datasets: [
                            {
                                data: [
                                    30,
                                    30,
                                    50,
                                ],
                            },
                        ],
                    }}
                    width={Dimensions.get('window').width - 30}
                    height={220}

                    yAxisInterval={1}
                    chartConfig={{
                        backgroundGradientFrom: '#F3F7EC',
                        backgroundGradientTo: '#F3F7EC',
                        decimalPlaces: 0,
                        color: (opacity = 1) => `rgba(83, 83, 83, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                        propsForDots: {
                            r: '5',
                            strokeWidth: '2',
                            stroke: 'black',
                        },
                    }}
                    bezier
                    style={{
                        marginVertical: 230,
                        borderRadius: 16,
                        alignItems: 'center'
                    }}
                />

            </View>
        </LinearGradient >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'blue',
    },
    design: {
        alignContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: 35,
        height: 30,
        borderRadius: 50,
        backgroundColor: 'black',
        position: 'absolute',
        top: 45,
        left: 3


    },
    login: {
        color: 'black',
        width: 300,

        height: 40,
        borderRadius: 40,
        right: 15
    },
    square: {
        width: 350,
        height: 40,
        top: 240,
        borderRadius: 30,
        backgroundColor: "white",
    },
});