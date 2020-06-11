import React from 'react';
import Menu from "./Components/DrawerElements"
import Loading from "./Components/Loading"
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer , createSwitchNavigator} from 'react-navigation'



export default createAppContainer(createSwitchNavigator(
  {Starter:Loading,
  App:Menu},
  {
    initialRouteName:'Starter'
  }
))