import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useContext } from 'react'
import { LoaderContext } from '../Context/LoaderContext'
import { Button } from 'react-native-paper'

const CheckLoader = () => {
    // const { a, setA } = useContext(LoaderContext)

    const performAPIRequest = () => {
        setIsLoading(true);
        // Make API request here
        setIsLoading(false);
    }
    return (
        <View>
            <Text>CheckLoader</Text>
            {/* <Text>{a}</Text> */}
            <Button title="Perform API Request" onPress={performAPIRequest} />
        </View>
    )
}

export default CheckLoader

const styles = StyleSheet.create({})