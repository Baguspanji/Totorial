import React from 'react';
import { View, Button} from 'react-native';

const HomeScreen = ({ navigation }) => {
    console.log(navigation);
    return (
      <View>
        <Button
          title={"Go to Poducts"}
          onPress={() => navigation.navigate('Product')}
        />
      </View>
    );
}

const ProductScreen = () => {
  return <Text>This is Jane's profile</Text>;
};

export default HomeScreen;