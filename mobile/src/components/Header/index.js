import React from 'react';
import { Text, View } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'

import styles from './styles';

export default function Header(props){
  const { navigate } = useNavigation();

    function handleGoBack(){
      navigate('Landing');
    }

    function handleNavigateToNewRoutinePage(){
      navigate('NewRoutine')
    }

    return (

      <View style={styles.container}>

        <View style={styles.topBar}>
          <BorderlessButton onPress={handleGoBack} >
            <Icon name="arrow-left" color="#000" size={24} />
          </BorderlessButton>
          <Text style={styles.topBarTitle}>To-Do List</Text>
        </View>

        {props.add === true ? (
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
            <RectButton style={styles.header} onPress={handleNavigateToNewRoutinePage}>
              <Text style={styles.headerText}>NOVA ROTINA</Text>
              <Icon name="plus-circle" color="#000" size={24}/>
            </RectButton>
          </View>
        ) : (
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
          </View>
        )}         
          
      
      
        

      </View>
    )
  
}