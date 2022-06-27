import { FlatList, StyleSheet, Text, View, Image, Button, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import slide from '../components/slide'
import OnboardingItem from '../components/OnboardingItem'
import Paginator from '../components/Paginator'

const OnBoarding = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slidesRef = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemschanged = useRef(({ viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewconfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current
  return (
    <View style={styles.container}>

      <View style={{flex: 3}}>
        <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
          <Button title='skip' onPress={() => navigation.replace('Home')}/>
        </View>
        <FlatList 
          data={slide} 
          renderItem={({item}) => <OnboardingItem item={item} /> }
          horizontal
          pagingEnabled
          bounces={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
            useNativeDriver: false,
          })}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemschanged}
          viewabilityConfig={viewconfig}
          ref={slidesRef}
        />
      </View>

        <Paginator data={slide} scrollX={scrollX}/>
    </View>
  )
}

export default OnBoarding 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
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