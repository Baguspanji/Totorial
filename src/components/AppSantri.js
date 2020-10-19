import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';


const AppSantri = ({santri}) => {
    console.warn(santri);

  return (
    <View style={style.container}>
        <View style={style.canvas}>
            <Image style={style.image} source={{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7-5_Nz4RElSxwF45kOXP7P0pIN9RycfsD6g&usqp=CAU'}}/>
        </View>
        <View style={style.div}>
            <Text style={style.titel}>{santri.name}</Text>
            <View style={style.row}>
                <Text style={style.state}>{santri.address.street}</Text>
            </View>
        </View>
    </View>
  );
}

const style = StyleSheet.create({
    container: {
        padding: 20,
        marginVertical: 10,
        marginHorizontal:10,
        backgroundColor: '#05a5fa',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    canvas: {
        padding:5,
        backgroundColor: '#808080',
        borderRadius: 10
    },
    image:{
        width: 140,
        height: 180,
        borderRadius: 10
    },
    titel : {
        fontSize : 20,
        color : 'orange',
        marginBottom: 5,
    },
    div: {
        marginHorizontal: 10,
        justifyContent: "flex-end",
        alignItems: 'flex-end'
    },
    row: {
        borderTopWidth: 2,
    },
    deskripsi: {
        fontSize : 20,
        color: 'blue',
    },
    state: {
        fontSize : 20,
        color: 'yellow',
    }
});


export default AppSantri;