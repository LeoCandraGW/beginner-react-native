import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Vanilajs() {
  const [dataUser, setDataUser] = useState({
    id: '',
    username: '',
    email: '',
    skill: '',
  });
  const getData = () => {
    fetch('http://10.0.2.2:8000/api/kuli/4')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDataUser(json.data);
      });
  };
  useEffect(() => {
    fetch('http://10.0.2.2:8000/api/kuli/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Kuliku Fetch Apiasd</Text>
      <Button title="Get Data" onPress={getData} />
      <View style={styles.wrapper}>
        <Text style={styles.wrapperText}>{dataUser.id}</Text>
        <Text style={styles.wrapperText}>{dataUser.username}</Text>
        <Text style={styles.wrapperText}>{dataUser.email}</Text>
        <Text style={styles.wrapperText}>{dataUser.skill}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  text: { textAlign: 'center'},
  wrapper: { padding: 20, backgroundColor: 'grey', borderRadius: 8, margin: 10, width: 200 },
  wrapperText: {textAlign:'center', fontSize:24, color:'white'}
});
