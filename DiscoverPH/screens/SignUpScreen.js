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


function SignUpScreen(props) {
    const [loaded] = useFonts({
      Raleway: require('../assets/fonts/Raleway-Regular.ttf'),
      RalewaySemibold: require('../assets/fonts/Raleway-SemiBold.ttf'),
      RalewayBold: require('../assets/fonts/Raleway-Bold.ttf'),
      RalewayExtrabold: require('../assets/fonts/Raleway-ExtraBold.ttf')
    });
  
    if (!loaded) {
      return null;
    }
  
    return (
      <KeyboardAvoidingView    
      style= {{ flex:1 }} 
      behavior = 'height' 
      >
        <ImageBackground source={require("../assets/mobile-ui/discoverph-login-bg.png")}style={stylesSignUp.imageBG}>
  
        <Ionicons style={{marginTop: 46, marginLeft: 20}} name="return-up-back" size={38} color="black" onPress={() => props.navigation.replace('Login')} />
        {/* <AntDesign style={{marginTop: 46, marginLeft: 20}} name="arrowleft" size={36} color="black" /> */}
  
        <View style={stylesSignUp.titleContainer}></View>
        <Text style={{fontSize: 30, fontFamily: 'RalewayBold', marginLeft: 26}}>Hello and Mabuhay!</Text>
        <View style={stylesSignUp.verticalSpaceInput}></View>
        <Text style={{fontSize: 24, fontFamily: 'Raleway', marginLeft: 26}}>Create your account</Text>
        <View style={stylesSignUp.inputContainer}>
            
            {/* Input Email for Sign Up  */}
          <Text style={stylesSignUp.userTitle}>Enter Email Address</Text>
          <TextInput
            // value={email}
            // onChangeText={text => handleChange(text, "email")}
            style={stylesSignUp.input}
           />
  
         <View style={stylesSignUp.verticalSpaceInput}></View>
  
          {/* Input Password for Sign Up */}
          <Text style={stylesSignUp.userTitle}>Create Password</Text>
          <TextInput
            // value={password}
            // onChangeText={text => handleChange(text, "pwd")}
            style={stylesSignUp.input}
            secureTextEntry
          />

       <View style={stylesSignUp.verticalSpaceInput}></View>
          {/* Input Password for Sign Up */}
          <Text style={stylesSignUp.userTitle}>Confirm Password</Text>
          <TextInput
            // value={password}
            // onChangeText={text => handleChange(text, "pwd2")}
            style={stylesSignUp.input}
            secureTextEntry
          />
          </View>

          <View style={stylesSignUp.buttonContainer}>
            <TouchableOpacity
            //  onPress={handleSignUp}
            onPress={() => props.navigation.replace('Login')}
            style = {stylesSignUp.buttonLogin}> 
            <Text style = {stylesSignUp.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
  
          </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
  
  
  // Styles For SignUp
  const stylesSignUp = StyleSheet.create ({
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
   
    titleContainer: {
      marginTop: 30,
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
      marginTop: 50,
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
        // backgroundColor: '#CE1127',
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

  export default SignUpScreen;