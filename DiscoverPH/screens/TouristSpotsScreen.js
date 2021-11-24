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
  
function TouristSpotsScreen  ({navigation}) {
    return (
      <ScrollView style= {{backgroundColor: '#FCF7DE'}}>
      <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center', marginRight:25, marginLeft:25 }}>
  
         <Image source = {{uri:'https://a.cdn-hotels.com/gdcs/production5/d320/a0c5a994-d99a-4278-a1b1-8a3b652461ac.jpg'}}
          style = {{ width:300, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Boracay</Text>
         <Text style = {{fontSize: 15}}>Famous for its oh-so-fine white sand beaches, amazing nightlife, and fun water activities, Boracay is the best tourist spot 
         in the Philippines to enjoy all the things you want in one place. 
         In fact, it’s always on the list of the world’s most beautiful islands by international travel magazines. 
         Whether you’re just aiming to get a tan at the world-famous beach or planning to try the heart-pounding water activities, 
         Boracay will give you everything you need.
         </Text>
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Best time to visit: </Text>
         <Text style = {{fontSize: 15}}>March to May (dry season)</Text>
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>How to get there: </Text>
         <Text style = {{fontSize: 15}}>From Manila, book a direct flight going to Caticlan or Kalibo, Aklan. Upon arrival at the airport, 
         you must ride a ferry bound for Boracay.
         </Text>
  
         <Image source = {{uri:'https://i.natgeofe.com/n/82dafc42-f5d9-4e17-814f-df30e2246fc1/chocolate-hills-bohol-island.jpg'}}
          style = {{ width:300, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Bohol</Text>
         <Text style = {{fontSize: 15}}>Home to the iconic Chocolate Hills and the world’s smallest primates, 
         Bohol is one of the most beautiful destinations in the Philippines. 
         With its stunning Bohol tourist spots, it’s no wonder that travelers and locals alike couldn’t help but be amazed.
         From historic sites and pristine beaches to waterfalls and a majestic cave, Bohol never fails to stun its visitors.
         </Text>
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Best time to visit: </Text>
         <Text style = {{fontSize: 15}}>March to May (dry season)</Text>
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>How to get there: </Text>
         <Text style = {{fontSize: 15}}>From Manila, book a direct flight bound for Bohol. If you’re coming from Cebu, just take a ferry to Bohol.
         </Text>
  
         <Image source = {{uri:'https://upload.wikimedia.org/wikipedia/commons/5/58/Bangui_Windmill.jpg'}}
          style = {{ width:300, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Ilocos</Text>
         <Text style = {{fontSize: 15}}>Visiting Ilocos is like traveling back in time because of its preserved Spanish Colonial town that even the world considers as 
         one of the best. Aside from the magnificent Vigan tourist spots, 
         what makes this tourist destination in the Philippines well-loved is its historical and cultural significance 
         that feeds not just wanderlust but also a traveler’s mind and soul. 
         </Text>
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Best time to visit: </Text>
         <Text style = {{fontSize: 15}}>March to May (dry season)</Text>
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>How to get there: </Text>
         <Text style = {{fontSize: 15}}>You can either take a plane for faster travel or a bus. But the cheapest way to travel to Ilocos Province is by bus. 
         Some of the buses that have direct trips daily are Partas, Dominion Bus Lines, Viron Transit, and St. Joseph/Aniceto Transit, 
         while Philippine Rabbit Bus Line, Fariñas, Maria de Leon, Florida, Baliwag, and RCJ Transit have regular trips that pass by Vigan via the Manila-Laoag route.
         </Text>
  
         <Image source = {{uri:'https://www.zenrooms.com/blog/wp-content/uploads/2020/05/camiguin-1-1280x720.jpg'}}
          style = {{ width:300, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Camiguin</Text>
         <Text style = {{fontSize: 15}}>Camiguin, an island-province in Northern Mindanao, was once an obscure location but now is among the top tourist destinations 
         in the Philippines. With so many Instagrammable Camiguin tourist spots, the Island Born of Fire becomes a favorite travel destination.
         From the pristine Camiguin Island tourist spots and jaw-dropping waterfalls to the glorious underwater world and historic structures from the Spanish colonial era, 
         Camiguin definitely makes up the ultimate feed goal that every ‘grammer aims for!
         </Text>
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Best time to visit: </Text>
         <Text style = {{fontSize: 15}}>March to May (dry season)</Text>
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>How to get there: </Text>
         <Text style = {{fontSize: 15}}>As of writing, there is no direct flight from Manila to Camiguin. Cagayan de Oro City is the gateway to Camiguin. 
         What you can do is book a flight from Manila to CDO. From CDO to Camiguin, the travel time is approximately over two hours including the land and sea travel.
         </Text>
  
         <Image source = {{uri:'https://media.philstar.com/photos/2019/08/02/gen8-banaue-rice-terraces2019-04-0123-49-03_2019-08-02_11-55-06.jpg'}}
          style = {{ width:300, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Ifugao</Text>
         <Text style = {{fontSize: 15}}>One of the most famous Philippine attractions is Ifugao Province where you’ll find the UNESCO World Heritage Site Banaue Rice Terraces. 
         But it’s not just the Banaue Rice Terraces you should look forward to because there are many other places in 
         Ifugao that will teach you the traditional way of life and culture.
         </Text>
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Best time to visit: </Text>
         <Text style = {{fontSize: 15}}>April to June</Text>
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>How to get there: </Text>
         <Text style = {{fontSize: 15}}>From Manila, ride a bus bound for Banaue. Travel time takes around 9 hours
         </Text>
  
         <Image source = {{uri:'https://www.traveldailymedia.com/assets/2020/03/siargao3.jpg'}}
          style = {{ width:300, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Siargao</Text>
         <Text style = {{fontSize: 15}}>Other than Siargao surfing, you’ll likely fall for this teardrop-shaped island’s pristine white beaches, coconut woodlands, 
         the clearest waters you’ve ever seen, and the sensational towering waves, as soon as you set your foot there. 
         What makes Siargao tourist spots an ideal travel destination is that it has remained unspoiled, remote, sparsely developed, 
         and still relatively under the radar, making it even more appealing to travelers who are craving natural beauty and a slower pace. 
         This tourist spot in Mindanao will surely captivate your heart.
         </Text>
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Best time to visit: </Text>
         <Text style = {{fontSize: 15}}>March to May; October to November</Text>
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>How to get there: </Text>
         <Text style = {{fontSize: 15}}>From Manila, you can book a flight or board a ferry bound for Siargao.
         </Text>
  
         <Image source = {{uri:'https://gttp.imgix.net/224942/x/0/mactan-cebu-watersports-land-highlights-guided-tour-with-lunch-and-transfer.jpg?ar=1.91%3A1&w=1200&fit=crop'}}
          style = {{ width:300, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Cebu</Text>
         <Text style = {{fontSize: 15}}>Cebu is a melting pot for food, arts, culture, religion, and island life in the Philippines. 
         The province does not disappoint its visitors with its amazingly beautiful Cebu tourist spots and fun activities to try. Dubbed as the Queen City of the South, 
         Cebu offers a unique travel experience as it is a place where city and paradise meet.
         </Text>
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Best time to visit: </Text>
         <Text style = {{fontSize: 15}}>January (for Sinulog Festival); March to May (dry season)</Text>
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>How to get there: </Text>
         <Text style = {{fontSize: 15}}>From Manila, book a direct flight going to Cebu.
         </Text>
  
         <Image source = {{uri:'https://media.cntraveler.com/photos/5668630dc3c9e01555a4d421/master/pass/palawan-philippines-coron-cr-alamy.jpg'}}
          style = {{ width:300, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Palawan</Text>
         <Text style = {{fontSize: 15}}>With the undeniable beauty of Palawan, it has already become a
         regular on the list of the world’s best islands of international travel
         magazines. Of course, this doesn’t come as a surprise. From the
         clear blue-green waters of lagoons and colorful reefs to pristine
         white beaches, what more can you ask for? The Palawan tourist
         spot has been the talk of the town, the world rather, because of its magnificent charm.
         </Text>
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Best time to visit: </Text>
         <Text style = {{fontSize: 15}}>March to May (dry season)</Text>
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>How to get there: </Text>
         <Text style = {{fontSize: 15}}>From Manila, there are flights that travel
        directly to all parts of Palawan but for El Nido, it’s mor expensive.
         </Text>       
  
         <Image source = {{uri:'https://images.summitmedia-digital.com/spotph/images/2017/11/02/Baler_DicasalarinCove.jpg'}}
          style = {{ width:300, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Baler</Text>
         <Text style = {{fontSize: 15}}>Believed to be the birthplace of surfing in the Philippines, Baler in
          Aurora Province is getting the attention not just of local travelers
          but also foreigners. While Baler is popular for its sensational
          waves, surfing isn’t the only thing you can do in this town. You’ll
          surely find the perfect Baler tourist spot that will charm you.
         </Text>
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Best time to visit: </Text>
         <Text style = {{fontSize: 15}}>What's great about surfing in Baler is that
         waves are present all year but the best Baler surfing season is
        from September to February.
        </Text>
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>How to get there: </Text>
         <Text style = {{fontSize: 15}}>From Manila, ride the Joy Bus that will take
         you directly to Baler. You can also ride the Victory Liner bound for
         Cabanatuan but you’ll have to transfer to another bus to reach
         Baler. Travel time to Baler is 5 to 6 hours.
         </Text>    
  
         <Image source = {{uri:'https://4.bp.blogspot.com/-KBzfbc_Chss/UFwBH2DWdfI/AAAAAAAAKls/F1DXQ51kvy4/s1600/00.jpg'}}
          style = {{ width:300, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Sagada</Text>
         <Text style = {{fontSize: 15}}>Sagada, home to spectacular views and breathtaking natural
          wonders, is one of the top tourist destinations in the
          Philippines, especially for backpackers.
          It’s also a popular soul-searching destination as the place offers
          sunny but cool weather, lush natural landscapes, and a sea of
          clouds that will let you think whether you’re still on Earth. This is
          where you’ll see the famous historical and mysterious hanging
          coffins, scenic and calming mountain valleys, rice terraces,
          limestone caves, stunning waterfalls, and friendly Igorots that let
          people discover its rich culture and traditions preserved over time. 
         </Text>
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Best time to visit: </Text>
         <Text style = {{fontSize: 15}}>During the wet season (November to February) where you can expect temperatures to be as low as 4°C.</Text>
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>How to get there: </Text>
         <Text style = {{fontSize: 15}}>From Manila, you can ride a bus bound for
         Baguio that will take about 4 to 6 hours of travel time. Upon arrival
         in Baguio, you will have to go to the bus terminal and ride the GL
         Trans Bus bound for Sagada. From there, it will take another 5 to
         6 hours to reach Sagada. 
         </Text>     
  
         <Image source = {{uri:'https://i2.wp.com/riley.ph/wp-content/uploads/2018/06/laguna-luisiana-hulugan-falls-1-5.jpg?ssl=1'}}
          style = {{ width:300, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Laguna</Text>
         <Text style = {{fontSize: 15}}>Because of its proximity to Manila, Laguna has become one of the
         favorite go-to destinations for weekend travelers. Just two to three
         hours away from Manila, you can already have your much-
         deserved staycation in Laguna! This province is home to so many
         natural wonders from waterfalls to hot springs. With this,
         any Laguna tourist spot is a no-fail.
         </Text>
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Best time to visit: </Text>
         <Text style = {{fontSize: 15}}>March to May (dry season)</Text>
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>How to get there: </Text>
         <Text style = {{fontSize: 15}}>From Manila, you can take a bus from Pasay,
         Cubao, or Buendia bound for Calamba or Santa Cruz. The travel
         time from Manila to Laguna is around 2 to 3 hours.
         </Text>          
  
         <Image source = {{uri:'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6f/44/87.jpg'}}
          style = {{ width:300, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Tagaytay</Text>
         <Text style = {{fontSize: 15}}>Whether you’re on for an adventure or just want a quick escape
        from the busy city life, Tagaytay never fails to satisfy the traveler
        in you. With many  Tagaytay tourist spots  to see, yummy dishes to
        try, and fun experiences not to miss out on while enjoying the cool
        weather, you will definitely have the vacation you’ve been looking for.
         </Text>
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Best time to visit: </Text>
         <Text style = {{fontSize: 15}}>All year</Text>
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>How to get there: </Text>
         <Text style = {{fontSize: 15}}>From Manila, Pasay, or Cubao, ride a bus
        bound for Nasugbu and tell the driver to drop you off in Tagaytay.
        There are also some buses that travel to Tagaytay directly.{"\n"}
         </Text>
  
        <Text style =  {{fontWeight:'bold',fontSize: 20}}> RESOURCE </Text>
        <Text style =  {{fontSize: 15}}>in. (2020, November 24). 20 Most Beautiful Tourist Spots in the Philippines. ZenRooms Blogs.</Text>
        <Text style =  {{fontSize: 15}}>https://www.zenrooms.com/blog/post/tourist-spot-in-the-philippines/{"\n"}{"\n"}</Text>
  
        <Button title ="Back to Home"
        color = '#57606F'
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

  export default TouristSpotsScreen;