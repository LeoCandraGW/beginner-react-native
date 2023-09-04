import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import keranjang from '../../image/keranjang.png';

export default function Cart(props: any) {
  return (
    <View>
      <View style={styles.cartwrapper}>
        <Image source={keranjang} style={styles.iconCart} />
        <Text style={styles.notif}>{props.quantity}</Text>
      </View>
      <Text style={styles.text}>Kernjang Belanja Anda</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    cartwrapper: {
        borderRadius: 93 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: 93,
        height: 93,
        borderWidth: 1,
        borderColor: 'grey',
        position: 'relative',
      },
      iconCart: {
        width: 50,
        height: 50,
      },
      text: {
        fontSize: 12,
        color: 'black',
        fontWeight: '700',
        marginTop: 8,
      },
      notif: {
        fontSize: 12,
        color: 'white',
        backgroundColor: 'green',
        padding: 4,
        borderRadius: 25,
        width: 24,
        height: 24,
        position: 'absolute',
        top: 0,
        right: 0,
      },
})