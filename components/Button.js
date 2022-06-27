import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Button = ({onPress, btn_text}) => {
  return (
    <View>
      <TouchableOpacity style={styles.buttong} onPress={onPress}>
        <Text style={styles.textb}>{btn_text}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    buttong: {
        borderRadius: 10,
        elevation: 2,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3492eb',
        marginTop: 12,
        width: '100%',
        height: 50,
        position: 'relative',
    },

    textb: {
        color: 'white',
        fontWeight: 'bold',
        lineHeight: 21,
        fontSize: 16,
        letterSpacing: 0.25,
    },
})