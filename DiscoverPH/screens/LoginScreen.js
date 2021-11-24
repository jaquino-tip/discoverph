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

function LoginScreen(props) {
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
        <KeyboardAvoidingView    
        style= {{ flex:1 }} 
        behavior = 'height' 
        >
          <ImageBackground source={require("../assets/mobile-ui/discoverph-login.png")}style={stylesLogin.imageBG}>
    
            <View style={stylesLogin.inputContainer}>
    
              {/* Email Input */}
            <Text style={stylesLogin.userTitle}>Email</Text>
            <TextInput
            //   value={email}
            //   onChangeText={text => setEmail(text)}
              style={stylesLogin.input}
            />
            <View style={stylesLogin.verticalSpaceInput}></View>
    
              {/* Password Input */}
            <Text style={stylesLogin.userTitle}>Password</Text>
            <TextInput
            //   value={password}
            //   onChangeText={text => setPassword(text)}
              style={stylesLogin.input}
              secureTextEntry
            />
            </View>
    
            <View style={stylesLogin.buttonContainer}>
              <TouchableOpacity onPress={() => props.navigation.replace("HomeStack") } style = {stylesLogin.buttonLogin}> 
              {/* onPress={handleLogin} */}
              <Text style = {stylesLogin.buttonText}>LOGIN</Text>
              </TouchableOpacity>
            </View>
            
            <Text style={stylesLogin.paragraph}>Don't have an account?<Text onPress={() => props.navigation.replace("SignUp")} style = {{ color: '#000000', fontWeight: 'bold' }}> Sign Up</Text></Text>
            </ImageBackground>
        </KeyboardAvoidingView>
      );
    };

    // Styles For Login
const stylesLogin = StyleSheet.create ({
    container: {
      flex: 1,
    },
  
    imageBG: {
      width: '100%',
      height: '100%',
    },
  
    paragraph: {
      fontSize: 16,
      marginTop: 15,
      textAlign: 'center',
    },
   
    userTitle: {
      fontSize: 18,
      fontFamily: 'RalewayBold',
      marginBottom: 5,
    },
  
    verticalSpaceInput: {
      marginTop: 20,
    },
  
    inputContainer: {
      marginLeft: 26,
      marginTop: 340,
      width: '86%'
    },
  
    input: {
      height: 40,
      backgroundColor: '#ffffff',
      borderRadius: 8,
      color: '#000000',
      fontSize: 16,
      paddingLeft: 12,
    },
  
    buttonContainer: {
      marginTop: 40,
      alignItems: 'center',
    },
  
    buttonLogin: {
        height: 50,
        backgroundColor: '#0038A7',
        width: '86%',
        borderRadius: 8,
    },
  
    buttonText: {
      color: '#ffffff',
      fontSize: 24,
      fontFamily: 'RalewayExtrabold',
      textAlign: 'center',
      paddingTop: 5,
    },
  
    buttonDesign: {
      color: "white",
      alignSelf: 'center',
      width: 360,
      height: 185,
      fontSize: 30,
      textAlign: 'center',
      textAlignVertical: 'center',
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    },
  });
  
  export default LoginScreen;