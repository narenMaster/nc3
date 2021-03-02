import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity ,ScrollView, Image } from 'react-native';

export default class Prevention extends Component{

    render(){
        return(
            <View style = {{flex:1,justifyContent:"center",alignItems:"center" }}>
                <Text style={{textAlign:"center",fontSize:30,fontFamily:"san-serif",color:"red"}}>
                    Prevent Corruption
                </Text>
                <Text style={{textAlign:"center",fontSize:20,fontFamily:"san-serif",color:"red"}}>
                An important factor is where the anti-corruption agency (ACA) or <br/>
                KPK (Indonesian: Komisi Pemberantasan Korupsi) or<br/>
                UNCAC(United Nation Covenction Against Corruption) is located in<br/> 
                government;<br/> if it reports to the office of the prime minister, for example,<br/> 
                it can be used as a weapon against political opponents. Laws fixing<br/> 
                accountability and encouraging transparency combined with efficient judiciary<br/> 
                and free press provide ideal atmosphere to tackle the menace of corruption.  
                Ideally the KPK should be a completely independent body.<br/><br/>
                he Right to Information Act 2005 (RTI) is an Act of the Parliament of <br/>
                India. Important provisions of RTI Act 2005:  Ask any questions from<br/> 
                the Government or seek any information  Take copies of any government<br/> 
                documents  Inspect any government documents or works.  Take samples of <br/>
                materials of any Government work.<br/>
                </Text>
                <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Complaint')
          }}
                style={{width: 100 ,height:50 , borderWidth : 1 ,marginTop :30 , 
                    paddingTop: 10 , borderRadius : 7,backgroundColor : "green" }}>
                    <Text style={{textAlign:"center",fontSize:20,fontFamily:"san-serif",
                    color:"red"}}>
                        Next
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Intro')
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
