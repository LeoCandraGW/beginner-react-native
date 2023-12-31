import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import React, { Component, useState } from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text>{number}</Text>
      <Button title="tambah" onPress={() => setNumber(number + 1)} />
    </View>
  );
};

class CounterClass extends Component {
    state = {
        number: 0,
    }
  render(): React.ReactNode {
    return (
      <View>
        <Text>{this.state.number}</Text>
        <Button title="tambah" onPress={() => this.setState({number: this.state.number + 1})} />
      </View>
    );
  }
}

export default function StateDinamis() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>ini dia state dinammis</Text>
      <Text>Funcion Component</Text>
      <Counter></Counter>
      <Text>Class Component</Text>
      <CounterClass></CounterClass>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});
