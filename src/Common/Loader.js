
import React from 'react';
import { View, Modal, ActivityIndicator, Alert } from 'react-native';

const LoadingSpinner=()=> {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

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
            <ActivityIndicator size="small" color="#0000ff" />
          ) : (
            // The content of your modal goes here
            alert.apply("alert")
          )}
        </View>
      </Modal>
    </View>
  );
}
export default LoadingSpinner;

