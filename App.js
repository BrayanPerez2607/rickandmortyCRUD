import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View>
      <HomeScreen />
    </View>
  );
}
