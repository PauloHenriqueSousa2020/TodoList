import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();


import Landing from '../pages/Landing';
import AddRoutine from '../pages/AddRoutine';
import NewRoutine from '../pages/NewRoutine';
import Tabs from './Tabs';


export default function Routes(){
  return(
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name = "Landing" component={Landing} />
        <Screen name = "Tabs" component={Tabs} />
        <Screen name = "AddRoutine" component={AddRoutine} />
        <Screen name = "NewRoutine" component={NewRoutine} />

      </Navigator>
    </NavigationContainer>
  )
}