import { Button, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function StylingComponent() {
  return (
    <View style={styles.card}>
      <Image source={{ uri: 'https://loremflickr.com/640/360' }} style={styles.image} />
      <Text style={styles.textTitle}>Kucing awikwok</Text>
      <Text style={styles.textprice}>Rp.29.000.000,00</Text>
      <Text style={styles.textlocation}>Jakardah</Text>
      <View style={styles.cardbutton}>
        <Text style={styles.textButton}>Beli</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    card:{backgroundColor: 'grey', padding: 12, width:212, borderRadius:8, margin:14},
    image: {width: 188, height: 107, borderRadius: 8},
    textTitle: {fontSize: 14, fontWeight: 'bold', color: 'black', marginTop: 12},
    textprice: {fontSize: 14, fontWeight: 'bold', color: 'black', marginTop: 12},
    textlocation: {fontSize: 12, fontWeight: 'bold', marginTop:12},
    cardbutton: {backgroundColor:'green',paddingVertical:6, borderRadius:25, marginTop:12},
    textButton: {fontSize:14, fontWeight:'bold',color:'white', textAlign: 'center'}
});
