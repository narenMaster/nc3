import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity,ScrollView , Image } from 'react-native';

export default class Complaint extends Component{

    render(){
        return(
            <View style = {{flex:1,justifyContent:"center",alignItems:"center" }}>
                <Text style={{textAlign:"center",fontSize:30,fontFamily:"san-serif",color:"red"}}>
                    Complaint About Corruption
                </Text>
                <Text style={{textAlign:"center",fontSize:20,fontFamily:"san-serif",color:"red"}}>
                • Join with international efforts<br/> 
                • Establish benchmarks of quality<br/> 
                • Strengthen the civil service <br/>
                • Encourage codes of conduct in the private sector <br/>
                • Establish the right to information <br/>
                • Exploit new technology <br/>
                • Support citizen action<br/>

                </Text>

                <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Awareness')
          }}
                style={{width: 100 ,height:50 , borderWidth : 1 ,marginTop :30 , 
                    paddingTop: 10 , borderRadius : 7,backgroundColor : "green" }}>
                    <Text style={{textAlign:"center",fontSize:20,fontFamily:"san-serif",
                    color:"red"}}>
                        Next
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Prevention')
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

