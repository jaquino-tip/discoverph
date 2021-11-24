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

function HomeScreen({navigation}) {
    const [loaded] = useFonts({
        Raleway: require('../assets/fonts/Raleway-Regular.ttf'),
        RalewayExtrabold: require('../assets/fonts/Raleway-ExtraBold.ttf'),
      });
    
      if (!loaded) {
        return null;
      }

      return (
        <ScrollView>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Philippine Presidents")}> 
            <ImageBackground source={require("../assets/buttons/ph-presidents-button.png")} style={styles.buttonDesign}>
            </ImageBackground>
          </TouchableOpacity>
    
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Philippine Flag")}>
            <ImageBackground source={require("../assets/buttons/ph-flag-button.png")} style={styles.buttonDesign}>
            </ImageBackground>
          </TouchableOpacity>
    
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Philippine National Symbols")}>
            <ImageBackground source={require("../assets/buttons/ph-natsymbols-button.png")} style={styles.buttonDesign}>
            </ImageBackground>
          </TouchableOpacity>
    
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Filipino Foods")}>
            <ImageBackground source={require("../assets/buttons/ph-foods-button.png")} style={styles.buttonDesign}>
            </ImageBackground>
          </TouchableOpacity>
    
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Tourist Spots")}>
            <ImageBackground source={require("../assets/buttons/ph-tourspots-button.png")} style={styles.buttonDesign}>
            </ImageBackground>
          </TouchableOpacity>
    
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Filipino Basics")}>
            <ImageBackground source={require("../assets/buttons/ph-filipinobasics-button.png")} style={styles.buttonDesign}>
            </ImageBackground>
          </TouchableOpacity>
    
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("National Hotline")}>
            <ImageBackground source={require("../assets/buttons/ph-hotlines-button.png")} style={styles.buttonDesign}>
            </ImageBackground>
            <View style={styles.buttonContainerBottom}></View> 
          </TouchableOpacity>
          </ScrollView>
      );
    };

// Styles For HomeScreen
const styles = StyleSheet.create ({
    container: {
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center',
    },
   
    buttonContainer: {
      marginTop: 18,
    },
  
    buttonContainerBottom: {
      marginBottom: 20
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

    export default HomeScreen;