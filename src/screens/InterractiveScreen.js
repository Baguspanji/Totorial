import React, { useState } from 'react';
import { View, Button, StyleSheet, Text} from 'react-native';


const InterractiveScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={style.container}>
      <Button
        title={'Tambah'}
        onPress= { () => setCount(count + 1)}
      />
      <View style={style.col}>
        <Text style={style.huruf}>You Clicked {count} Times</Text>
      </View>
      <Button
        title={'Reset'}
        onPress= { () => setCount(0)}
      />
    </View>
  )

}

const style = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 500,
    marginRight: 50,
    marginLeft: 50,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8080ff'
  },
  col : {
    padding:10,
  },
  huruf : {
    fontSize: 30,
    color: '#ff8040'
  }


});

export default InterractiveScreen;