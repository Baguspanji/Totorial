import React from 'react';
import { Text, View, StyleSheet} from 'react-native';


const AppProduct = (props) => {
    console.log(props);
  return (
    <View>
        <Text style={style.tittle}>{props.tittle}</Text>
        <Text style={style.description}>{props.description}</Text>
    </View>
  );
}

const style = StyleSheet.create({
    tittle : {
        fontSize : 30,
        color : 'black',
        fontWeight : 'bold',
        textAlign : 'center',
        textTransform : 'uppercase'
    },
    description: {
        fontSize : 20,
        color: 'red',
        textAlign : 'center'
    }
});


export default AppProduct;