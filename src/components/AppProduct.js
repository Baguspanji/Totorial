import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

const onPress = () => {
  Alert.alert("Alert Title", "My Alert Msg");
  console.log('Klik!!');
};

const AppProduct = ({ product }) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={style.card}>
        <Image style={style.img} source={{ uri: product.image }} />
        <Text style={style.tittle}>{product.tittle}</Text>
        <View style={style.row}>
          <Text style={style.description}>{product.description}</Text>
          <Text style={style.price}>Rp {product.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  card: {
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#ffffff",
  },
  img: {
    height: 250,
    borderRadius: 20
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 2,
  },
  tittle: {
    fontSize: 30,
    color: "#004080",
    fontWeight: "bold",
    textAlign: "center"
  },
  description: {
    fontSize: 20,
    color: "#ff8000",
  },
  price: {
    fontSize: 20,
    color: "#ff0000",
  },
});

export default AppProduct;
