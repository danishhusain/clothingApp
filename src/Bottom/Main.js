import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Header from '../Common/Header';
import {Button, IconButton} from 'react-native-paper';
import {CartContext} from '../Context/CartContext';
import {
  product,
  tshirt,
  jeans,
  jacket,
  shirt,
  lower,
  hoodie,
} from '../DataBase/Api';
import {ImageSlider} from 'react-native-image-slider-banner';
import {useNavigation} from '@react-navigation/native';
import Details from '../Screens/Details';
import BuyScreen from '../Screens/BuyScreen';
import ImageSliding from '../Components/ImageSliding';
import {CustomButton} from '../CustomComponents/CustomButton';
import CustomColor from '../CustomComponents/CustomColor';
import HomeFlatList from '../Components/HomeFlatList';

const Main = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState(0);
  const [iconSelected, setIconSelected] = useState(false);
  const {cart, setcart} = useContext(CartContext);
  const {wishlist, setWishlist} = useContext(CartContext);
  const {setItemDetail} = useContext(CartContext);

  return (
    <View style={{flex: 1, paddingBottom: 53.5}}>
      <View style={{}}>
        <Header />
      </View>
      <View style={{width: '100%', height: 250}}>
        <ImageSliding />
      </View>

      <View style={{}}>
        <FlatList
          data={product}
          horizontal
          renderItem={({item}) => (
            <Button
              style={{margin: 5}}
              mode="contained"
              disabled={category == item.id ? true : false}
              onPress={() => setCategory(item.id)}>
              {item.title}
            </Button>
          )}
        />
      </View>

      {category == 0 && (
        <FlatList
          contentContainerStyle={{
            justifyContent: 'space-between',
          }}
          data={tshirt}
          renderItem={({item}) => <HomeFlatList item={item} />}
          keyExtractor={item => item.code}
          horizontal={false}
          numColumns={2}
        />
      )}

      {category == 1 && (
        <FlatList
          contentContainerStyle={{
            justifyContent: 'space-between',
          }}
          data={jeans}
          renderItem={({item}) => <HomeFlatList item={item} />}
          keyExtractor={item => item.code}
          horizontal={false}
          numColumns={2}
        />
      )}
      {category == 2 && (
        <FlatList
          contentContainerStyle={{
            justifyContent: 'space-between',
          }}
          data={jacket}
          renderItem={({item}) => <HomeFlatList item={item} />}
          keyExtractor={item => item.code}
          horizontal={false}
          numColumns={2}
        />
      )}
      {category == 3 && (
        <FlatList
          contentContainerStyle={{
            justifyContent: 'space-between',
          }}
          data={shirt}
          renderItem={({item}) => <HomeFlatList item={item} />}
          keyExtractor={item => item.code}
          horizontal={false}
          numColumns={2}
        />
      )}
      {category == 4 && (
        <FlatList
          contentContainerStyle={{
            justifyContent: 'space-between',
          }}
          data={lower}
          renderItem={({item}) => <HomeFlatList item={item} />}
          keyExtractor={item => item.code}
          numColumns={2}
        />
      )}
      {category == 5 && (
        <FlatList
          contentContainerStyle={{
            justifyContent: 'space-between',
          }}
          data={hoodie}
          renderItem={({item}) => <HomeFlatList item={item} />}
          keyExtractor={item => item.code}
          horizontal={false}
          numColumns={2}
        />
      )}
    </View>
  );
};

export default Main;
