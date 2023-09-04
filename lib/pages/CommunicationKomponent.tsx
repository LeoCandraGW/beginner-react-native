import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Cart from '../components/Cart/Cart';
import Product from '../components/Product/Product';

const Communication = () => {
  const [totalProduct, setTotalProduct] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Komunikasi antar Component</Text>
      <Cart quantity={totalProduct}></Cart>
      <Product onButtonPress={() => setTotalProduct(totalProduct + 1)}></Product>
    </View>
  );
};

export default Communication;

const styles = StyleSheet.create({
  container: { padding: 20 },
  textTitle: { textAlign: 'center' },
});
