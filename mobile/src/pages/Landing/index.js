import React from 'react';
import { Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons'

import LandingImg from '../../assets/landing.png'

import styles from './styles'



export default function Landing(){
  const { navigate } = useNavigation();

  function handleNavigateToAddRoutinePage(){
    navigate('AddRoutine')
  }

  function handleNavigateToRoutineTabs(){
    navigate('Tabs')
  }
 

  return(
    <View style={styles.container}>
      <Image style={styles.banner} source={LandingImg}/>  

      <Text style={styles.title}>
        Seja bem-vindo! {'\n'}
        <Text style={styles.subTitle}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton style={[styles.button, styles.colorPrimary]} onPress={handleNavigateToAddRoutinePage} >
          <Icon name="plus-circle" color="#FFF" size={24} />
          <Text style={styles.buttonText}>
            Adicionar Rotina
          </Text>
        </RectButton>
        <RectButton style={[styles.button, styles.colorSecondary]} onPress={handleNavigateToRoutineTabs}>
          <Icon name="list" color="#FFF" size={24} />
          <Text style={styles.buttonText}>
            Listar Rotinas
          </Text>
        </RectButton>
      </View>
    </View>
  )
}