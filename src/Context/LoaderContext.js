import { useState } from "react";
import { createContext } from "react";
import { View, Modal, ActivityIndicator, Alert } from 'react-native';
export const LoaderContext = createContext()
export const LoaderProvider = ({ children }) => {

    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    // const [a,setA]=useState("hi")

    const LoadingSpinner = () => {
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
    return (
        <LoaderContext.Provider value={{ setIsVisible,setIsLoading}}>
            {children}
        </LoaderContext.Provider>
    )
}