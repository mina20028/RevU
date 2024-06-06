import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SemanticAnalysis from './SemanticAnalysis';
import { AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import Login from './SignUp';
import Onboarding from './Onboarding';
import Home from './Home';
import HomeProfile from './HomeProfile';

const Tab = createBottomTabNavigator();

export default function Tapbar({ navigation }) {
    // const press = () => {
    //     navigation.navigate('SemanticAnalysis');
    // }
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
            }}
            screenOptions={
                {
                    tabBarStyle: {
                        position: 'absolute',
                        bottom: 5,
                        left: 20,
                        right: 20,
                        borderRadius: 20,
                        // shadowColor: 'blue',
                        // shadowRadius: 3.5,
                    },
                }} >
            <Tab.Screen name="Home" component={Home}

                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center' }}>
                            <AntDesign
                                name="home"
                                size={25}
                                color={focused ? 'gray' : 'blue'}
                            >
                            </AntDesign>
                            <Text style={{
                                alignItems: 'center',
                                color: focused ? 'gray' : 'blue',
                            }}>Home</Text>

                        </View>
                    ),
                    headerShown: false
                }} />
            <Tab.Screen name="Login" component={SemanticAnalysis}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center' }}>
                            <AntDesign
                                name="search1"
                                size={25}
                                color={focused ? 'gray' : 'blue'}
                            >
                            </AntDesign>
                            <Text style={{
                                alignItems: 'center',
                                color: focused ? 'gray' : 'blue',
                            }}>Search Rate</Text>

                        </View>
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen name="HomeProfile" component={HomeProfile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center' }}>
                            <AntDesign
                                name="profile"
                                size={25}
                                color={focused ? 'gray' : 'blue'}
                            >
                            </AntDesign>
                            <Text style={{
                                alignItems: 'center',
                                color: focused ? 'gray' : 'blue',
                            }}>Profile</Text>

                        </View>
                    ),
                    headerShown: false
                }}
            />

        </Tab.Navigator>
    )
}