import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <SafeAreaView style={style.container}>
        <View style={style.col} >
          <TouchableOpacity onPress={() => navigation.navigate('Interractive')}>
              <Text style={style.huruf} >Interractive Screen</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Santri')}>
              <Image style={style.img} source={{uri : 'https://i.pinimg.com/originals/69/6b/8b/696b8b8aa775971c56533fca526c879f.png'}}/>
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