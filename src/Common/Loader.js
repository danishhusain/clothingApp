import React from 'react';
import { View, Modal, ActivityIndicator, Alert } from 'react-native';
import CustomColor from '../CustomComponents/CustomColor';

const LoadingSpinner=()=> {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isVisible, setIsVisible] = React.useState(true);

  // setTimeout(()=>{
  //   setIsLoading(false)
  // },4000)

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
      >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {isLoading ? (
            <ActivityIndicator size={60} color={CustomColor.AppColor} />
          ) : (
            // The content of your modal goes here
            // alert.apply("alert")
            null
          )}
        </View>
      </Modal>
    </View>
  );
}
export default LoadingSpinner;



