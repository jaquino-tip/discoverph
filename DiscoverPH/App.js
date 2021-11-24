import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationAction } from '@react-navigation/routers';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator} from '@react-navigation/stack';
import {useFonts} from 'expo-font';
import { AppLoading } from 'expo';
import {TouchableOpacity, KeyboardAvoidingView, SafeAreaView,  TextInput,
StyleSheet, ScrollView, View, Button, Text, Image, ImageBackground, Platform} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import GetStartedScreen from './screens/GetStartedScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import PresidentsScreen from './screens/PresidentsScreen';
import FlagScreen from './screens/FlagScreen';
import NationalSymbolsScreen from './screens/NationalSymbolsScreen';
import FoodsScreen from './screens/FoodsScreen';
import TouristSpotsScreen from './screens/TouristSpotsScreen';
import FilipinoBasicsScreen from './screens/FilipinoBasicsScreen';
import NationalHotlineScreen from './screens/NationalHotlineScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About Us" component={AboutUsScreen} />
        <Drawer.Screen name="Philippine Presidents" component={PresidentsScreen} />
        <Drawer.Screen name="Philippine Flag" component={FlagScreen} />
        <Drawer.Screen name="Philippine National Symbols" component={NationalSymbolsScreen} />
        <Drawer.Screen name="Filipino Foods" component={FoodsScreen} />
        <Drawer.Screen name="Tourist Spots" component={TouristSpotsScreen} />
        <Drawer.Screen name="Filipino Basics" component={FilipinoBasicsScreen} />
        <Drawer.Screen name="National Hotline" component={NationalHotlineScreen} />
      </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Get Started" component={GetStartedScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="HomeStack" component={DrawerRoutes} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

