import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Image, StyleSheet, Button, Text} from 'react-native';
import {ImageSlider, ImageCarousel} from 'react-native-image-slider-banner';
import {IconButton} from 'react-native-paper';
import BuyScreen from '../Screens/BuyScreen';

const ImageSliding = () => {
  const navigation=useNavigation()
  return (
    <View
      style={{
        backgroundColor: 'blue ',
        width: '100%',
        height: 275,
        bottom: 21,
      }}>
      <ImageSlider
        data={[
            {
                img: 'https://img.freepik.com/free-vector/online-shopping-concept-landing-page_52683-11069.jpg?w=996&t=st=1673030796~exp=1673031396~hmac=c3100ee2fe32e6131c5a31f67a2a7390ad5cc5c2a407fd1152d3ed7bd1a4f9be',
              },
          {
            img: 'https://img.freepik.com/free-photo/young-woman-purple-soft-cozy-sweater-with-gift-voucher_343596-7730.jpg?w=996&t=st=1673031936~exp=1673032536~hmac=5a54b125012851676365cc213fb70f7356bf0097d76132d6120e9da8a88d1454',
          },
         

          {
            img: 'https://img.freepik.com/free-vector/super-sale-horizontal-banner_52683-59532.jpg?w=996&t=st=1673030626~exp=1673031226~hmac=b3084d9cb6224f7a721b4722316ca87738320b953d93e15be308aa008697d767',
          },
          
         
        ]}
        // autoPlay={true}
        dotStyle={20}
        imageLoadingColor={'grey'}
        // onItemChanged={(item) => console.log("item", item)}
        closeIconColor="#fff"
        onClick={() => navigation.navigate(BuyScreen)}
      />
    </View>
  );
};



export default ImageSliding;
