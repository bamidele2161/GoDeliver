import { Animated, StyleSheet, useWindowDimensions, View } from 'react-native'
import React, {useState} from 'react'

const Paginator = ({data, scrollX}) => {
    const width = useWindowDimensions();

  return (
    <View style={styles.container}>
      {
        data.map((_, i) => {

            // const inputRange = [ (i-1) * width, i * width, (i + 1) * width];
            
            
            // const dotWidth = scrollX.interpolate({
            //     inputRange,
            //     outputRange: [10, 20, 10],
            //     extrapolate: 'clamp',
            // });

            // const opacity = scrollX.interpolate({
            //     inputRange,
            //     outputRange: [0.3, 1, 0.3],
            //     extrapolate: 'clamp',
            // });

            return (
                <View 
                    style={[
                        styles.dot, 
                        {
                            width: 10,
                        }
                    ]} 
                    key={i.toString()}
                />
            );
        })
      }
    </View>
  )
}

export default Paginator

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 20,
    },
    dot: {
        height: 10, 
        borderRadius: 5,
        backgroundColor: '#3492eb',
        marginHorizontal: 8
    }
})