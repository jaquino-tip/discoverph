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

function FilipinoBasicsScreen({navigation}) {
    return (
      <ScrollView style= {{backgroundColor: '#FCF7DE'}}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , marginRight:25, marginLeft:25}}>
           <Text style = {{fontSize: 15}}>  {"\n"}{"\n"}      Filipinos are multilingual so asking where the street to go to or what mode of transportation to take he can easily have answered back. Understanding and pronouncing their words and phrases they used can be learned but if you have no time to do so you can at least learn the basic phrases for practical application as you explore one island of its more or less some 7,000 islands. 
  Understanding some of 170 dialects is quite formidable so we can somehow maneuver our way around since almost each Filipino of its 80 million inhabitants speaks English as its second language as well as Spanish.  Though the most common uses are Tagalog, Ilocano, Visaya, Bicol, Cebuano, Hiligaynon, Waray-waray, Kampangpangan, Bohol, Pagansinan, Maranao, Tausug and Maguindanao.{"\n"}
  {"\n"}           Filipino is the official language and the most widely used language in the island.  Knowing the language and understanding them is another.
  The Basic Filipino greetings are translated to the nearest English in meaning and in context. One of the benefits of American colonization and exposure to Americans during their stay in the Philippines is the ability of a Filipino to comprehend and to speak the universal language of the west. The Philippines is an archipelago geographically divided into three (3) main islands, Luzon, Visayas and Mindanao. We will be providing you with Tagalog translation (which is mainly used in Luzon but understood in Visayas and Mindanao as well) and Visayas/Cebuano (understood largely in Visayas and Mindanao) with their nearest English translation or at times their nearest interpretations. So wherever you are as you explore the beautiful country, you\’ll have a pleasant stay because you are familiar with these Filipino words and phrases, especially for travelers.
  {"\n"}{"\n"}</Text>
          <Text style = {{fontSize: 20, fontWeight: 'bold'}}> GREETINGS </Text>
          <Text style = {{fontSize: 15}}> {"\n"}Filipino/Tagalog  : Magandang Umaga (mah-GAN-dang A-raw)</Text>
          <Text style = {{fontSize: 15}}> Visayan/Cebuano :  Maayong Buntag (mah-A-YOngh BOON-tagh)</Text>
          <Text style = {{fontSize: 15}}> English  :  GOOD MORNING{"\n"}</Text>
  
          <Text style = {{fontSize: 15}}> {"\n"}Filipino/Tagalog  : Magandandang Tanghali (mah-GAN-dang Tang-HA-li)</Text>
          <Text style = {{fontSize: 15}}> Visayan/Cebuano  :  Maayong Udto (mah-A-yong UD-to)</Text>
          <Text style = {{fontSize: 15}}> English  :  GOOD NOON{"\n"}</Text>
         
          <Text style = {{fontSize: 15}}> {"\n"}Filipino/Tagalog  :  Magandang Hapon (mah-GAN-dang HA-pohn)</Text>
          <Text style = {{fontSize: 15}}> Visayan/Cebuano  : Maayong Hapon (mah-A-yong HA-pohn)</Text>
          <Text style = {{fontSize: 15}}> English  : GOOD AFTERNOON{"\n"}</Text>
  
          <Text style = {{fontSize: 15}}> {"\n"}Filipino/Tagalog  : Magandang Gabi (mah-GAN-dang ga-BEE)</Text>
          <Text style = {{fontSize: 15}}> Visayan/Cebuano  : Maayong Gabii (mah-GAN-dang ga-BEE-EE)</Text>
          <Text style = {{fontSize: 15}}> English  : GOOD EVENING/NIGHT{"\n"}</Text>
     
          <Text style = {{fontSize: 15}}> {"\n"}Filipino/Tagalog  : Magandang Araw (mah-GAN-dang a-RAW)</Text>
          <Text style = {{fontSize: 15}}> Visayan/Cebuano  : Maayong Adlaw (mah-A-yong AD-law)</Text>
          <Text style = {{fontSize: 15}}> English  : Good Day/Hi! /Hello!{"\n"}</Text>
    
          <Text style = {{fontSize: 15}}>{"\n"}Filipino/Tagalog  : KUMUSTA (Pronounced Koo-moo-STAH)</Text>
          <Text style = {{fontSize: 15}}> Visayan/Cebuano : KUMUSTA (Pronounced Koo-moo-STAH)</Text>
          <Text style = {{fontSize: 15}}> English  : HOW ARE YOU? (Informal){"\n"}{"\n"}</Text>
  
  
  
          <Text style = {{fontSize: 20, fontWeight: 'bold'}}> CIVILITIES </Text>
          <Text style = {{fontSize: 15}}> {"\n"}Filipino/Tagalog : MABUTI (Ma-BOO-tee)</Text>
          <Text style = {{fontSize: 15}}> Visayan/Cebuano : MAAYO (Ma-AH-yoo)</Text>
          <Text style = {{fontSize: 15}}> English : I AM FINE{"\n"}</Text>
  
          <Text style = {{fontSize: 15}}> {"\n"}Filipino/Tagalog : PAKI (Pah-KEE)</Text>
          <Text style = {{fontSize: 15}}> Visayan/Cebuano  : PALIHOG (pah-LEE-hog)</Text>
          <Text style = {{fontSize: 15}}> English  : PLEASE{"\n"}</Text>
         
          <Text style = {{fontSize: 15}}> {"\n"}Filipino/Tagalog  : SALAMAT (sah-LAH-maht)</Text>
          <Text style = {{fontSize: 15}}> Visayan/Cebuano  : SALAMAT(sah-LAH-maht)</Text>
          <Text style = {{fontSize: 15}}> English  : THANK YOU{"\n"}</Text>
  
          <Text style = {{fontSize: 15}}> {"\n"}Filipino/Tagalog : WALANG ANUMAN (wah-LAHNG ah-noo-MAHN)</Text>
          <Text style = {{fontSize: 15}}> Visayan/Cebuano  :  WALA TO UY (wah-LAH to UY)</Text>
          <Text style = {{fontSize: 15}}> English  :  YOU’RE WELCOME{"\n"}</Text>
     
          <Text style = {{fontSize: 15}}> {"\n"}Filipino/Tagalog : INGAT (EEE-ngat)</Text>
          <Text style = {{fontSize: 15}}> Visayan/Cebuano  : PAG-AYOAYO</Text>
          <Text style = {{fontSize: 15}}> English  : TAKE CARE {"\n"}</Text>
    
          <Text style = {{fontSize: 15}}>{"\n"}Filipino/Tagalog : PAALAM (pah-AHL-ahm)</Text>
          <Text style = {{fontSize: 15}}> Visayan/Cebuano : ADTO NAKO (ad-TOO na-KOO)</Text>
          <Text style = {{fontSize: 15}}>English : GOODBYE{"\n"}{"\n"}</Text>
  
  
  
          <Text style = {{fontSize: 20, fontWeight: 'bold'}}> DIRECTIONS </Text>
          <Text style = {{fontSize: 15}}> {"\n"}Filipino/Tagalog  :  SAAN ANG…? (Sah-AHN ahng)</Text>
          <Text style = {{fontSize: 15}}> Visayan/Cebuano : ASA ANG…? (aSA ahng)</Text>
          <Text style = {{fontSize: 15}}> English  : WHERE IS THE…? {"\n"}</Text>
  
          <Text style = {{fontSize: 15}}> {"\n"}Filipino/Tagalog  :  KALIWA (kah-lee-WAH)</Text>
          <Text style = {{fontSize: 15}}> Visayan/Cebuano  :  WAL-LA (wal-LAH)</Text>
          <Text style = {{fontSize: 15}}> English  :  LEFT{"\n"}</Text>
         
          <Text style = {{fontSize: 15}}> {"\n"}Filipino/Tagalog  :  KANAN (KAH-nahn)</Text>
          <Text style = {{fontSize: 15}}> Visayan/Cebuano  :  TO-O)</Text>
          <Text style = {{fontSize: 15}}> English  :  RIGHT{"\n"}</Text>
  
          <Text style = {{fontSize: 15}}> {"\n"}Filipino/Tagalog  :  TAAS (tah-AHS))</Text>
          <Text style = {{fontSize: 15}}> Visayan/Cebuano :  TAAS (tah-AHS)</Text>
          <Text style = {{fontSize: 15}}> English  :  UP{"\n"}</Text>
     
          <Text style = {{fontSize: 15}}> {"\n"}Filipino/Tagalog    :  BABA (bah-BAH)</Text>
          <Text style = {{fontSize: 15}}> Visayan/Cebuano  :  UBUS (OOH-bosh)</Text>
          <Text style = {{fontSize: 15}}> English   :  DOWN {"\n"}</Text>
    
          <Text style = {{fontSize: 15}}>{"\n"}Filipino/Tagalog  :  DITO (DEE-toh)</Text>
          <Text style = {{fontSize: 15}}> Visayan/Cebuano   :  DINHE (den-HEE)</Text>
          <Text style = {{fontSize: 15}}>English   :  HERE{"\n"}</Text>
  
          <Text style = {{fontSize: 15}}>{"\n"}Filipino/Tagalog  :  DIYAN (dee-YAHN)`</Text>
          <Text style = {{fontSize: 15}}> Visayan/Cebuano : DIDTO (deed-toh)</Text>
          <Text style = {{fontSize: 15}}> English   : THERE{"\n"}{"\n"}</Text>
  
  
          <Text style = {{fontSize: 20, fontWeight: 'bold'}}> AS FOR MONETARY/AMOUNT/UNITS </Text>
          <Text style = {{fontSize: 15}}> {"\n"}Filipino/Tagalog  : PERA (PEHR-rah)</Text>
          <Text style = {{fontSize: 15}}> Visayan/Cebuano  :  KWARTA (KWARH-tah)</Text>
          <Text style = {{fontSize: 15}}> English  : MONEY {"\n"}</Text>
  
          <Text style = {{fontSize: 15}}> {"\n"}Filipino/Tagalog  :  MAGKANO (mahg-KAH-noh)</Text>
          <Text style = {{fontSize: 15}}> Visayan/Cebuano  : PILA MAN (PEE-lah manh)</Text>
          <Text style = {{fontSize: 15}}> English  :  HOW MUCH?{"\n"}</Text>
         
          <Text style = {{fontSize: 15}}> {"\n"}Filipino/Tagalog  : MAHAL (mah-HAHL)</Text>
          <Text style = {{fontSize: 15}}> Visayan/Cebuano  :  MAHAL (mah-HAHL)</Text>
          <Text style = {{fontSize: 15}}> English  : CHEAP{"\n"}</Text>
     
          <Text style = {{fontSize: 15}}> {"\n"}Filipino/Tagalog  :  PERA (PEHR-rah)</Text>
          <Text style = {{fontSize: 15}}> Visayan/Cebuano  : KWARTA (KWARH-tah)</Text>
          <Text style = {{fontSize: 15}}> English  : MONEY {"\n"}</Text>
    
          <Text style = {{fontSize: 15}}>{"\n"}Filipino/Tagalog  : ILAN (EE-lahn))</Text>
          <Text style = {{fontSize: 15}}> Visayan/Cebuano  : PILA KABUOK (PEE-lah KA-bowh-ook)</Text>
          <Text style = {{fontSize: 15}}> English   : HOW MANY…?{"\n"}</Text>
  
          <Text style = {{fontSize: 15}}>{"\n"}Filipino/Tagalog  : ISA (ee-SAH)`</Text>
          <Text style = {{fontSize: 15}}> Visayan/Cebuano  : USA (oh-SAH)</Text>
          <Text style = {{fontSize: 15}}> English  : ONE{"\n"}</Text>
  
          <Text style = {{fontSize: 15}}> {"\n"}Filipino/Tagalog : DALAWA (dah-lah-WAH)</Text>
          <Text style = {{fontSize: 15}}> Visayan/Cebuano : DUHA (doo-hah)</Text>
          <Text style = {{fontSize: 15}}> English  : TWO{"\n"}</Text>
  
          <Text style = {{fontSize: 15}}> {"\n"}Filipino/Tagalog  : TATLO (taht-LOH)</Text>
          <Text style = {{fontSize: 15}}> Visayan/Cebuano  : TULO (TOO-loh)</Text>
          <Text style = {{fontSize: 15}}> English  : THREE{"\n"}</Text>
  
  
          <Text style = {{fontSize: 15}}> {"\n"}Filipino/Tagalog  : MALAKI (mah-lah-KEE)</Text>
          <Text style = {{fontSize: 15}}> Visayan/Cebuano  :  DAKO (dah-KOO)</Text>
          <Text style = {{fontSize: 15}}> English  :  BIG{"\n"}{"\n"}{"\n"}{"\n"}</Text>
  
          <Text style = {{fontSize: 20, fontWeight: 'bold'}}> RESOURCE: </Text>
          <Text style = {{fontSize: 15}}> {"\n"}Filipino Words and Phrases for Traveler’s Use - TriptheIslands.com. (2013, February 11).</Text>
          <Text style = {{fontSize: 15}}> TriptheIslands.com.</Text>
          <Text style = {{fontSize: 15}}>  https://triptheislands.com/travel-tips/filipino-words-and-phrases-for-travelers-use/{"\n"}{"\n"}</Text>
        
          <Button title ="Back to Home"
         color = '#70A1FF'
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

  export default FilipinoBasicsScreen;