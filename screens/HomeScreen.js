import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity , Image } from 'react-native';


export default class HomeScreen extends Component
{
    render()
    {
        return(
            <View style={{alignItems : 'center' , justifyContent:'center'}}>
            <Text style={{textAlign : 'center' , 
            fontSize : 50 , 
            fontWeight : 'bold',
            fontFamily:"fantasy", 
            marginTop : 10}}>Non Corruption
        </Text>
        <Image source = {require("../assets/logo.jpg")} style={{width : 200 , height : 200}}/>
        <TouchableOpacity 
        style={{width: 300 ,height:70 , borderWidth : 1 ,marginTop :30 , 
        paddingTop: 10 , borderRadius : 7,backgroundColor : "green" }}
        onPress={() => {
            this.props.navigation.navigate('Intro')
          }}>
            <Text style={{textAlign:"center",fontSize:25,fontFamily:"san-serif",
                    color:"red"}}>
                UNDERSTAND CORRUPTION
            </Text>
        </TouchableOpacity>
        </View>
        )
    }
}