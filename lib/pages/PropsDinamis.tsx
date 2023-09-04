import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';

const Story = (props: any) => {
  return (
    <View style={{ alignItems: 'center', marginRight: 20 }}>
      <Image
        source={{ uri: props.gambar }}
        style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
      />
      <Text style={{ maxWidth: 50, textAlign: 'center' }}>{props.judul}</Text>
    </View>
  );
};

export default function PropsDinamis() {
  return (
    <View>
      <Text>Materi pusing cuy</Text>
      <ScrollView horizontal>
        <View style={{ flexDirection: 'row' }}>
          <Story judul="Youtube Channel" gambar="https://loremflickr.com/640/360" />
          <Story judul="Kelas Online" gambar="https://loremflickr.com/640/360" />
          <Story judul="Kabayan Coding" gambar="https://loremflickr.com/640/360" />
          <Story judul="Youtube Channel" gambar="https://loremflickr.com/640/360" />
          <Story judul="Youtube Channel" gambar="https://loremflickr.com/640/360" />
          <Story judul="Youtube Channel" gambar="https://loremflickr.com/640/360" />
          <Story judul="Youtube Channel" gambar="https://loremflickr.com/640/360" />
          <Story judul="Youtube Channel" gambar="https://loremflickr.com/640/360" />
          <Story judul="Youtube Channel" gambar="https://loremflickr.com/640/360" />
        </View>
      </ScrollView>
    </View>
  );
}
