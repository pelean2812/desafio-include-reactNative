import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts} from '@expo-google-fonts/roboto'

import Routes from './src/router'

export default function App() {

  let [fontsLoading] = useFonts({ Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold });
  if (!fontsLoading) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style="auto" />
      <Routes />
    </>
  );
}

