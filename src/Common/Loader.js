
import React from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';

function Loader() {
  return (
    <Modal>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large" />
      </View>
    </Modal>
  );
}
export default Loader
