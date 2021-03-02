import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import {createAppContainer,createSwitchNavigator} from "react-navigation"
import Intro from "./screens/Intro"
import Prevention from "./screens/Prevention"
import Complaint from "./screens/Complaint"
import Thanks from "./screens/Thanks"
import Awareness  from "./screens/Awareness"

export default class App extends Component {
  render(){
    return (
      <AppContainer/>
    );
  }
  

  }

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen ,
  Intro : Intro ,
  Prevention : Prevention,
  Complaint   : Complaint,
  Awareness : Awareness ,
  Thanks : Thanks 
})

const AppContainer = createAppContainer(AppNavigator)