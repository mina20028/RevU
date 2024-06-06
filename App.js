import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './Screens/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Onboarding from './Screens/Onboarding';
import SemanticAnalysis from './Screens/SemanticAnalysis';
import Tapbar from './Screens/Tapbar';
import ProfilePage from './Screens/Profile';
import HomeProfile from './Screens/HomeProfile';
import Home from './Screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>


        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Tapbar"
          component={Tapbar}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="SemanticAnalysis"
          component={SemanticAnalysis}
        />
        <Stack.Screen
          name="HomeProfile"
          component={HomeProfile}
        />
        <Stack.Screen
          name="ProfilePage"
          component={ProfilePage}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
        />

        <Stack.Screen
          name="Splash"
          component={Splash}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
        />

        <Stack.Screen
          name="Tabbar"
          component={Tapbar}
        />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
