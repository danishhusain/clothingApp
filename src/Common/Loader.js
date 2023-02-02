import React from 'react';
import { View, Modal, ActivityIndicator, Alert } from 'react-native';

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
            <ActivityIndicator size="large" color="#0000ff" />
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



