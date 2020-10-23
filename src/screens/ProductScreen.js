import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, } from 'react-native';
import AppProduct from '../components/AppProduct';


const productList = [
  { 
    id: '1', 
    tittle: 'Ayam Geprek', 
    description: 'Sambal Geprek',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1590954975529-d404acb4f7f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  },
  { 
    id: '2', 
    tittle: 'Telor Dadar', 
    description: 'Sambal Tomat',
    price: 8000,
    image: 'https://images.unsplash.com/photo-1565636546452-3bb5a338729b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  },
  { 
    id: '3', 
    tittle: 'Keju', 
    description: 'Ektraksi Susu',
    price: 28000,
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80',
  }
];

const ProductScreen = ({navigation}) => 
{
  const productRender = ({item}) => 
  {
    return (
      <AppProduct product={item}/>
    )
  };
  return ( //return ProductScreen
    <SafeAreaView style={style.container}>
      <FlatList 
        data={productList}
        renderItem={productRender}
        keyExtractor={item => item.id}
      />
    </SafeAreaView> 
  )
  
  
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#00ffff'
  }
});

export default ProductScreen;