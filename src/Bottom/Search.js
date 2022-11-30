import * as React from 'react';
import { View,Text } from 'react-native';
import { Searchbar } from 'react-native-paper';

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

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

    </View>
    </View>
  );
};

export default Search;