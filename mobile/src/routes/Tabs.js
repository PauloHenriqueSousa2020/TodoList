import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons'; 

const { Navigator, Screen } = createBottomTabNavigator();

import CompletedRoutines from '../pages/CompletedRoutines';
import ListRoutines from '../pages/ListRoutines';

export default function Tabs(){
  return(
   <Navigator
    tabBarOptions={{
      style: {
        elevation: 0,
        height: 64,
      },
      tabStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      iconStyle: {
        flex: 0,
        width: 20,
        height: 20,
      },
      labelStyle: {
        fontFamily: 'Manrope_700Bold',
        fontSize: 12,
        marginLeft: 16,
      },
      inactiveBackgroundColor: '#fafafc',
      activeBackgroundColor: '#ebebf5',
      inactiveTintColor: '#c1bccc',
      activeTintColor: '#32264d'
    }}
   >
     
    <Screen
      name="ListRoutines" 
      component ={ListRoutines}
      options={{
        tabBarLabel: 'LISTAR ROTINAS',
        tabBarIcon: ({ color, size }) => {
          return(
            <FontAwesome name="list-ul" size={size} color={color} />
          );
        }
      }}
    />

    <Screen
      name="CompletedRoutines" 
      component ={CompletedRoutines}
      options={{
        tabBarLabel: 'ROTINAS CONCLUÍDAS',
        tabBarIcon: ({ color, size }) => {
          return(
            <FontAwesome name="check-circle" size={size} color={color} />
          );
        }
      }}
    />


   </Navigator>
  )
}