import { View, Image, TextInput, Pressable, Modal, StyleSheet, Text, ImageBackground } from 'react-native'
import React, { useState }  from 'react';
import { withStyleAnimation } from 'react-native-reanimated/lib/types/lib/reanimated2/animation';
import Button from '../components/Button';
const Home = ({navigation}) => {


  return (
    <View style={styles.container}>
        <View style={styles.img}>
            <Image source={require('../assets/images/deliver.png')} style={styles.desImg} />
        </View>
        <View style={styles.goDescription}>
        <View style={styles.brandName}>
            <Text style={styles.login}>GoDeliver</Text>
            <Image source={require('../assets/images/delivery-man.png')} style={styles.deImg} />
        </View>
            <Text style={styles.paragraph}>Easy and fast tracking of where your packages are in realtime.</Text>
            <View style={{width: '100%'}}>
                <Button onPress={() => navigation.replace('SignUp')} btn_text='Get Started' />
            </View>
        </View>
        
    </View>
)
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: '5%',
    },
    brandName:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    img: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    goDescription: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    desImg: {
        width: 300,
        height: 300,
    },
    login: {
        marginBottom: 16,
        fontWeight: 'bold',
        fontSize: 30,
        color: '#3492eb'
    },
    paragraph: {
        fontSize: 14,
        marginBottom: 30,
        color: '#0f1a24',
        textAlign: 'center'
    },


    
})

export default Home