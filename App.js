import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {Intro} from './src/screens/Intro'
import MainTabs from './src/navigation';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName={"Intro"}>
        <Stack.Screen name="Home" component={MainTabs} options={{headerShown:false}}/>
        <Stack.Screen name="Intro" component={Intro} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>    
  )
}
