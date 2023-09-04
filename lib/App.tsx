import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import PositionReactNative from './pages/PositionReactNative';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import CommunicationKomponent from './pages/CommunicationKomponent';
import Communication from './pages/CommunicationKomponent';
import StylingComponent from './pages/StylingComponent';
import BasicJavaScript from './pages/BasicJavaScript';
import Vanilajs from './pages/Vanilajs';

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     SetIsShow(false)
  //   }, 6000)
  // })
  return (
    <ScrollView>
      <View>
        <PositionReactNative></PositionReactNative>
        <StylingComponent></StylingComponent>
        <PropsDinamis></PropsDinamis>
        <StateDinamis></StateDinamis>
        <Communication></Communication>
        <BasicJavaScript></BasicJavaScript>
        <Vanilajs></Vanilajs>
      </View>
    </ScrollView>

    // <View>
    //   <View style={{width: 80, height: 80, backgroundColor: 'red'}}></View>
    //   <Text>Hello World</Text>
    //   <Candra></Candra>
    //   <Text>leo</Text>
    //   <Photo></Photo>
    //   <TextInput style={{borderWidth:1}}></TextInput>
    // </View>
  );
};

// const Candra = () => {
//   return <Text>candra gunawan</Text>;
// };

// const Photo = () => {
//   return (
//     <Image
//       source={{uri: 'https://loremflickr.com/640/360'}}
//       style={{width: 100, height: 100}}
//     />
//   );
// };
export default App;
