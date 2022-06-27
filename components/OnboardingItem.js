import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'

const OnboardingItem = ({item}) => {
    const width = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
        <Image source={item.image} style={[styles.image, {width, resizeMode: 'contain'}]}/>
        <View style={{flex: 0.3, width: 360}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    </View>
  )
}

export default OnboardingItem

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 20,
        
    },
    image: {
        flex: 0.7,
        justifyContent: 'center',
        height: 100,
    },
    title: {
        fontWeight: '800',
        fontSize: 28,
        textAlign: 'center',
        marginBottom: 10,
        color: '#3492eb'
    },
    description: {
        fontWeight: '300',
        textAlign: 'center',
        paddingHorizontal: 64,
        color: '#62656b',
    }
})