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

function AboutUsScreen  ({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#FCF7DE' }}>
      <Image source = {{uri:'https://scontent.fmnl17-4.fna.fbcdn.net/v/t1.15752-9/259514019_267318395237097_4866606593929261052_n.png?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=rNeEkceFOZQAX_n5d-H&_nc_ht=scontent.fmnl17-4.fna&oh=989bb79ec5f8d8a07c8c1ab7d5221c86&oe=61BCFCB9'}}
     style = {{ width: 200, height: 300 }}
     />
           <Text style = {{fontSize: 20}}>{"\n"}Developed By:</Text>
           <Text style = {{fontSize: 20}}>Jacqueline Aquino</Text>
           <Text style = {{fontSize: 20}}>Daniel Mark Florencio </Text>
           <Text style = {{fontSize: 20}}>Shane Nicole Noprada{"\n"}{"\n"} {"\n"}</Text>
           <Text style = {{fontSize: 30, fontWeight: 'bold' }}>Contact Us:</Text>
           <Text style = {{fontSize: 20}}>info@discoverph.com </Text>
        </View>
    );
  };

  export default AboutUsScreen;