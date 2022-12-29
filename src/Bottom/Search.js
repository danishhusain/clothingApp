import * as React from 'react';
import { View,Text } from 'react-native';
import { Button, Searchbar } from 'react-native-paper';
import {GoogleSignin, GoogleSigninButton,statusCodes,} from '@react-native-google-signin/google-signin';



const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

//getCurrenyUser
getCurrentUser = async () => {
const currentUser = await GoogleSignin.getCurrentUser();
// this.setState({ currentUser });
console.log("currentUser",currentUser)
};

  return (
    <View>
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{backgroundColor:`#6a5acd`}}
      iconColor={'white'}
      placeholderTextColor={'white'}
      
    />
    <View >
    <Text style={{alignSelf:'center',marginTop:'10%'}}>NO data</Text>
    <Button onPress={()=>getCurrentUser()}>getCurrentUser</Button>

    </View>
    </View>
  );
};

export default Search;