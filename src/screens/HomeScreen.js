import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
    console.log(navigation);
    return (
      <SafeAreaView style={style.container}>
        <View style={style.col} >
          <TouchableOpacity onPress={() => navigation.navigate('Interractive')}>
              <Text style={style.huruf} >InterractiveScreen</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Santri')}>
              <Image style={style.img} source={{uri : 'https://scontent.fsub9-1.fna.fbcdn.net/v/t1.0-9/p960x960/40901948_2154995611434081_5105080363764416512_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=VRFNCRgrU4EAX_bfT1D&_nc_ht=scontent.fsub9-1.fna&tp=6&oh=e0856e59617c10ed96d9532731142385&oe=5FB14368'}}/>
          </TouchableOpacity>
        </View>
        <View style={style.col}>
          <TouchableOpacity onPress={() => navigation.navigate('Product')}>
              <Text style={style.huruf} >Product Makanan</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 40,
    backgroundColor: '#00ffff',
    justifyContent: "space-around",
    alignContent: 'center',
    alignItems: 'center'
  },
  col: {
    borderRadius : 20,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    height: 100
  },
  huruf: {
    fontSize: 30,
    fontStyle: 'italic'
  },
  img: {
      height: 300,
      width: 300,
      borderRadius: 150
  }
})

export default HomeScreen;