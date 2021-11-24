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

function GetStartedScreen({navigation}){
    const [loaded] = useFonts({
        Raleway: require('../assets/fonts/Raleway-Regular.ttf'),
        RalewaySemibold: require('../assets/fonts/Raleway-SemiBold.ttf'),
        RalewayBold: require('../assets/fonts/Raleway-Bold.ttf'),
        RalewayExtrabold: require('../assets/fonts/Raleway-ExtraBold.ttf'),
      });
    
      if (!loaded) {
        return null;
      }

    return (

    <View style={styles.container}>

    <Image style={styles.appLogo} source={require("../assets/icon-discoverph.png")}/>
    <Image style={styles.badge} source={require("../assets/ph-location-get-started.png")}/>

        <View style={styles.textContainer}>
        <Text style={{fontFamily: 'RalewayExtrabold', fontSize: 24}}>Welcome to Discover PH!</Text>
        </View>

        <Text style={{fontFamily: 'Raleway', fontSize: 18, textAlign: 'center', marginTop: 16}}>
            Get to know more about the beauty of Philippine Culture, History, and Tourism.
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
            <Text style={{color: '#FFFFFF', fontSize: 22, fontFamily:'RalewayExtrabold', marginTop: 4, marginBottom: 4, 
            marginLeft: 70, marginRight: 70, paddingBottom: 6}}>
                Let's get started!
            </Text>
        </TouchableOpacity>

    </View>

    )
}

const styles = StyleSheet.create ({
    container: {
      flex: 1,
      alignItems: 'center',
    },

    textContainer: {
        marginTop: 40,
    },

    appLogo: {
        marginTop: 60,
        width: 120,
        height: 120,
    },

    badge: {
        marginTop: 60,
        width: 180,
        height: 180,
    },

    button: {
        marginTop: 80,
        backgroundColor: '#0038A7',
        borderRadius: 24
        // width: '50%',
    },

  });

export default GetStartedScreen;