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
// import {initializeApp} from 'firebase/app';

function NationalHotlineScreen({navigation}) {
    return (
      <ScrollView style= {{backgroundColor: '#FCF7DE'}}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginRight:25, marginLeft:25 }}>
           <Text style = {{fontSize: 30, fontWeight: 'bold'}}>  NATIONAL HOTLINES </Text>
          <Text style = {{fontSize: 20}}> {"\n"}911 is the National Emergency Hotline</Text>
          <Text style = {{fontSize: 20}}> NATIONAL DISASTER RISK REDUCTION AND MANAGEMENT COUNCIL (NDRRMC) HOTLINES{"\n"}</Text>
         
          <Text style = {{fontSize: 20, fontWeight: 'bold'}}> {"\n"}RED CROSS</Text>
          <Text style = {{fontSize: 20}}> Hotline:</Text>
          <Text style = {{fontSize: 20}}> (02) 8527-8385 to 95</Text>
          <Text style = {{fontSize: 20}}> (02) 8527-0000 </Text>
          <Text style = {{fontSize: 20}}> (02) 8790-2300{"\n"}</Text>
         
          <Text style = {{fontSize: 20, fontWeight: 'bold'}}> {"\n"}Philippine National Police (PNP) </Text>
          <Text style = {{fontSize: 20}}> Emergency Hotline: 117</Text>
          <Text style = {{fontSize: 20}}> (02) 8722-0650</Text>
          <Text style = {{fontSize: 20}}> Text hotline: 0917-847-5757</Text>
        
          <Text style = {{fontSize: 20, fontWeight: 'bold'}}> {"\n"}Bureau of Fire Protection (BFP) </Text>
          <Text style = {{fontSize: 20}}> Direct line:</Text>
          <Text style = {{fontSize: 20}}> (02) 8426-0219</Text>
          <Text style = {{fontSize: 20}}> (02) 8426-0246{"\n"}</Text>
        
          <Text style = {{fontSize: 20, fontWeight: 'bold'}}> {"\n"}Philippine Coast Guard</Text>
          <Text style = {{fontSize: 20}}> Hotlines:</Text>
          <Text style = {{fontSize: 20}}> (02) 8527-8481 to 89</Text>
          <Text style = {{fontSize: 20}}> (02) 8527-3877 </Text>
          <Text style = {{fontSize: 20}}> (02) 8527-3880 to 85</Text>
          <Text style = {{fontSize: 20}}> (02) 8527-8482 local 6291</Text>
          <Text style = {{fontSize: 20}}> Text hotline:</Text>
          <Text style = {{fontSize: 20}}> 0917-PCG-DOTC (0917-724-3682)</Text>
          <Text style = {{fontSize: 20}}> 0918-967-4697{"\n"}</Text>
         
          <Text style = {{fontSize: 20, fontWeight: 'bold'}}> {"\n"}PNP-Women and Children Protection Center (WCPC)</Text>
          <Text style = {{fontSize: 20}}> Hotline: (02) 3410-3213</Text>
    
          <Text style = {{fontSize: 20, fontWeight: 'bold'}}> {"\n"}NBI-Violence Against Women and Children Desk (VAWCD)</Text>
          <Text style = {{fontSize: 20}}> Hotlines:</Text>
          <Text style = {{fontSize: 20}}> (02) 8523-8231 to 38</Text>
          <Text style = {{fontSize: 20}}> (02) 8525-6028{"\n"}{"\n"}</Text>
  
          <Button title ="Back to Home"
        color = '#FF4757'
        onPress={() => navigation.navigate("Home")}/>
        </View>
        <View style={stylesCategories.homeButtonContainer}></View>
      </ScrollView>
    );
  };

  //*********  Styles for all Seven Categories  ********** *// 
  const stylesCategories = StyleSheet.create ({
    homeButtonContainer: {
      marginBottom: 20,
    },
   buttonSize: {
      width: 100,
   }
  });

  export default NationalHotlineScreen;