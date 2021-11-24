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

function FilipinoFoodsScreen ({navigation})  {
    return (
      <ScrollView style= {{backgroundColor: '#FCF7DE'}}>
      <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' , marginRight:25, marginLeft:25}}>
  
        {/* Adobo */}  
  
        <Image source = {{uri:'https://salu-salo.com/wp-content/uploads/2015/04/Pork-Adobo-3.jpg'}}
          style = {{ width:280, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}Adobo{"\n"}</Text>
         <Text style = {{fontSize: 15}}>It’s the Filipino dish everybody knows — the mighty adobo. 
         It is made by stewing meat (usually chicken, pork, or a combination of both) in soy sauce and vinegar, adding peppercorns 
         and bay leaves for that special flavour. Bonus leftovers tip: pull the meat from the bone and fry ’til crispy for some tasty adobo flakes.
         {"\n"}</Text>
  
        {/* Kare-Kare */}  
  
        <Image source = {{uri:'https://upload.wikimedia.org/wikipedia/commons/2/2d/Kare-kare_oxtail_stew_1.jpg'}}
          style = {{ width:280, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}Kare-Kare{"\n"}</Text>
         <Text style = {{fontSize: 15}}>This rich stew is made with peanut sauce and, customarily, oxtail, but other meatier cuts of beef can also be added in. 
         Many Filipinos will consider kare-kare incomplete without a serving of bagoong (fermented seafood paste) on the side.
         {"\n"}</Text>
  
        {/* Lechon */}  
  
       <Image source = {{uri:'https://primer.com.ph/tips-guides/wp-content/uploads/sites/5/2019/05/pepita-lechon.jpg'}}
          style = {{ width:280, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}Lechon{"\n"}</Text>
         <Text style = {{fontSize: 15}}>One of the top contenders among the best Filipino dishes (alongside adobo) is perhaps the famous lechon. 
         After all, it is hard to top a tasty, fully-roasted pig with perfectly crisp skin and juicy meat. 
         Find the best of this sinful treat on the island of Cebu, but this is almost always served at any grand Pinoy gathering or fiesta.
         {"\n"}</Text>
  
        {/* Sinigang */} 
  
         <Image source = {{uri:'https://www.lutongpinoyrecipe.com/wp-content/uploads/2020/12/lutong-pinoy-pork-sinigang-1200x900.jpg'}}
          style = {{ width:280, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}Sinigang{"\n"}</Text>
         <Text style = {{fontSize: 15}}>Sinigang is a Pinoy classic. A delicious sour broth usually made tangy by tamarind (sometimes kamias), 
         it’s filled with different vegetables and a meat of choice. 
         Popular variants include sinigang na baboy (pork), sinigang na hipon (shrimp), and sinigang na isda (fish).
         {"\n"}</Text>
  
        {/* Crispy Pata */} 
  
         <Image source = {{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Patio_Filipino_crispy_pata.JPG/1200px-Patio_Filipino_crispy_pata.JPG'}}
          style = {{ width:280, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}Crispy Pata{"\n"}</Text>
         <Text style = {{fontSize: 15}}>If you can’t get your hands on an entire lechon, a scrumptious crispy pata is an equally sinful alternative. 
         It’s a dish that takes the entire pig leg and deep fries it to perfection. 
         Serve with a soy-vinegar dipping sauce on the side with some chopped up garlic and chilli,
          and you’re on the road to your next favourite guilty pleasure.
          {"\n"}</Text>
  
        {/* Sisig */} 
  
         <Image source = {{uri:'https://cdn.i-scmp.com/sites/default/files/styles/square/public/d8/images/2019/09/18/scmp_16apr15_fe_foodshoot7_jonw6710.jpg?itok=MuawcWNK'}}
          style = {{ width:280, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}Sisig{"\n"}</Text>
         <Text style = {{fontSize: 15}}>Served sizzling on a hot stone plate, sisig is a favorite pulutan (beer chow) among Filipinos. 
         The meat is primarily chopped up parts of the pigs’ face — in the Philippines, no cut of the animal goes to waste. 
         Some recipes use either mayonnaise or raw egg (to be mixed in while hot) to give it a creamier texture but the classic way 
         is to incorporate pig’s brain into the dish.
         {"\n"}</Text>
  
        {/* Pancit Guisado */} 
  
         <Image source = {{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pancit_Ilonggo_Style_-_12110747826.jpg/1200px-Pancit_Ilonggo_Style_-_12110747826.jpg'}}
          style = {{ width:300, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}Pancit Guisado{"\n"}</Text>
         <Text style = {{fontSize: 15}}>One of the more popular Filipino dishes among foreigners with Pinoy friends (due to its customary presence in Filipino birthday parties) 
         is pancit (noodles), of which pancit guisado is perhaps the most well-known variant. This noodle dish is served as a symbol for long life, 
         hence an essential at birthday feasts. The sautéed noodles are complemented by sliced vegetables and meat (all cooked in broth, soy sauce, and fish sauce) 
         and kalamansi is squeezed over upon serving.
         {"\n"}</Text>
  
        {/* Bulalo */} 
  
         <Image source = {{uri:'https://pinoyfoodguide.com/wp-content/uploads/2020/10/Bulalo-1.jpg'}}
          style = {{ width:300, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}Bulalo{"\n"}</Text>
         <Text style = {{fontSize: 15}}>The perfect company for a cool, rainy day in the Philippines is a nice hot bowl of bulalo. 
         This tasty soup is made by slow-cooking beef shanks and bone marrow (still in the bone) in some water with fish sauce, onions, and peppercorn, 
         and later adding in some vegetables. Especially known for this dish is the province of Batangas in the country’s Southern Luzon region.
         {"\n"}</Text>
  
        {/* Palabok */} 
  
         <Image source = {{uri:'https://www.foxyfolksy.com/wp-content/uploads/2015/07/palabok-t-1.jpg'}}
          style = {{ width:300, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}Palabok{"\n"}</Text>
         <Text style = {{fontSize: 15}}>Vibrantly orange and jam-packed with different textures and flavours, palabok is another well-loved way of cooking pancit. 
         It is mixed in with a shrimp sauce, which gets its recognisable colour from annatto powder. 
         It is finished off with a variety of toppings such as slices of hard-boiled eggs, crushed chicharon (pork rinds),
         tinapa (smoked fish) flakes, and spring onions.
         {"\n"}</Text>
  
        {/* Silog */} 
  
         <Image source = {{uri:'https://cdn.shopify.com/s/files/1/0447/0367/8630/collections/PICKUPSTICKS_SILOG_MEALS_1.0_1200x1200.png?v=1596932151'}}
          style = {{ width:300, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}Filipino breakfast dishes (‘Silog’){"\n"}</Text>
         <Text style = {{fontSize: 15}}>A hearty Filipino breakfast typically consists of meat, sinangag (garlic fried rice), and itlog (egg). 
         Each dish name varies slightly depending on the meat that goes with the rice and egg. 
         So for example, a plate of tapa (cured beef), sinangag, and itlog, is called tapsilog. 
         A plate including tocino (sweet cured pork) instead of tapa is called tocilog. 
         While one that uses longganisa (sausages) is known as longsilog. These generous breakfast servings are a great way to kickstart a day.
         {"\n"} </Text>
  
        {/* Fried Lumpia (Lumpiang Shanghai) */} 
  
         <Image source = {{uri:'https://dubaiofw.com/wp-content/uploads/2020/04/lumpia.jpg'}}
          style = {{ width:300, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}Fried Lumpia (Lumpiang Shanghai){"\n"}</Text>
         <Text style = {{fontSize: 15}}>Another dish frequently expected to make an appearance at Filipino gatherings is the Pinoy’s version of the egg roll, lumpia. 
         These deep-fried rolls are filled with minced meat and vegetables and served with a sweet and sour dipping sauce. 
         Being so easy to make, lumpia is almost automatically part of a Filipino feast when food for the large Filipino family has to be cooked in copious amounts.
         {"\n"}</Text>
  
        {/* Beef Kaldereta */} 
  
         <Image source = {{uri:'https://anytots.com/wp-content/uploads/2021/02/Beef-Caldereta-Instant-Pot-1-720x540.jpg'}}
          style = {{ width:300, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}Beef Kaldereta{"\n"}</Text>
         <Text style = {{fontSize: 15}}>Kaldereta is a Filipino beef stew made extra rich and tasty by tomato sauce and liver paste. 
         Goat meat can also be used in place of beef and mixed in is a merrymaking of vegetables, which typically include carrots, bell peppers, and potatoes.
         {"\n"}</Text>
  
         <Image source = {{uri:'https://1.bp.blogspot.com/-_lnJ9Il1FrM/XSJ43Bqm1sI/AAAAAAAATYo/egMHLhIiHoAxdnpLj_aAHOf30ESk396-wCLcBGAs/s1600/dinuguan.jpg'}}
          style = {{ width:300, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}Dinuguan{"\n"}</Text>
         <Text style = {{fontSize: 15}}>Another Filipino stew, albeit a more eccentric one, is the dark-tinted dinuguan. 
         It’s made by cooking pork and innards in pig’s blood and vinegar. 
         It’s often eaten with puto, a slightly sweet steamed rice cake, which complements its savoury taste.
         {"\n"}</Text>
  
         <Image source = {{uri:'https://www.lutongpinoyrecipe.com/wp-content/uploads/2020/12/lutong-pinoy-inihaw-na-liempo-1200x900.jpg'}}
          style = {{ width:300, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}Inihaw na Liempo{"\n"}</Text>
         <Text style = {{fontSize: 15}}>Inihaw na liempo or grilled pork belly is juicy cuts of perhaps the tastiest part of the pig, 
         marinated and grilled, basting the meat as it cooks. 
         Depending on the desired taste, a typical liempo marinade can be a mixture of 
         any of the following: soy sauce, fish sauce, banana ketchup, garlic, kalamansi, brown sugar, salt, and pepper. 
         Eat with your hands, your sawsawan (dipping sauce) of choice, and a generous serving of plain rice — perfect.
         {"\n"}</Text>
  
         
         <Image source = {{uri:'https://www.ajinomoto.com.ph/web/wp-content/uploads/2018/12/ginataang-sigarilyas-sitaw-kalabasa.jpg'}}
          style = {{ width:300, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}Ginataang Gulay{"\n"}</Text>
         <Text style = {{fontSize: 15}}>Gata or coconut milk is basically culinary gold. Anything cooked in gata is bound to turn out fantastic. 
         For anyone needing a break from the typical meat-heavy Filipino dishes, simply cook your favourite vegetables in some coconut milk. 
         It works exceptionally well with squash and string beans, and some chilli can be added for an interesting kick.
         {"\n"}</Text>
  
         <Image source = {{uri:'https://www.foxyfolksy.com/wp-content/uploads/2020/07/chicken-inasal-640.jpg'}}
          style = {{ width:300, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}Chicken Inasal{"\n"}</Text>
         <Text style = {{fontSize: 15}}>This flavourful grilled chicken, the best of which is made in the city of Bacolod, 
         sits in a special marinade of vinegar, kalamansi, ginger, and lemongrass. It owes its appetising golden-brown colour to annatto oil, 
         which is also poured over the plain rice it is served with. Dip the chicken in sinamak (spiced vinegar) for some extra zest.
         {"\n"} </Text>
  
         <Image source = {{uri:'https://eatyourworld.com/images/staff_food_entries/Kilaw.jpg'}}
          style = {{ width:300, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}Kinilaw{"\n"}</Text>
         <Text style = {{fontSize: 15}}>Kilawin, also called kinilaw, is the Filipino ceviche. Seafood is often used, such as tuna and tanigue, 
         which is then cured in vinegar and kalamansi. Onions are usually added in, as well as some chilli for a more complex blend of flavours. 
         Kilawin is normally served as an appetiser or as pulutan (beer chow) when drinking.
         {"\n"}</Text>
  
         <Image source = {{uri:'https://upload.wikimedia.org/wikipedia/commons/c/cc/Lechon_Kawali.jpg'}}
          style = {{ width:300, height: 200}}
          />
         <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{"\n"}Lechon Kawali{"\n"}</Text>
         <Text style = {{fontSize: 15}}>Though not everybody has access to a backyard and a space to charcoal roast an entire pig, 
         there’s still a way to enjoy the guilt-inducing goodness of lechon — by cooking it in a kawali (wok). 
         Pork belly is cooked in boiling water (usually with bay leaves, peppercorn, and salt) until tender, air-dried, given a salt rub, 
         and deep fried until golden brown. The aim is perfect crackling skin and tender meat. Enjoy with lechon gravy or spiced vinegar.
         {"\n"}{"\n"}</Text>
  
        <Text style =  {{fontWeight:'bold',fontSize: 20}}>{"\n"} RESOURCES </Text>
        <Text style =  {{fontSize: 15}}>Escalona, K. (2017, December 26). The 21 Best Dishes To Eat in The Philippines. Culture Trip; The Culture Trip.</Text>
        <Text style =  {{fontSize: 15}}> https://theculturetrip.com/asia/philippines/articles/the-21-best-dishes-in-the-philippines/ {"\n"}</Text>
   
        <Button title ="Back to Home"
        color = '#FF7F50'
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

  export default FilipinoFoodsScreen;