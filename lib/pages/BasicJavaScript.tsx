import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function BasicJavaScript() {
  const nama = 'Leo Candra';
  let usia = 24;
  const isLakilaki = true;

  const hewan = {
    nama: 'wawan',
    jenis: 'Monyet',
    usia: 20,
    islokal: true,
    warna: 'Hitam',
    orangTua: {
      jantan: 'dia',
      betina: 'dia',
    },
  };

  const sapaDia = (name: any, age: any) => {
    return console.log(`hello ${name}, usia anda ${age}`);
  };
  sapaDia('Leo', 24);

  const namaOrang = ['leo', 'candra', 'candra', 'candra'];
  typeof namaOrang;

  const sapaHewan = (objectHewan: any) => {
    // let hasilSapa = '';
    // if(objectHewan.nama === 'wawan'){
    //     hasilSapa = 'Hallo wawan';
    // } else {
    //     hasilSapa = 'siapa namanya ?, dimana rumahnya?';
    // }
    // return hasilSapa;

    return objectHewan.nama === 'wawan' ? 'Hallo wawan' : 'siapa namanya ?, dimana rumahnya?';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Basic Javascript</Text>

      <Text>Name : {nama}</Text>
      <Text>Age: {usia}</Text>
      <Text>{sapaHewan(hewan)}</Text>
      {namaOrang.map((orang)=> <Text>{orang}</Text>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  textTitle: { textAlign: 'center' },
});
