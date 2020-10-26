import React from 'react';
import Routes from './src/routes/Routes';
import { StatusBar } from 'expo-status-bar';

import { Manrope_400Regular, Manrope_700Bold } from '@expo-google-fonts/manrope'
import { Raleway_400Regular, Raleway_600SemiBold, useFonts } from '@expo-google-fonts/raleway'
import { AppLoading } from 'expo';


export default function App() {
  let [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_700Bold,
    Raleway_400Regular,
    Raleway_600SemiBold,
  })

  if(!fontsLoaded) {
    return <AppLoading />
  } else {
   return(
    <>
      <Routes />
      <StatusBar style="light" />
    </>
   )
  }
  
}

