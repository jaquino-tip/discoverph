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

function PhilippineFlagScreen({navigation}) {
    return (
      <ScrollView style= {{backgroundColor: '#FCF7DE'}}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginRight:25, marginLeft:25}}>
        <Image source = {{uri:'https://cdn.britannica.com/73/3473-004-6E573BFA/Flag-Philippines.jpg'}}
   style = {{ width: 400, height: 200}}
   />
   <View style={{padding: 10,flexDirection: "column",marginLeft: 10,marginRight: 5,marginBottom: 3,justifyContent: "flex-start",width: '95%',}} > 
   <Text style =  {{fontSize: 15}}> {"\n"} - 3 stars represent the three major island in the country: Luzon, Visayas and Mindanao.</Text>
   <Text style =  {{fontSize: 15}}>   - Sun with 8 rays represent the eight provinces that initiated the revolution, and they are Batangas, Bulacan, Cavite, Laguna, Manila, Morong, Nueva Ecija and Pampang.</Text>
   <Text style =  {{fontSize: 15}}>   - Blue represents “peace”. The blue colour part of the flag shall be at the top during peacetime. If the flag is displayed on the wall, the blue shall be on the left.</Text>
   <Text style =  {{fontSize: 15}}>   - Red represents “revolution” or “war”. The red maybe displayed on top during a time of war.</Text>
   <Text style =  {{fontSize: 15}}>   - The first flag had texts embedded.</Text>
   <Text style =  {{fontSize: 15}}>   - The flag below is the design of the first Philippine Republic flag unfurled by General Emilio Aguinaldo{"\n"}</Text>
   </View>
   <Image source = {{uri:'https://preview.redd.it/l4ush2o5gd271.png?width=1280&format=png&auto=webp&s=48102cea1c5efe75dbd44958c98d78dd36e3f89e'}}
   style = {{ width: 500, height: 250}}
   />
   <Text style =  {{fontSize: 15}}>{"\n"}            The flag is the country’s most cherished symbol. It is the nation’s emblem for freedom.  It symbolizes patriotism, love of country and sense of nationhood and embodies the aspirations and sentiments of the Filipino people in their unceasing quest for independence.  It stands as instrument of unity that binds the Filipino people.{"\n"}</Text>
   <Text style =  {{fontWeight:'bold',fontSize: 15}}>  The official adoption</Text>
   <Text style =  {{fontSize: 15}}>  It was on June 12, 1898, in Kawit, Cavite when General Emilio Aguinaldo, the first president of the Republic of the Philippines officially unfurled the national flag in the balcony of the General’s residence.{"\n"}</Text>
   <Text style =  {{fontWeight:'bold',fontSize: 15}}>  Made in Hong Kong</Text>
   <Text style =  {{fontSize: 15}}> The first flag was not made in the Philippines. The exiled Filipino resistance in Hong Kong conceptualized and stitched the first ever Philippine national flag.{"\n"}</Text>
   <Text style =  {{fontWeight:'bold',fontSize: 15}}>  The official size</Text>
   <Text style =  {{fontSize: 15}}> The Philippine flag does not have a strict official specific size, but its aspect ratio of 1:2 must be followed. If you design a flag with 2 feet height, the length must be 4 feet.{"\n"}{"\n"}</Text>
  
   <Image source = {{uri:'https://upload.wikimedia.org/wikipedia/commons/8/86/Philippines_flag_construction_sheet.png'}}
   style = {{ width:500, height: 250}}
   />
  <Text style =  {{fontWeight:'bold',fontSize: 20}}>{"\n"}{"\n"} RESOURCES </Text>
  <Text style =  {{fontSize: 15}}> The Philippine Flag: Symbol of our Sovereignty and Solidarity - National Historical Commission of the Philippines. (2012, September 5). National Historical Commission of the Philippines.  </Text>
  <Text style =  {{fontSize: 15}}> https://nhcp.gov.ph/the-philippine-flag-symbol-of-our-sovereignty-and-solidarity/ </Text>
  <Text style =  {{fontSize: 15}}> The Facts and Meaning of the Philippine Flag. (2020, March 24). Pilipinas.org.  </Text>
  <Text style =  {{fontSize: 15}}> https://pilipinas.org/the-facts-and-meaning-of-the-philippine-flag/ {"\n"}{"\n"}</Text>
  
  
  <Button title ="Back to Home"
   color= '#2ED573'
      onPress={() => navigation.navigate("Home")}/>
      </View>
      <View style={stylesCategories.homeButtonContainer}></View>
    </ScrollView>
  );
  };
  
  function PhilippineNationalSymbolsScreen  ({navigation}) {
    return (
      <ScrollView style= {{backgroundColor: '#FCF7DE'}}>
      <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center', marginRight:25, marginLeft:25 }}>
  
        {/* National Tree */}
  
        <Image source = {{uri:'http://1.bp.blogspot.com/-944l8acB4I4/T54ZLReTwpI/AAAAAAAAkJA/WIQFmGrscME/s1600/Narra%2Bphilippines.jpg'}}
        style = {{ width:300, height: 300}}
        />
       <Text style =  {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}National Tree: "Narra"{"\n"}</Text>
       <Text style =  {{fontSize: 15}}> Narra (Pterocarpus indicus) is a beautiful and strong tree. 
       It is a favorite wood for furniture but because there are only a few trees left, cutting down a Narra tree is no longer allowed. 
       It is found in Bicol, Mindanao and the Cagayan Valley forests. {"\n"}</Text>
  
        {/* National Flower */}
  
       <Image source = {{uri:'https://readnational.com/wp-content/uploads/2017/05/National-flower-of-philippine-Sampaguita.jpg'}}
        style = {{ width:300, height: 350}}
        />
       <Text style =  {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}National Flower: "Sampaguita"{"\n"}</Text>
       <Text style =  {{fontSize: 15}}> The Sampaguita (jasminium sambac) has white, star-shaped blossoms. It has a sweet fragrance. 
       It opens at night and wilts in less than a day. The white flowers are often made into garlands and its extract made into perfumes. 
       It is not a tree. It is a woody vine.{"\n"} </Text>
  
        {/* National Bird */}
  
       <Image source = {{uri:'https://static.wikia.nocookie.net/parody/images/7/7f/Philippine_Eagle.jpg/revision/latest?cb=20190118140734'}}
        style = {{ width:300, height: 350}}
        />
       <Text style =  {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}National Bird: "Philippine Eagle"{"\n"}</Text>
       <Text style =  {{fontSize: 15}}>The Philippine eagle (pithecopaga jeffery) stands over 3 feet (1m) tall. It has a large, sharp, curved beak. 
       It has feathers that seem to bristle on its head. It is a raptor. Raptors are excellent hunters.  
       It lives in tropical rain forests. It lays just one or two eggs each year. There are only a few of them now because of the vanishing trees in our mountains.{"\n"}</Text>
  
        {/* National Hero */}
  
       <Image source = {{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Jose_rizal_01.jpg/640px-Jose_rizal_01.jpg'}}
        style = {{ width:300, height: 700}}
        />
       <Text style =  {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}National Hero: "Jose Rizal"{"\n"}</Text>
       <Text style =  {{fontSize: 15}}>He is considered by many Filipinos as the national hero of the Philippines. His works had a profound influence on 
       Philippine nationalism during the last two decades of the 20th century. 
       Many believe that his works, particularly the “Noli Me Tangere” and “El Filibusterismo,” 
       helped change the course of history in the Philippines during that time.{"\n"}</Text>
  
        {/* National Leaf */}
  
       <Image source = {{uri:'http://3.bp.blogspot.com/-puZo0dGp_sI/ThSi5e3BF0I/AAAAAAAAAWg/-sJuMOHwGe8/s1600/thepinoywarrior+anahaw.jpg'}}
        style = {{ width:300, height: 300}}
        />
       <Text style =  {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}National Leaf: "Anahaw"{"\n"}</Text>
       <Text style =  {{fontSize: 15}}>Anahaw leaves come from a large tropical palm and the leaves are shaped like a fan. 
       They are large and attractive and they can be used as a fan during hot days, 
       although nowadays people use electric fans and air-cons to cool themselves during summer. 
       Anahaw leaves are sometimes used as an award symbol.{"\n"} </Text>
  
        {/* National Fish */}
  
       <Image source = {{uri:'http://images.summitmedia-digital.com/yummyph/images/2021/03/12/bangus.jpg'}}
        style = {{ width:370, height: 200}}
        />
       <Text style =  {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}National Fish: "Bangus" (Milkfish){"\n"}</Text>
       <Text style =  {{fontSize: 15}}>The “bangus” is a favorite food of the Filipinos. Filipinos have learned to cook the "bangus" in a variety of ways. 
       It can be fried, stewed, steamed or grilled. “Pritong bangus” (fried milkfish), 
       “sinigang na bangus” (milkfish stew) and “inihaw na bangus” (grilled milkfish) are some main dishes in which the main ingredient is the "bangus.”{"\n"}</Text>
  
        {/* National Gem */}
  
       <Image source = {{uri:'http://userscontent2.emaze.com/images/280881d3-7bc9-43ab-85ca-ced4e24b6df2/635448268107790072_perlas.jpg'}}
        style = {{ width:350, height: 200}}
        />
       <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}National Gem: "Perlas" (Pearl){"\n"}</Text>
       <Text style = {{fontSize: 15}}>The Philippine pearl (Pinctada maxima) industry is one of the most lucrative in the world. 
       The pearl had, in fact, been discovered in 2006 but was only revealed 
       to the press by the pearl farmer who found it 10 years later, in 2016. 
       He had reportedly kept it hidden under his bed as a good-luck charm.{"\n"}</Text>
  
        {/* National Fruit */}
  
       <Image source = {{uri:'https://morefun.ph/wp-content/uploads/2019/06/Mango01.jpg'}}
        style = {{ width:380, height: 200}}
        />
       <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}National Fruit: "Mangga" (Mango){"\n"}</Text>
       <Text style = {{fontSize: 15}}>This is one fruit that Filipinos love to eat when ripe. It has a smooth, golden yellow skin and a very sweet taste. 
       Usually, it is eaten as a dessert or as a light snack. As a snack, it is, sometimes, eaten in combination with suman, 
       a Filipino food made of sticky rice. The unripe variety of the fruit is well liked, too. 
       It is eaten as a side dish and often mixed with diced tomatoes and onions and bagoong, which a Filipino condiment.{"\n"}</Text>
  
        {/* National House */}
  
       <Image source = {{uri:'https://i.pinimg.com/originals/15/bb/62/15bb624141244f2d76a17815316fe617.jpg'}}
        style = {{ width:380, height: 260}}
        />
       <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}National House: "Bahay Kubo" (Nipa Hut){"\n"}</Text>
       <Text style = {{fontSize: 15}}>This traditional type of house can still be seen in many parts of the country. 
       It is a simple house made from wood that is available in the community and it has a thatched roof.{"\n"} </Text>
  
        {/* National Sport */}
  
       <Image source = {{uri:'https://qph.fs.quoracdn.net/main-qimg-fd2ce50005ef21f96a4d5180eb77adc8-lq'}}
        style = {{ width:320, height: 320}}
        />
       <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}National Sport: "Arnis"{"\n"}</Text>
       <Text style = {{fontSize: 15}}>Former President Gloria Macapagal Arroyo declared arnis as the national sport of the Philippines in 2009. 
       Arnis has multiple names across the Philippines such as Eskrima, Kali, and Garrote. 
       It's a Filipino Martial art that usually involves one or two sticks used to strike, thrust, and parry for defence and offence.{"\n"}</Text>
  
        {/* National Dress for Men */}
  
       <Image source = {{uri:'https://asiaexplorers.weebly.com/uploads/3/0/1/3/30137225/9995103.jpg'}}
        style = {{ width:200, height: 320}}
        />
       <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}National Dress for Men: "Barong Tagalog"{"\n"}</Text>
       <Text style = {{fontSize: 15}}>This traditional type of dress for men is made from pina or ramie or similar fabric. 
       In the past, it is often used as formal attire but, nowadays, 
       the short-sleeve version of the barong serves as semi-formal attire.{"\n"}</Text>
  
        {/* National Dress for Women */}
  
       <Image source = {{uri:'https://primer.com.ph/tips-guides/wp-content/uploads/sites/5/2017/05/barot-saya-20th-century.jpg'}}
        style = {{ width:200, height: 300}}
        />
       <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}National Dress for Women: "Baro at Saya"{"\n"}</Text>
       <Text style = {{fontSize: 15}}>This is a beautiful formal gown worn by Filipino women during special occasions or official functions. 
       The gown symbolizes all that is good about the femininity of Filipino women.{"\n"}</Text>
  
        {/* National Dance */}
  
       <Image source = {{uri:'https://img.theculturetrip.com/450x/smart/wp-content/uploads/2018/06/5374657701_fe130ce77c_b.jpg'}}
        style = {{ width:250, height: 300}}
        />
       <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}National Dance: "Tinikling"{"\n"}</Text>
       <Text style = {{fontSize: 15}}>One of the most popular folk dances in the Philippines is the Tinikling. 
       The traditional dance, which usually involves a pair of two bamboo poles, 
       is considered to be the oldest in the country and its appeal has spread across 
       the globe—particularly to the United States. Wondering how this type of dance got its name? The Tinikling is said to be named after 
       the long-legged bird called the tikling in the Philippines. This bird belongs to a number of rail species, but the name typically 
       refers to the slaty-breasted Rail (Gallirallus striatus), the buff-banded Rail (Gallirallus philippensis), 
       and the barred rail (Gallirallus torquatus).{"\n"}</Text>
  
        {/* National Anthem */}
  
       <Image source = {{uri:'https://slideplayer.com/slide/2907554/10/images/2/Philippine+National+Anthem.jpg'}}
        style = {{ width:400, height: 320}}
        />
       <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}National Anthem: "Lupang Hinirang"{"\n"}</Text>
       <Text style = {{fontSize: 15}}>Caviteño Julian Felipe composed the music to our national hymn. Jose Palma wrote the poem entitled Filipinas. 
       It became the words of our anthem. We sing our national hymn to signify our unity as a nation. 
       It is sung during flag-raising ceremonies and whenever there is an official and important event. 
       We stand proud when we sing it, placing our right hand on our left breast, 
       and we remember our heroes who gave their lives for our independence.{"\n"}
       </Text>
  
        {/* Philippine Flag */}
  
       <Image source = {{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/1200px-Flag_of_the_Philippines.svg.png'}}
        style = {{ width:400, height: 200}}
        />
       <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}The Philippine Flag{"\n"}</Text>
       <Text style = {{fontSize: 15}}>Our most important symbol is our national flag. 
       The flag of the Philippines shall be red, white and blue, with a sun and three stars, 
       as consecrated and honored by the people and recognized by law. The 3 stars symbolize Luzon, Panay, and Mindanao, 
       the three known principal islands then. The sun’s 8 rays symbolize the first 8 provinces (Batangas, Bulacan, Cavite, 
       Laguna, Tarlac, Nueva Ecija, Pampanga, and Manila, a province then) that fought for the Katipunan’s struggle for the country’s freedom from Spain. 
       If our country is at peace, the blue stripe is on top. If our country is at war, the red stripe is on top.{"\n"}
       </Text>
  
       <Text style =  {{fontWeight:'bold',fontSize: 20}}>{"\n"} RESOURCES </Text>
      <Text style =  {{fontSize: 15}}> National Symbols - National Commission for Culture and the Arts. (2016, January 7). 
      National Commission for Culture and the Arts. 
      </Text>
      <Text style =  {{fontSize: 15}}> https://ncca.gov.ph/childrens-corner/our-country/national-symbols/ </Text>
      <Text style =  {{fontSize: 15}}> Ryanne Co. (2020). National Symbols Of The Philippines: A Quick Look In Time For The Independence Day 2020. Tatler Asia.</Text>
      <Text style =  {{fontSize: 15}}> https://www.tatlerasia.com/culture/arts/a-quick-look-at-the-national-symbols-of-the-philippines</Text>
      <Text style =  {{fontSize: 15}}> Notes on the Filipino Culture. (2014). Hearts Philippines and Then Some.</Text>
      <Text style =  {{fontSize: 15}}> https://philippines-atbp.jimdofree.com/ph-profile-filipino-culture-national-symbols/{"\n"}</Text>
  
      <Button title ="Back to Home"
      color= '#ECCC68'
      onPress={() => navigation.navigate("Home")}/>
      <View style={stylesCategories.homeButtonContainer}></View>
      </View>
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

  export default PhilippineFlagScreen;