import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import BreadNavigator from './navigation/BreadNavigator';


export default function App() {

  const [dataLoaded] = useFonts({
    'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  if(!dataLoaded){
    return <AppLoading />
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BreadNavigator />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
