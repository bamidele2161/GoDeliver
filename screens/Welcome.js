import React from 'react'
import { StyleSheet, Image, View, StatusBar, Text } from 'react-native'

const Welcome = ({navigation}) => {

    setTimeout(() => {
        navigation.replace('OnBoarding')
    }, 3000);

  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/delivery.png')}
        style={styles.image}
        />
        <StatusBar barStyle="light-content" hidden={false} backgroundColor="#465bd8" />
        <Text style={styles.deliveryText}>GoDeliver</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3492eb'
    },
    image: {
        
    },
    deliveryText: {
        fontSize: 24,
        marginTop: 30,
        fontWeight: 'bold',
        color: 'white'

    },
})

export default Welcome