import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React, { Component, useEffect, useState } from 'react';
import keranjang from '../image/keranjang.png';
import Cart from '../components/Cart/Cart';

export default function PositionReactNative() {
  return (
    <View style={styles.wrapper}>
      <Text>Materi Position awdwd</Text>
      <Cart></Cart>
      <FlexBox></FlexBox>
    </View>
  );
}
const FlexBox = () => {
  const [subs, setSubs] = useState(300);
  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      setSubs(500)
    }, 2000)
    return () => {
      console.log('did update');
    }
  }, [subs])
  // useEffect(() => {
  //   console.log('did update');
  //   setTimeout(() => {
  //     setSubs(500)
  //   }, 2000)
  // }, [subs])
  return (
    <View>
      <Text>{subs} subs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
wrapper: { padding: 20, alignItems: 'center' },
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

// class FlexBox extends Component {
//   constructor(props: any){
//     super(props);
//     console.log('===> constructor');
//     this.state = {
//       subs: 200,
//     }
//   }
//   componentDidMount(): void {
//     console.log('===> component did mount')
//     setTimeout(() => {
//       this,this.setState({
//         subs: 400,
//       })
//     }, 2000);
//   }
//   componentDidUpdate(): void {
//     console.log('===> component did update')
//   }
//   componentWillUnmount(): void {
//     console.log('component will unmount');
//   }
//   render(): React.ReactNode {
//     console.log('===> render')
//     return (
//       <View>
//         <Text>200 subs</Text>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   wrapper: { padding: 20, alignItems: 'center' },
//   cartwrapper: {
//     borderRadius: 93 / 2,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 93,
//     height: 93,
//     borderWidth: 1,
//     borderColor: 'grey',
//     position: 'relative',
//   },
//   iconCart: {
//     width: 50,
//     height: 50,
//   },
//   text: {
//     fontSize: 12,
//     color: 'black',
//     fontWeight: '700',
//     marginTop: 8,
//   },
//   notif: {
//     fontSize: 12,
//     color: 'white',
//     backgroundColor: 'green',
//     padding: 4,
//     borderRadius: 25,
//     width: 24,
//     height: 24,
//     position: 'absolute',
//     top: 0,
//     right: 0,
//   },
// });
