import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity ,ScrollView, Image } from 'react-native';

export default class Intro extends Component{

    render(){
        return(
            <View style = {{flex:1,justifyContent:"center",alignItems:"center" }}>
                <Text style={{textAlign:"center",fontSize:30,fontFamily:"san-serif",color:"red"}}>
                    Corruption
                </Text>
                <Text style={{textAlign:"center",fontSize:20,fontFamily:"san-serif",color:"red"}}>
                Corruption is wrongdoing on the part of an authority or powerful party 
                through means that are illegitimate, immoral, or incompatible with ethical 
                standards. Corruption often from patronage and is associated with bribery<br/><br/>
                The types of the Corruption are :<br/>
                                    1 petty corruption <br/>
                                    2 state corruption<br/>
                
                                    <br/><br/> Petty Coruption :
                            • Petty corruption refers to everyday abuse of entrusted power by low- 
                            and mid-level public officials in their interactions with ordinary citizens
                            who often are trying to access basic goods or services in places like 
                            hospitals, schools, police departments and other agencies<br/>

                            <br/><br/> State Corruption :
                • Political Corruption Law and Legal Definition. ... Political corruption 
                can be of two forms. The first one is which includes both accumulation and 
                extraction and where government officials use and abuse their hold on power to extract 
                from the private sector,from government revenues, and from the economy at large.  
                           
                </Text>

                <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Prevention')
          }}
                style={{width: 100 ,height:50 , borderWidth : 1 ,marginTop :30 , 
                    paddingTop: 10 , borderRadius : 7,backgroundColor : "green" }}>
                    <Text style={{textAlign:"center",fontSize:20,fontFamily:"san-serif",
                    color:"red"}}>
                        Next
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('HomeScreen')
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