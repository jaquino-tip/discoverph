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

  export default PhilippineNationalSymbolsScreen;