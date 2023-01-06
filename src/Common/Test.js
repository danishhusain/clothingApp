// import {createContext, useState} from 'react';
// import {View, Modal, ActivityIndicator, Alert} from 'react-native';

// export const LoaderContext = createContext();
// const [isVisible, setIsVisible] = useState(false);
// const [isLoading, setIsLoading] = useState(false);

// export const LoaderProvider = ({children}) => {
//   const Test = () => {
//     return (
//       <View>
//         <Modal
//           animationType="fade"
//           transparent={true}
//           visible={isVisible}
//           onRequestClose={() => setIsVisible(false)}>
//           <View
//             style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//             {isLoading ? (
//               <ActivityIndicator size="large" color="#0000ff" />
//             ) : (
//               // The content of your modal goes here
//               // alert.apply("alert")
//               console.log('false')
//             )}
//           </View>
//         </Modal>
//       </View>
//     );
//   };

//   return (
//     <LoaderContext.Provider
//       value={{Test, isVisible, setIsVisible, isLoading, setIsLoading}}>
//       {{children}}
//     </LoaderContext.Provider>
//   );
// };
// // export default LoaderContext;

import React from 'react';
import {View, Modal, ActivityIndicator, Alert} from 'react-native';

const Test = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            // The content of your modal goes here
            // alert.apply("alert")
            console.log('false')
          )}
        </View>
      </Modal>
    </View>
  );
};
export default Test;
