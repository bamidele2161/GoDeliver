import { View, Text, StatusBar, TextInput, StyleSheet, KeyboardAvoidingView, Image} from 'react-native'
import React from 'react'
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome'
const SignUp = ({navigation}) => {
  return (
    <View style={styles.input_div}>
        <StatusBar></StatusBar>
        <View style={styles.brandName}>
            <Text style={styles.title}>GoDeliver</Text>
            <Image source={require('../assets/images/delivery-man.png')} style={styles.deImg} />
        </View>
            <Text style={styles.login}>Login</Text>

        <KeyboardAvoidingView
            behavior="padding"
        >
            <View style={styles.inputField}>
                <Icon name='envelope-o' color='#818181' size={22} />
                <TextInput keyboardType='email-address' placeholder='Email Address' style={styles.input} placeholderTextColor='#818181'/>
            </View>
            <View style={styles.inputField}>
                <Icon name='lock' color='#818181' size={22} />
                <TextInput secureTextEntry={true} maxLength={6} placeholder='Enter your Password' style={styles.input} placeholderTextColor='#818181'/>
                <Icon name='eye' color='#c7c7c7' size={20}/>
            </View>

            <Button btn_text='Login' onPress={() => navigation.replace('Welcome')}/>
            {/* <Text style={styles.already}>
                Already have an account ?
            </Text> */}
        </KeyboardAvoidingView>
        <View>

        </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: '#0f1a24',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        color: '#3492eb',
    },
    brandName:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    deImg: {

    },
    login: {
        fontSize: 30,
        color: '#0f1a24',
        fontWeight: 'bold',
        marginBottom: 30,

    },
    input: {
        width: '90%',
        height: '100%',
        paddingLeft: 20,
        position: 'relative',
    },
    input_div: {
        paddingHorizontal: '3%',
        backgroundColor: 'white',
        paddingVertical: '15%',
        flex: 1,
    },
    inputField: {
        height: 50,
        backgroundColor: '#ededed',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    already: {
        textAlign: 'center',
        marginTop: 10,
    }
})