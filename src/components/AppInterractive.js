import React from 'react';
import { Text, View, StyleSheet} from 'react-native';


const AppStudent = (props) => {
    console.log(props);

    return (
        <View style={style.container}>
            <Text style={style.titel}>
                Nim    : {props.nim}
            </Text>
            <Text style={style.deskripsi}>
                Nama  : {props.nama}
            </Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {   
        marginVertical: 10,
        marginHorizontal:20
    },
    titel : {
        fontSize : 20,
        color : 'red',
        fontWeight : 'bold',
        textTransform : 'uppercase'
    },
    deskripsi: {
        fontSize : 20,
        color: 'blue',
    }
});


export default AppStudent;