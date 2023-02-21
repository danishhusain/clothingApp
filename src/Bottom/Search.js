import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Button, Card, Searchbar } from 'react-native-paper';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebase } from '@react-native-firebase/auth';
import { AuthContext } from '../Context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import CustomColor, { theme } from '../CustomComponents/CustomColor';
import {  tshirt, jeans, jacket, shirt, lower, hoodie } from '../DataBase/Api';
const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  // const onChangeSearch = query => setSearchQuery(query);
  const itemArray = [tshirt, jacket, jeans, shirt, lower, hoodie,]
  const [filteredData, setFilteredData] = React.useState(tshirt);
  const navigation = useNavigation();



  const onChangeSearch = (text) => {
    setSearchQuery(text);
    const newData = tshirt.filter((item) => {
      const itemData = item.ItemName.toLowerCase();
      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
      // return itemData.indexOf(textData) > -1;
    });
    setFilteredData(newData);
  }
  // console.log("jj", filteredData)

  const renderSearches = ({ item }) => {
    // const posterImg = `http://image.tmdb.org/t/p/w185/${item.poster_path}`
    const posterImg = item.url
    // const backdropImg = `http://image.tmdb.org/t/p/w185/${item.backdrop_path}`
    // console.log("render",movies)
    return (
      <>
        <Card style={{ flexDirection: 'row', marginVertical: 2, }} >
          <TouchableOpacity style={{ flexDirection: 'row', paddingRight: 250, }} >
            <View style={{ flexDirection: 'row', marginVertical: 2, }}>
              <View style={{ flexDirection: 'row' }}>
                {/* <Text style={{ fontSize: 20, }}>Poupular Searches</Text> */}
                <Image style={{ height: 80, width: 120, borderBottomLeftRadius: 8, borderTopLeftRadius: 8 }} source={{ uri: posterImg }} />
                {/* <Image style={{ height: 80, width: 120, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} source={{ uri: backdropImg }} /> */}
              </View>
              {/* <View style={{justifyContent:'space-between',flexDirection:'row',}}> */}
                <View style={{ left: 5, justifyContent: 'center', }}>
                  <Text style={{}} >{item.ItemName}</Text>
                </View>
                {/* <View style={{ backgroundColor: 'red', }}>
                  <Text style={{}} >{item.ItemName}</Text>

                </View> */}
              {/* </View> */}
            </View>
          </TouchableOpacity>
        </Card>

      </>
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{ backgroundColor: CustomColor.AppColor, }}
        iconColor={'white'}
        placeholderTextColor={'white'}
      />
      <View>
        <Text style={{fontSize:20,}}>Poupular Search</Text>
      </View>
      <View>
        <View style={{ justifyContent: 'space-between', margin: 5, }}>
          <FlatList
            data={filteredData}
            renderItem={renderSearches}
            keyExtractor={item => item.code}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default Search;
