 import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Welcome from './screens/Welcome';
import Home from './screens/Home';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import OnBoarding from './screens/OnBoarding';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  }
}
const App = () => {

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Welcome'>
      <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
        />
      <Stack.Screen
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
