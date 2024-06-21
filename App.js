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
import Welcom from './Screens/Welcom';
import ResetPassword from './Screens/ResetPassword';
import HomeRevU from './Screens/HomeRevU';
import ProductsReviews from './Screens/ProductsReviews';
import ClassifyReview from './Screens/ClassifyReview';
import PositiveandNegative from './Screens/PositiveandNegative';


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>


        <Stack.Screen
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          name="Welcom"
          component={Welcom}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Tapbar"
          component={Tapbar}
        />
        <Stack.Screen
          name="PositiveandNegative"
          component={PositiveandNegative}
        />

        <Stack.Screen
          name="ClassifyReview"
          component={ClassifyReview}
        />

        <Stack.Screen
          name="ProductsReviews"
          component={ProductsReviews}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
        />
        {/* <Stack.Screen
          name="Tapbar"
          component={Tapbar}
        /> */}
        <Stack.Screen
          name="HomeRevU"
          component={HomeRevU}
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
