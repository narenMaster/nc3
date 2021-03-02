import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity , Image } from 'react-native';


export default class Thanks extends Component
{
    render()
    {
        return(
            <View style={{alignItems : 'center' , justifyContent:'center'}}>
            
        <Image source = {require("../assets/thanks.jpg")} style={{width : 600 , height : 200}}/>
        <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Awareness')
          }}
                style={{width: 100 ,height:50 , borderWidth : 1 ,marginTop :30 , 
                    paddingTop: 10 , borderRadius : 7,backgroundColor : "green" }}>
                    <Text style={{textAlign:"center",fontSize:20,fontFamily:"san-serif",
                    color:"red"}}>
                        Back
                    </Text>
                </TouchableOpacity>
        </View>
        )
    }
}