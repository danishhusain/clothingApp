import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Image, StyleSheet, Button ,Text} from 'react-native';
import { ImageSlider,ImageCarousel } from "react-native-image-slider-banner";
import { IconButton } from 'react-native-paper';
import BuyScreen from '../Screens/BuyScreen';

const ImageSliding = () => {
    const navigation = useNavigation()
    const images = [
        'https://picsum.photos/id/1005/300/300',
        'https://picsum.photos/id/1006/300/300',
        'https://picsum.photos/id/1007/300/300',
        'https://picsum.photos/id/1087/300/300',
    ];
    const [index, setIndex] = useState(0);

    return (
        <View style={{backgroundColor:'blue ',width: '100%', height: 250}}>
            {/* <Image source={{ uri: images[index] }} style={styles.image} />
      <View style={styles.buttonContainer}>
        <Button
          title="Prev"
          onPress={() => setIndex(index === 0 ? images.length - 1 : index - 1)}
        />
        <Button
          title="Next"
          onPress={() => setIndex(index === images.length - 1 ? 0 : index + 1)}
        />
      </View> */}

            <ImageSlider
                data={[
                    { img: 'https://images.pexels.com/photos/7088498/pexels-photo-7088498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
                    { img: 'https://images.pexels.com/photos/10491354/pexels-photo-10491354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
                    { img: 'https://images.pexels.com/photos/6447223/pexels-photo-6447223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
                   
                ]}
                // autoPlay={false}
                // onItemChanged={(item) => console.log("item", item)}
                closeIconColor="#fff"
                onClick={()=>navigation.navigate(BuyScreen)}
            />

            {/* <ImageCarousel
                data={[
                    { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU' },
                    { img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
                    { img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' }
                ]}
                showHeader
                preview={false}
                // headerLeftComponent={<IconButton name="arrow-back" color="#fff" size={34} onPress={() => Alert.alert("alert")} />}
                headerCenterComponent={<Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>Header</Text>}
                headerStyle={{ padding: 10, backgroundColor: 'rgba(0,0,0, 0.6)', }}
                onItemChanged={(item) => console.log("item", item)}
                caroselImageStyle={{ resizeMode: 'cover' }}
                onClick={(item, index) => { alert('hello' + index) }}
            /> */}
        </View>
    );
};

// const styles = StyleSheet.create({
//     container: {
//         // flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     image: {
//         width: 400,
//         height: 400,
//     },
//     buttonContainer: {
//         flexDirection: 'row',
//         marginTop: 20,
//     },
// });

export default ImageSliding;
