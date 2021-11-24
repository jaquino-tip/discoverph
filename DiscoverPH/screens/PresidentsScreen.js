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

function PhilippinePresidentsScreen({navigation}) {
    return (
      <ScrollView style= {{backgroundColor: '#FCF7DE'}}>
          
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginRight:25, marginLeft:25 }}>
      
      <Image source = {{uri:'https://www.bayaniart.com/wp-content/uploads/2018/07/Emilio-Aguinaldo-1.jpg'}}
     style = {{ width: 170, height: 210 }}
     />
     <Text style = {{fontWeight:'bold', fontSize: 18}}>{"\n"}1st Philippine President{"\n"}</Text>
  <Text style =  {{fontWeight:'bold', fontSize: 20}}> General Emilio Aguinaldo </Text>
  <Text style =  {{fontSize: 15}}> (January 23, 1899 – April 1, 1901) {"\n"}</Text>
  <Text style =  {{ fontSize: 15}}> Controversially dubbed by some as the Philippine president who sold the Philippines independence, Gen. Emilio Aguinaldo's symbolic face can be found in the old 5-peso bill which is no longer used in the Philippines.
  You can find him in the 5-peso coin where an emblem of the Philippine flag during which the celebration of the Philippine Independence Day is celebrated can also be seen. He is also known for being the first president of the Philippines under the First Republic known in Philippine history back then as the Malolos Republic. {"\n"}
  </Text>
  
  <Text style =  {{fontWeight:'bold', fontSize: 20}}> Contributions and Achievements:{"\n"}</Text>
  <View style={{padding: 10,flexDirection: "column",marginLeft: 10,marginRight: 5,marginBottom: 3,justifyContent: "flex-start",width: '95%',}} >                              
  <Text style =  {{ fontSize: 15,textAlign:'left'}}> - First president of the first republic of the Philippines (R.P.)</Text>
  <Text style =  {{ fontSize: 15,textAlign:'left'}}> - Youngest general of the Hukbong Sandatahan in his time and also the country’s youngest president at age 28 </Text>
  <Text style =  {{ fontSize: 15, textAlign:'left'}}> - The longest living president who died at an old age of 94 years old </Text>
  <Text style =  {{ fontSize: 15, textAlign:'left'}}> - Leaders of Kataastaasang Kagalanggalangang Katipunan  </Text>
  <Text style =  {{ fontSize: 15, textAlign:'left'}}> - Pact of Biak na Bato signatory {"\n"}{"\n"}</Text>
  </View>
  </View>
  
  {/*Manuel Quezon*/}
  
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginRight:25, marginLeft:25}}>
  <Image source = {{uri:'https://historycms2.house.gov/uploadedImages/People/Listing/Q/Q000009.jpg'}}
     style = {{ width: 170, height: 210 }}
     />
     <Text style =  {{fontWeight:'bold', fontSize: 20}}>{"\n"} Manuel L. Quezon  </Text>
     <Text style =  {{ fontSize: 15}}> (November 15, 1935 – August 1, 1944) {"\n"}</Text>
     <Text style =  {{ fontSize: 15}}> As the “Father of National Language” (Ama ng Wikang Pambansa in Tagalog), Manuel Luis Quezon is Philippine president known to have died of a common man's disease, tuberculosis in his last few days in Saranac Lake, New York according to a wiki biography.
  You can find an interesting and unique memorabilia of his life-sized wax statue inside the Quezon Memorial Circle in Quezon City, a place named after his own and called Q.C. Rotonda. With many firsts under his biography according to wikipedia, below is a list.{"\n"}</Text>
  <Text style =  {{fontWeight:'bold', fontSize: 20}}> Contributions and Achievements:{"\n"}</Text>
  <View style={{padding: 10,flexDirection: "column",marginLeft: 10,marginRight: 5,marginBottom: 3,justifyContent: "flex-start",width: '95%',}} > 
  <Text style =  {{ fontSize: 15}}> - First Senate president elected as one of the Philippine Presidents in his time</Text>
  <Text style =  {{ fontSize: 15}}> - Won as the first president through a (nation-wide) national election</Text>
  <Text style =  {{ fontSize: 15}}> - First president under the Commonwealth</Text>
  <Text style =  {{ fontSize: 15}}> - Created the National Council of Education</Text>
  <Text style =  {{ fontSize: 15}}> - Initiated women’s rights in the Philippines during the Commonwealth regime</Text>
  <Text style =  {{ fontSize: 15}}> - Made Tagalog / Filipino as the national language of the Philippines, hence he is called "Ama ng Pambansang Wika"</Text>
  <Text style =  {{ fontSize: 15}}> - He is in the current twenty-peso bill</Text>
  <Text style =  {{ fontSize: 15}}> - To his legacy, his name was made as the remembering name of Quezon Boulevard, Quezon Avenue, Quezon province, Quezon City, Quezon Bridge and MLQU and MLQHS respectively in Manila</Text>
  <Text style =  {{ fontSize: 15}}> - His remains still lie at the Rotonda monument in Quezon Memorial Circle{"\n"}{"\n"}</Text>
      </View>
      </View>
  
     {/*Jose P. Laurel*/}
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginRight:25, marginLeft:25}}>
  <Image source = {{uri:'http://1.bp.blogspot.com/_fKN3EBKFb6I/SxFe09YSi4I/AAAAAAAAAGw/Tu3zaNaquDI/s1600/LAUREL.JPG'}}
     style = {{ width: 170, height: 250}}
     />
     <Text style =  {{fontWeight:'bold', fontSize: 20}}> {"\n"}Jose P. Laurel </Text>
     <Text style =  {{fontSize: 15}}> (October 14, 1943 – August 17, 1945) {"\n"}</Text>
     <Text style =  {{ fontSize: 15}}> The 3rd among Philippine presidents to assume office during the era of the Japanese occupation of World War II, Jose P. Laurel is the only Filipino president in his time to have been shot outside of combat.{"\n"}</Text>
  <Text style =  {{fontWeight:'bold', fontSize: 20}}> Contributions and Achievements:{"\n"}</Text>
  <View style={{padding: 10,flexDirection: "column",marginLeft: 10,marginRight: 5,marginBottom: 3,justifyContent: "flex-start",width: '95%',}} > 
  <Text style =  {{ fontSize: 15}}> - He organized KALIBAPI (Kapisanan sa Paglilingkod sa Bagong Pilipinas)</Text>
  <Text style =  {{ fontSize: 15}}> - He declared Martial Law in 1944</Text>
  <Text style =  {{ fontSize: 15}}> - His family became popular for establishing one of the pioneer universities in Manila - Lyceum of the Philippines{"\n"}{"\n"}</Text>
     </View>
     </View>
  
     {/*Sergio Osmeña*/}
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginRight:25, marginLeft:25}}>
  <Image source = {{uri:'https://punto.com.ph/wp-content/uploads/2019/09/Sergio_Omena.jpg'}}
     style = {{ width: 200, height: 250}}
     />
     <Text style =  {{fontWeight:'bold', fontSize: 20}}> {"\n"}Sergio Osmeña </Text>
     <Text style =  {{fontSize: 15}}> (August 1, 1944 – May 28, 1946) {"\n"}</Text>
     <Text style =  {{ fontSize: 15}}> Sergio Osmeña -  the second Philippine president and of the Commonwealth regime whose face appears in the 50-peso bill.{"\n"}</Text>
  <Text style =  {{fontWeight:'bold', fontSize: 20}}> Contributions and Achievements:{"\n"}</Text>
  <View style={{padding: 10,flexDirection: "column",marginLeft: 10,marginRight: 5,marginBottom: 3,justifyContent: "flex-start",width: '95%',}} > 
  <Text style =  {{ fontSize: 15}}> - The oldest president to resume office, this legend is already 65 when he became president of the Philippines</Text>
  <Text style =  {{ fontSize: 15}}> - He was the first Visayan to become president of the country (wikipedia)</Text>
  <Text style =  {{ fontSize: 15}}> - He joined then US Gen. Douglas McArthur in Leyte on October 20, 1944 starting the freedom of the Philippines from the Japanese during World War II - "Leyte Guld landing"</Text>
  <Text style =  {{ fontSize: 15}}> - It was during his regime, that the Philippine National Bank (PNB) has been rehabilitated and the country joined the International Monetary Fund (IMF)</Text>
  <Text style =  {{ fontSize: 15}}> - During his time, the popular Bell Trade Act was approved by the US Congress{"\n"}{"\n"}</Text>
     </View>
     </View>
  
      {/*Manuel Roxas*/}
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginRight:25, marginLeft:25}}>
  <Image source = {{uri:'http://4.bp.blogspot.com/-9dIg8Du2Nqw/TsH_sE1y44I/AAAAAAAAAc8/ossS2OgvKkY/s1600/216103_10150168538381661_521856660_6666814_4804502_n.jpg'}}
     style = {{ width: 200, height: 250}}
     />
     <Text style =  {{fontWeight:'bold', fontSize: 20}}> {"\n"} Manuel Roxas </Text>
     <Text style =  {{ fontSize: 15}}> (May 28, 1946 – April 15, 1948){"\n"} </Text>
     <Text style =  {{ fontSize: 15}}> He was the fifth Philippine president but was considered as the third and last president under the Commonwealth era making him the next first leader of the Third Republic of the Philippines (R.P.). Shortlived as he served for some reason, he only assumed office for a very short period of 1 year, 10 months and 18 days to be exact.{"\n"} </Text>
  <Text style =  {{fontWeight:'bold', fontSize: 20}}> Contributions and Achievements:{"\n"}</Text>
  <View style={{padding: 10,flexDirection: "column",marginLeft: 10,marginRight: 5,marginBottom: 3,justifyContent: "flex-start",width: '95%',}} > 
  <Text style =  {{ fontSize: 15}}> - Was inaugurated as the new and first president of the new Republic because the Philippines was finally free after the WW II</Text>
  <Text style =  {{ fontSize: 15}}> - In his time, the country has started reconstruction from war damage and the Philippines started breathing without foreign rule</Text>
  <Text style =  {{ fontSize: 15}}> - Under his term, the Philippine Rehabilitation Act and Philippine Trade Act laws were accepted by the congress</Text>
  <Text style =  {{ fontSize: 15}}> - He is in the 100 peso bill{"\n"}{"\n"}</Text>
     </View>
     </View>
  
      {/*Elpidio Quirino*/}
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginRight:25, marginLeft:25}}>
  <Image source = {{uri:'http://www.nndb.com/people/145/000098848/elpidio-quirino-1.jpg?w=144'}}
     style = {{ width: 170, height: 250}}
     />
     <Text style =  {{fontWeight:'bold', fontSize: 20}}> {"\n"} Elpidio Quirino</Text>
     <Text style =  {{fontSize: 15}}> (April 17, 1948 – December 30, 1953){"\n"} </Text>
     <Text style =  {{ fontSize: 15}}> Served first as the vice president of Manuel Roxas in his time and assumed to become the next leader and Philippine president when the latter died in 1948.{"\n"}</Text>
  <Text style =  {{fontWeight:'bold', fontSize: 20}}> Contributions and Achievements:{"\n"}</Text>
  <View style={{padding: 10,flexDirection: "column",marginLeft: 10,marginRight: 5,marginBottom: 3,justifyContent: "flex-start",width: '95%',}} > 
  <Text style =  {{ fontSize: 15}}> - Under his term in the Japanese occupation, Hukbalahap movement (Hukbong Bayan Laban sa mga Hapon) was active</Text>
  <Text style =  {{ fontSize: 15}}> - He created Social Security Commission now SSS</Text>
  <Text style =  {{ fontSize: 15}}> - He also created Integrity Board to monitor graft and corruption</Text>
  <Text style =  {{ fontSize: 15}}> - An important historical fact is during 1948, Quezon City was still the capital of the Philippines and not Manila</Text>
  <Text style =  {{ fontSize: 15}}> - An important figure of inflation / depletion is that in his regime, the peso and dollar exchange rate was 1 US = P2.00, a rate we can never regain from today's presidents{"\n"}{"\n"}</Text>
  </View>
  </View>
  
      {/*Ramon Magsaysay */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginRight:25, marginLeft:25}}>
  <Image source = {{uri:'http://www.officialgazette.gov.ph/images/uploads/08magsaysa.jpg'}}
     style = {{ width: 170, height: 250}}
     />
     <Text style =  {{fontWeight:'bold', fontSize: 20}}>{"\n"} Ramon Magsaysay </Text>
     <Text style =  {{fontSize: 15}}>(December 30, 1953 – March 17, 1957) {"\n"}</Text>
     <Text style =  {{ fontSize: 15}}> Born as a native of Iba, Zambales, he was a military governor, and engineer. He died on a plane crash on Dec. 1957, boarding the presidential plane named “Mt. Pinatubo".{"\n"}</Text>
  <Text style =  {{fontWeight:'bold', fontSize: 20}}> Contributions and Achievements:{"\n"}</Text>
  <View style={{padding: 10,flexDirection: "column",marginLeft: 10,marginRight: 5,marginBottom: 3,justifyContent: "flex-start",width: '95%',}} > 
  <Text style =  {{ fontSize: 15}}> - Popularized mambo Magsaysay song and dance</Text>
  <Text style =  {{ fontSize: 15}}> - Was a chairman of the Committee on Guerilla Affairs</Text>
  <Text style =  {{ fontSize: 15}}> - Popularly known as the "president of the masses"</Text>
  <Text style =  {{ fontSize: 15}}> - Was the first president sworn into office wearing Barong Tagalog in his inauguration</Text>
  <Text style =  {{ fontSize: 15}}> - His presidency was referred as the Philippines’ Golden Years for it was the cleanest and zero-corruption</Text>
  <Text style =  {{ fontSize: 15}}> - The Philippines was ranked 2nd in Asia’s clean and well-governed countries</Text>
  <Text style =  {{ fontSize: 15}}> - Allowed common Filipino masses to enter the president's house</Text>
  <Text style =  {{ fontSize: 15}}> - He established National Resettlement and Rehabilitation Administration (NARRA) among his agrarian reforms{"\n"}{"\n"}</Text>
     </View>
  </View>
  
     {/*Carlos P. Garcia*/}
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginRight:25, marginLeft:25}}>
  <Image source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToplYl5NMM3S7d0YhUH5HLbjB2Pld9YIc2lqSCUlLIpLUNcxhQV_KtyuWX2YGhNipy_PU&usqp=CAU'}}
     style = {{ width: 170, height: 250}}
     />
     <Text style =  {{fontWeight:'bold', fontSize: 20}}> {"\n"}Carlos P. Garcia </Text>
     <Text style =  {{fontSize: 15}}> (March 18, 1957 – December 30, 1961){"\n"}</Text>
     <Text style =  {{ fontSize: 15}}>A well renowned country lawyer in his time, Carlos P. Garcia was a critically acclaimed poet, teacher and self-proclaimed guerilla leader.
  Born in the province of Bohol, like Elpidio Quirino, he was the vice president of the former Philippine president in his time, Magsaysay.
  He also served as the secretary of Foreign Affairs for 4 years until he became president when Magsaysay died in 1957.{"\n"}</Text>
  <Text style =  {{fontWeight:'bold', fontSize: 20}}> Contributions and Achievements:{"\n"}</Text>
  <View style={{padding: 10,flexDirection: "column",marginLeft: 10,marginRight: 5,marginBottom: 3,justifyContent: "flex-start",width: '95%',}} > 
  <Text style =  {{ fontSize: 15}}> - Adopted the “Filipino First Policy”</Text>
  <Text style =  {{ fontSize: 15}}> - He established the Austerity Program focusing on Filipino trade and commerce</Text>
  <Text style =  {{ fontSize: 15}}> - Recognized and dubbed as the “Prince of Visayan Poets” and the “bard from Bohol”</Text>
  <Text style =  {{ fontSize: 15}}> - Cultural arts was strongly promoted during his term of tenure which was his nature as a leader</Text>
  <Text style =  {{ fontSize: 15}}> - The first president whose remains were buried in the "Libingan ng mga Bayani"{"\n"}{"\n"}</Text>
  </View>
  </View>
  
      {/* Diosdado Macapagal*/}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginRight:25, marginLeft:25}}>
  <Image source = {{uri:'https://i2.wp.com/www.nndb.com/people/139/000098842/diosdado-macapagal-1.jpg'}}
     style = {{ width: 170, height: 250}}
     />
     <Text style =  {{fontWeight:'bold', fontSize: 20}}> {"\n"} Diosdado Macapagal </Text>
     <Text style =  {{fontSize: 15}}> (December 30, 1961 – December 30, 1965){"\n"} </Text>
     <Text style =  {{ fontSize: 15}}>Born in Lubao, Pampanga, like his latter clan, the 2nd female Philippine president, Gloria Macapagal Arroyo, Diosdado Macapagal, was another lawyer and a professor in his time.{"\n"}</Text>
  <Text style =  {{fontWeight:'bold', fontSize: 20}}> Contributions and Achievements:{"\n"}</Text>
  <View style={{padding: 10,flexDirection: "column",marginLeft: 10,marginRight: 5,marginBottom: 3,justifyContent: "flex-start",width: '95%',}} > 
  <Text style =  {{ fontSize: 15}}> - Established the first Land Reform Law</Text>
  <Text style =  {{ fontSize: 15}}> - Was popular with farmers in his time</Text>
  <Text style =  {{ fontSize: 15}}> - He placed the Philippines currency – peso, on the currency exchange market</Text>
  <Text style =  {{ fontSize: 15}}> - Declared June 12 in 1898 as the Philippines’ official Independence Day</Text>
  <Text style =  {{ fontSize: 15}}> - Minimum Wage Law signatory</Text>
  <Text style =  {{ fontSize: 15}}> - Signatory to the creation of the Philippine Veteran’s Bank{"\n"}{"\n"}</Text>
   </View>
   </View>
  
      {/*Ferdinand Marcos*/}
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginRight:25, marginLeft:25}}>
  <Image source = {{uri:'https://pbs.twimg.com/media/Ehl-b5fXgAApBM_.jpg'}}
     style = {{ width: 170, height: 250}}
     />
     <Text style =  {{fontWeight:'bold', fontSize: 20}}> {"\n"}Ferdinand Marcos </Text>
     <Text style =  {{fontSize: 15}}> (December 30, 1965 – February 25, 1986) {"\n"}</Text>
     <Text style =  {{ fontSize: 15}}>Born from Sarrat, Ilocos Norte, Ferdinand Edralin Marcos was a lawyer, Senate President for 3 years who defended himself in his own few cases was also the longest running dictator Philippine president ever know in Philippine and world history.
  He was president for 21 years and was sent out of his office after the People Power Revolution. His wife, Imelda Marcos was a popular icon in his reign for owning so much of a signature shoe collection from all over the world.
  He had the most controversial terms of all Philippine presidents especially during his time when he declared and used Martial Law to remain in tenure as the highest government official in the country. He was the first ousted president due to excessive and oppressive use of power and was the first to voluntarily flee out of office because of EDSA People Power.
  He was indeed one of the best military and political tactician and brightest president who ever lived to retain the longest reign using his power and knowhow in Philippine laws as a lawyer. His wealth, still unknown even to his grave. He was ousted and so are his alleged ill-gotten wealth rumored and found in numerous Swiss accounts.{"\n"}</Text>
  <Text style =  {{fontWeight:'bold', fontSize: 20}}> Contributions and Achievements:{"\n"}</Text>
  <View style={{padding: 10,flexDirection: "column",marginLeft: 10,marginRight: 5,marginBottom: 3,justifyContent: "flex-start",width: '95%',}} > 
  <Text style =  {{ fontSize: 15}}> - Awakened the Filipino to put up the EDSA revolution during the 80's</Text>
  <Text style =  {{ fontSize: 15}}> - The first president to win a second term</Text>
  <Text style =  {{ fontSize: 15}}> - He declared Martial Law on Sept. 22, 1972 to which in my time I am born and called martial law baby</Text>
  <Text style =  {{ fontSize: 15}}> - Empowered and increased military population to fuel his dictatorship intents in the armed forces</Text>
  <Text style =  {{ fontSize: 15}}> - Led the Philippines in 1986 to become one of the most indebted countries in Asia thru IMF Worldbank funds</Text>
  <Text style =  {{ fontSize: 15}}> - The only president who had a record of building more schools, roads, bridges, hospitals and infrastructures than all former presidents did, combined</Text>
  <Text style =  {{ fontSize: 15}}> - The only president whose remains interred inside a refrigerated crypt to preserve his legacy by the family{"\n"}{"\n"}</Text>
  </View>
  </View>
  
      {/*Corazon Aquino*/}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginRight:25, marginLeft:25}}>
  <Image source = {{uri:'http://img.timeinc.net/time/photoessays/2009/cory_aquino_obit/cory_aquino_obit_01.jpg'}}
     style = {{ width: 170, height: 250}}
     />
     <Text style =  {{fontWeight:'bold', fontSize: 20}}> {"\n"}Corazon Aquino </Text>
     <Text style =  {{fontSize: 15}}>(February 25, 1986 – June 30, 1992){"\n"} </Text>
     <Text style =  {{ fontSize: 15}}>The first woman president of the Philippines and Asia at the same time, Cory Aquino is the wife of Benigno Aquino Jr. (who was assassinated during the Marcos regime allegedly for fueling the desire of Filipinos to free themselves from bondage of a dictator). She was born in Paniqui, Tarlac and of wealthy decent belonging to the haciendero Cojuangco clan.{"\n"}</Text>
  <Text style =  {{fontWeight:'bold', fontSize: 20}}> Contributions and Achievements:{"\n"}</Text>
  <View style={{padding: 10,flexDirection: "column",marginLeft: 10,marginRight: 5,marginBottom: 3,justifyContent: "flex-start",width: '95%',}} > 
  <Text style =  {{ fontSize: 15}}> - Was named Time Magazine's “Woman of the Year” in 1986 after EDSA revolution (People Power)</Text>
  <Text style =  {{ fontSize: 15}}> - Brought back the song "tie a yellow ribbon" and turned the color yellow as a symbol for freedom and democracy</Text>
  <Text style =  {{ fontSize: 15}}> - First female president of the Philippines and Asia simultaneously</Text>
  <Text style =  {{ fontSize: 15}}> - She’s known to bring back democracy in the country through a peaceful revolution known in world history as EDSA revolution</Text>
  <Text style =  {{ fontSize: 15}}> - Initiated the abolition of the repressive 1973 Marcos Constitution and brought about the making of the new Constitution of the Philippines for the FIlipino people</Text>
  <Text style =  {{ fontSize: 15}}> - Became popular with the term "filipino people" in her reign as Philippine president</Text>
  <Text style =  {{ fontSize: 15}}> - Signatory to Family Code of 1987 and 1191 Local Government Code</Text>
  <Text style =  {{ fontSize: 15}}> - She always initiated charitable and social activities helping the poor and the needy</Text>
  <Text style =  {{ fontSize: 15}}> - Being compared and cited as a modern-day Joan of Arc by political critics</Text>
  <Text style =  {{ fontSize: 15}}> - Her face appears in the latest 500 peso bill together with her husband Ninoy Aquino</Text>
  <Text style =  {{ fontSize: 15}}> - One of 100 Women of the world Who Shaped History</Text>
  <Text style =  {{ fontSize: 15}}> - 20 Most Influential Asians of the 20th Century</Text>
  <Text style =  {{ fontSize: 15}}> - One of 65 Great Asian Heroes</Text>
  <Text style =  {{ fontSize: 15}}> - Recipient of J. William Fulbright Prize for International Understanding{"\n"}{"\n"}</Text>
  </View>
  </View>
  
   {/*Fidel V. Ramos*/}
   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginRight:25, marginLeft:25}}>
  <Image source = {{uri:'http://philippineculturaleducation.com.ph/wp-content/uploads/2017/10/sk-ramos-fidel.jpg'}}
     style = {{ width: 238, height: 318}}
     />
     <Text style =  {{fontWeight:'bold', fontSize: 20}}>{"\n"}Fidel V. Ramos</Text>
     <Text style =  {{fontSize: 15}}> (June 30, 1992 – June 30, 1998) {"\n"}</Text>
     <Text style =  {{ fontSize: 15}}>A military general in his time when the former first female president resumed power over EDSA revolution, the popular name for this Philippine president is FVR. He was the chief-of-staff of the Armed Forces of the Philippines during Cory's regime before he became president. A civil engineer by college career, Ramos is a PMA bred elite. He brought back economic growth and stability in the country in spite of the Asian Financial Crisis in 1997. He is the first and only non-Catholic (protestant) president of the Philippines.{"\n"}</Text>
  <Text style =  {{fontWeight:'bold', fontSize: 20}}> Contributions and Achievements:{"\n"}</Text>
  <View style={{padding: 10,flexDirection: "column",marginLeft: 10,marginRight: 5,marginBottom: 3,justifyContent: "flex-start",width: '95%',}} > 
  <Text style =  {{ fontSize: 15}}> - During his reign, the country was cited as Asia’s Next Economic Tiger because he brought back economic growth</Text>
  <Text style =  {{ fontSize: 15}}> - The Philippines celebrated Centennial Independence in 1998</Text>
  <Text style =  {{ fontSize: 15}}> - The only Filipino who received British Knighthood from the United Kingdom, bestowed by Queen Elizabeth II (Knight Grand Cross of the Order of St. Michael and St. George)</Text>
  <Text style =  {{ fontSize: 15}}> - Led the 4th APEC Summit held in the Philippines</Text>
  <Text style =  {{ fontSize: 15}}> - His “Philippines 2000” vision made the Philippine Stock Exchange one of the best improving and rising economies in the world during mid-90s</Text>
  <Text style =  {{ fontSize: 15}}> - Death Penalty was reinstated in his time </Text>
  <Text style =  {{ fontSize: 15}}> - Signatory to peace talk agreement with the MNLF{"\n"}{"\n"}</Text>
  </View>
  </View>
  
   {/*Joseph Estrada*/}
   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginRight:25, marginLeft:25}}>
  <Image source = {{uri:'https://live.staticflickr.com/5559/14728676254_b7858a4cb3_b.jpg'}}
     style = {{ width: 170, height: 250}}
     />
     <Text style =  {{fontWeight:'bold', fontSize: 20}}>{"\n"}Joseph Estrada </Text>
     <Text style =  {{fontSize: 15}}>(June 30, 1998 – January 20, 2001){"\n"}</Text>
     <Text style =  {{ fontSize: 15}}>Erap para sa mahirap is his popular slogan. Joseph Ejercity Estrada is the first film actor to become president of a country next to Ronald Reagan. Because of his winning, all sorts of showbiz politicians sprouted like happy mushrooms in the arena.
     His governance had been through to numerous controversies and characterized by impeachments, slow economic growth and was later on convicted guilty of plunder case. The first president who was literally impeached and the second to flee the country by virtue of forced leave of office he was later on replaced by Gloria Macapagal Arroyo in aid of the People Power III in EDSA. Philippine economy was at its worst because of his proven corrupt leadership (as stated in wikipedia for convicted plunder).{"\n"}</Text>
  <Text style =  {{fontWeight:'bold', fontSize: 20}}> Contributions and Achievements:{"\n"}</Text>
  <View style={{padding: 10,flexDirection: "column",marginLeft: 10,marginRight: 5,marginBottom: 3,justifyContent: "flex-start",width: '95%',}} > 
  <Text style =  {{ fontSize: 15}}> - During his time, the MILF’s Camp Abubakar headquarters was reinforced by the military</Text>
  <Text style =  {{ fontSize: 15}}> - Popularized the "erap para sa mahirap" slogan which played a major role to his winning the presidency after the general (FVR) reign</Text>
  <Text style =  {{ fontSize: 15}}> - Supported against the Charter Change</Text>
  <Text style =  {{ fontSize: 15}}> - Was cited as one of the Three Outstanding Senators in 1989</Text>
  <Text style =  {{ fontSize: 15}}> - Was among the “Magnificent 12” who voted for the termination of US Military Bases Agreement and removal of US forces and all alleged armaments present in Clark Airbase and Subic Naval Base{"\n"}{"\n"}</Text>
  </View>
  </View>
  
  {/*Gloria Macapagal Arroyo */} 
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginRight:25, marginLeft:25}}>
  <Image source = {{uri:'https://www.onthisday.com/images/people/gloria-macapagal-arroyo-medium.jpg'}}
     style = {{ width: 170, height: 250}}
     />
     <Text style =  {{fontWeight:'bold', fontSize: 20}}>{"\n"}Gloria Macapagal Arroyo </Text>
     <Text style =  {{fontSize: 15}}>(January 20, 2001 – June 30, 2010){"\n"}</Text>
     <Text style =  {{fontSize: 15}}>Gloria Arroyo, a Capampangan native and daughter of ex-president Diosdado Macapagal, became the second female Philippine president. She was 14 back when she became familiar, moved and lived in the Malacanang Palace as the daughter of the president.
  The Oakwood Mutiny is her most popular seige during her tenure and is one of the first serious attempts to overthrow her uprooted claim to power thru EDSA revolution. With controversies and impeachments during her term, Gloria also got involved in the popular Hello Garci scandal which was one of the biggest obvious unproven disgrace to a president.{"\n"}</Text>
  <Text style =  {{fontWeight:'bold', fontSize: 20}}> Contributions and Achievements:{"\n"}</Text>
  <View style={{padding: 10,flexDirection: "column",marginLeft: 10,marginRight: 5,marginBottom: 3,justifyContent: "flex-start",width: '95%',}} > 
  <Text style =  {{ fontSize: 15}}> - Second female president of the country</Text>
  <Text style =  {{ fontSize: 15}}> - First and only female vice-president of the Philippines so far (to date)</Text>
  <Text style =  {{ fontSize: 15}}> - First president who had oath taking outside of a president's territory in Luzon</Text>
  <Text style =  {{ fontSize: 15}}> - An ex-professor of Economics at the Ateneo de Manila University she was one of the mentors of the current Philippine president, Noynoy Aquino</Text>
  <Text style =  {{ fontSize: 15}}> - Gained higher economic growth than the past 3 presidents before her</Text>
  <Text style =  {{ fontSize: 15}}> - Philippine economy grew at its fastest in 3 decades in 2007, GDP exceeding 7% growth as claimed by Malacanang press releases</Text>
  <Text style =  {{ fontSize: 15}}> - US ex-president Bill Clinton cited Gloria’s “tough decisions” because of her brilliant strategy to make the country's economy back in shape amidst the 2008 global financial crisis</Text>
  <Text style =  {{ fontSize: 15}}> - Peso became the best performing currency of the year in Asia in 2007</Text>
  <Text style =  {{ fontSize: 15}}> - eVAT Law was implemented during her reign as Philippine president{"\n"}{"\n"}</Text>
  </View>
  </View>
  
  {/*Benigno Aquino III*/}
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginRight:25, marginLeft:25}}>
  <Image source = {{uri:'https://worldleaders.columbia.edu/sites/default/files/styles/cu_crop/public/content/President%20Benigno%20S%20%20Aquino%20III%20official%20photo%20%282%29.jpg?itok=ua_NBUop'}}
     style = {{ width: 170, height: 250}}
     />
     <Text style =  {{fontWeight:'bold', fontSize: 20}}>{"\n"}Benigno Aquino III</Text>
     <Text style =  {{fontSize: 15}}>(June 30, 2010 – June 30,2016){"\n"}</Text>
     <Text style =  {{ fontSize: 15}}>Popularly known as PNoy, he is the son of the first female Philippine president and of Asia – Corazon Cojuangco Aquino. Real name is Simeon Benigno Aquino III a.k.a. NoyNoy or PNoy joined the House of Representatives and the Senate before his presidency.
  He is the first bachelor Philippine president who is still unmarried to this day, May 10, 2014. He is the only Philippine president I saw who had no idiot board and "codigo" of his speech during SONA.
  4 years of term led him to become popular with his mouth-stiff decisions and his SONA (state of the nation address) promises, PNoy is an idol to many but a failure to the militant group critics. His family is part owner of Hacienda Luisita which had been to the longest controversial Land Reform Law subject to this day.{"\n"}</Text>
  <Text style =  {{fontWeight:'bold', fontSize: 20}}> Contributions and Achievements:{"\n"}</Text>
  <View style={{padding: 10,flexDirection: "column",marginLeft: 10,marginRight: 5,marginBottom: 3,justifyContent: "flex-start",width: '95%',}} > 
  <Text style =  {{ fontSize: 15}}> - Popularized the no wang-wang policy</Text>
  <Text style =  {{ fontSize: 15}}> - Responsible for getting to know the noble Jesse Robredo as the secretary of DILG in 2010.</Text>
  <Text style =  {{ fontSize: 15}}> - He initiated the K-12 education in the Philippines during his term</Text>
  <Text style =  {{ fontSize: 15}}> - He renamed the Office of the Press Secretary into Presidential Communications Operations Office and appointed new officers</Text>
  <Text style =  {{ fontSize: 15}}> - He signed an EO about suspension of allowances and bonuses of GOCCs and GFIs board members</Text>
  <Text style =  {{ fontSize: 15}}> - Has paved peace in Mindanao thru the Bangsamoro Islamic Freedom Movement</Text>
  <Text style =  {{ fontSize: 15}}> - Cyber Crime Law was born during his term</Text>
  <Text style =  {{ fontSize: 15}}> - Responsible for restructuring of many government systems to his "tuwid na daan" progressive move{"\n"}{"\n"}</Text>
  </View>
  </View>
  
  {/*Rodrigo Roa Duterte */}
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginRight:25, marginLeft:25}}>
  <Image source = {{uri:'http://tokyo.philembassy.net/wp-content/uploads/2016/08/PRRD-PORTRAIT.jpg'}}
     style = {{ width: 170, height: 250}}
     />
     <Text style =  {{fontWeight:'bold', fontSize: 20}}>{"\n"}Rodrigo Roa Duterte </Text>
     <Text style =  {{fontSize: 15}}> (June 30, 2016 – Present){"\n"}</Text>
     <Text style =  {{ fontSize: 15}}>Lawyer and politician Rodrigo Duterte served seven terms as mayor of Davao City in the Philippines. In 2016, he became the 16th president of the Philippines.The son of a regional governor, Rodrigo Duterte graduated from law school in 1972 and joined the City Prosecution Office of Davao City. Duterte became Davao City mayor in 1988, and was reelected six times after forging a reputation for being tough on crime.
  Among Rodrigo Roa Duterte’s major achievements, seven stand out. On these achievements alone, he can claim to have been a good president.{"\n"}</Text>
  <Text style =  {{fontWeight:'bold', fontSize: 20}}> Contributions and Achievements:{"\n"}</Text>
  <View style={{padding: 10,flexDirection: "column",marginLeft: 10,marginRight: 5,marginBottom: 3,justifyContent: "flex-start",width: '95%',}} > 
  <Text style =  {{ fontSize: 15}}>  1. Tax reform, under Finance Secretary Sonny Dominguez, which made the Philippines one of the fastest-growing economies in Asia.{"\n"}</Text>
  <Text style =  {{ fontSize: 15}}>  2. Build, Build, Build, under Department of Public Works and Highways (DPWH) Secretary Mark Villar who raised infra spending to an average of 5.14 percent of GDP, from  Fidel Ramos 1.7 percent; Joseph Estrada 1.62 percent; Gloria Arroyo 1.5 percent; and Benigno Aquino III  2.7 percent.
  Duterte poured more money into infrastructure -- over P6 trillion in six years -- than any president before him, In the last five years alone, the DPWH under Villar built 145,000 classrooms, 2,000 school buildings, 5,555 bridges, and 26,500 kms. of roads, access roads, expressways, and tollways.{"\n"}</Text>
  <Text style =  {{ fontSize: 15}}>  3. Transportation modernization under Department of Transportation Secretary Art Tugade who made mass transportation safe, reliable, and available. 
  Tugade increased RoRo shipping routes from 120 (servicing 223 ships and 2.8 million vehicles) in 2016 to 181 by 2020. He targets additional 41 to service 325 ships and 4.8 million vehicles.  
  Art completed more than 200 airport projects, 400 seaports, and 21 new lighthouses to reach 564 lighthouses. New airport terminals were built for Mactan, Clark, Ormoc, and Kalibo.  Bicol Airport was restarted after an 11-year delay.  
  Night-rated airports increased from 14 in 2016 to 20 by June 2021.  
  NAIA improved from being one of the worst airports in the world to being the most improved by 2018.  The laglag-bala racket, where NAIA passengers were suddenly found to have bullets in their luggage (an excuse for huge extortion) stopped completely.
  Art has started building the impossible--a subway on EDSA.{"\n"} 
  </Text>
  <Text style =  {{ fontSize: 15}}>  4. Free college education for all with 1.6 million enjoying it by 2020, up 36 percent from 2019.
  According to Duterte, “we expanded the access of Filipinos to quality and equitable tertiary education through RA no. 10931 or the Universal Access to Quality Tertiary Education Act, which I signed on August 3, 2017.”
  This law provides various financial assistance and scholarships to student beneficiaries in state universities and colleges and local universities and colleges (SUCs and LUCs). This law, among others, institutionalized the Free Higher Education (FHE), Tertiary Education Subsidy (TES), Student Loan Program, and Free Technical and Vocational Education and Training (TVET).{"\n"}</Text>
  <Text style =  {{ fontSize: 15}}>  5.  An independent foreign policy
  Manila pivoted to Beijing without losing Washington’s friendship and support.  The US was forced to return the Balangiga bells of Samar which were seized by the US Army as war trophy after the locals wiped out an entire infantry regiment of 48 men and wounded 78 other American soldiers.  The Philippines had demanded the return of the bells which were used to signal the Filipino rebels to attack the US GIs.{"\n"}</Text>
  <Text style =  {{ fontSize: 15}}>  6.  Duterte reduced red tape for the masses and made oligarchs toe the line.
  Of course, under Duterte, crime went down but extrajudicial killings became rampant.  Now, the President faces the grim prospect of being tried before the International Criminal Court in The Hague for crimes against humanity.  Our Supreme Court has told Duterte to cooperate with the ICC.{"\n"}</Text>
  <Text style =  {{ fontSize: 15}}>  7.  Universal health care.  Insurance coverage expanded from 90 percent of the population to 100 percent.
  COVID-19 proved too complex to contain, despite 9,000 new treatment facilities with 140,000-bed capacity and 36 million in vaccine arrivals.  A Philippine Center for Disease Control is planned and a Virology Institute is under construction.
  “Thanks to Congress and our revenue generating agencies, our tax reforms sustained our economic growth from the third quarter of 2016 to the fourth quarter of 2019, which made the Philippines one of the fastest growing economies in Asia, until the pandemic scourge,” Duterte said in his SONA on July 26, 2021. {"\n"}</Text>   
  
  <Text style =  {{ fontSize: 20,fontWeight:'bold'}}> Key tax reform measures passed during Duterte’s first five years:{"\n"}</Text>
  <Text style =  {{ fontSize: 15}}> --RA No. 10963  Tax Reform for Acceleration and Inclusion (TRAIN) Law of Dec. 19, 2017 provides hefty income tax cuts for majority of Filipino taxpayers while raising additional funds to help support the government’s accelerated spending on its "Build, Build, Build” and social services program.</Text>
  <Text style =  {{ fontSize: 15}}> --RA No. 11213 Tax Amnesty Act, Feb. 14, 2019 -offers a one-time opportunity to taxpayers to settle estate tax amnesty program that gives reasonable tax relief to estates with outstanding estate tax liabilities</Text>
  <Text style =  {{ fontSize: 15}}> -RA No. 11346 Tobacco Tax Law, July 25, 2019, increases the excise taxes on tobacco products (e.g., cigars, cigarettes) and subjects to excise taxation and regulation heated tobacco products, and vapor products, popularly known as electronic cigarettes.</Text>
  <Text style =  {{ fontSize: 15}}> -RA No. 11467 Sin Tax Law, Jan. 22, 2020, increased taxes on alcohol beverages and electronic cigarettes.{"\n"}
  <Text style =  {{ fontSize: 15}}>In 2019, Duterte achieved the highest-ever tax revenue as a percentage of the Gross Domestic Product, 16.1 percent with a 2016-2019 average ratio of 15.3 percent, from 14 percent under Benigno Aquino III and 14.1 percent under Gloria Arroyo.</Text>
  <Text style =  {{ fontSize: 15}}>On March 26, 2021, Duterte signed into law RA no. 11534 or the Corporate Recovery and Tax Incentives for Enterprises Act (CREATE), the second package under our CTRP. CREATE is the largest fiscal stimulus for businesses in recent history, projected to provide private enterprises more than P1 trillion worth of tax relief over the next 10 years.</Text>
  <Text style =  {{ fontSize: 15}}>In addition, CREATE is a boon to MSMEs with the reduction of corporate income tax rate from 30 percent, to 20 percent, the largest ever reduction in the country. This law rationalizes fiscal incentives and creates an enhanced incentives package that is performance-based, time- bound, targeted, and transparent.</Text>
  <Text style =  {{ fontSize: 15}}>Coming to power in 2016, Duterte immediately directed all agencies and instrumentalities to respond to public requests and concerns within 15 days.</Text>
  <Text style =  {{ fontSize: 15}}>The enactment of RA no. 11032 or the Ease of Doing Business and Efficient Government Service Delivery Act (EODB Act) and the recent passage of RA no. 11517, which allows us to suspend the requirements for national and local permits for speedy response to national emergencies, enabled my Administration to serve our countrymen with world-class quality services, while making the Philippines the country of choice for investments.</Text>
  <Text style =  {{ fontSize: 15}}>Under Duterte, the Philippines improved its rank in the World Bank’s Doing Business Report, from 14th in2019 to 95th in 2020.</Text>
  <Text style =  {{ fontSize: 15}}>The  administration facilitated the speedy issuance of government-sanctioned permits and licenses.</Text>
  <Text style =  {{ fontSize: 15}}>Since taking effect in August 2016, the Revised Business Permit and Licensing System (BPLS) standards, a joint undertaking of the DILG, DTI, and Department of Information and Communications Technology (DICT), has seen the LGUs’ increasing compliance through the years. More than 7.50 million business establishments were registered from 2017 to June 2021.</Text>
  <Text style =  {{ fontSize: 15}}>To put an end to the public queuing endlessly in public offices, the administration launched the Central Business Portal (CBP) (www.business.gov. ph) Jan. 28, 2021.</Text>
  <Text style =  {{ fontSize: 15}}>This initiative adopted a whole-of-government approach as it linked the Securities and Exchange Commission (SEC), Bureau of Internal Revenue (BIR), social service agencies, and LGUs to allow applicants to transact their business registrations in one website.  The average processing time of registering corporations has been reduced from 33 to 7 days.{"\n"}{"\n"}</Text>
  </Text>
  </View>
  <View style={{padding: 10,flexDirection: "column",marginLeft: 10,marginRight: 5,marginBottom: 3,justifyContent: "flex-start",width: '95%',}} > 
  <Text style =  {{fontWeight:'bold', fontSize: 20}}> RESOURCES </Text>
  <Text style =  {{ fontSize: 15}}> Philippine Presidents. (2014). About Philippines.</Text>
  <Text style =  {{ fontSize: 15}}> https://www.mypilipinas.com/philippine-presidents.html </Text>
  <Text style =  {{ fontSize: 15}}> Duterte’s seven biggest achievements. (2021). Manila Standard.  </Text>
  <Text style =  {{ fontSize: 15}}> https://manilastandard.net/opinion/columns/virtual-reality-by-tony-lopez/361011/duterte-s-seven-biggest-achievements.html {"\n"}</Text>
  </View>
  
     <Button title ="Back to Home"
      color = '#1E90FF'
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

  export default PhilippinePresidentsScreen;