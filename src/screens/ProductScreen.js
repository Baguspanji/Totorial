import React from 'react';
import { View, FlatList, SafeAreaView} from 'react-native';
import AppProduct from '../components/AppProduct';


const ProductScreen = () => {
  const productList = [
    { id: '1', tittle: 'Produk 1', description: 'Deskripsi 1'},
    { id: '2', tittle: 'Produk 2', description: 'Deskripsi 2'},
  ];

  const productRender = ({item}) => {
    return (
      <AppProduct tittle={item.tittle} description={item.description}/>
    )
  };

  return (
   <SafeAreaView>
     <FlatList
      data={productList}
      renderItem={productRender}
      keyExtractor={item => item.id}
     />
   </SafeAreaView> 
  )
}

export default ProductScreen;