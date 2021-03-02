import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity ,ScrollView, Image } from 'react-native';

export default class Awareness extends Component{

    render(){
        return(
            <View style = {{flex:1,justifyContent:"center",alignItems:"center" }}>
                <Text style={{textAlign:"center",fontSize:30,fontFamily:"san-serif",color:"red"}}>
                    Aware About Corruption
                </Text>
                <Text style={{textAlign:"center",fontSize:20,fontFamily:"san-serif",color:"red"}}>
                According to Transparency International, public perception of corruption<br/> 
                in Romania is among the highest in the European Union.  The lack of<br/> 
                information on the relevant legislation, on what represents an act of <br/>
                corruption in daily practice, and on what to do when one observes it helps<br/>
                 perpetuate corruption in the country. The most recent awareness raising <br/>
                 campaigns on corruption are those of Transparency International (TI) in<br/> 
                 2007, and of the General Directorate Anticorruption (DGA) of the Ministry <br/>
                 of Internal Affairs in 2014.  Consequently, this commitment aims to<br/>
                 carry out a new awareness raising campaign that informs citizens on the legal<br/>
                 obligations of institutions and civil servants and on how to fight corruption<br/> 
                 through available legal and civic means.  The milestones are verifiable,<br/> 
                 and by raising awareness on and facilitating access to anticorruption resources<br/>
                 , the commitment furthers access to information.
                </Text>

                <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Thanks')
          }}
                style={{width: 100 ,height:50 , borderWidth : 1 ,marginTop :30 , 
                    paddingTop: 10 , borderRadius : 7,backgroundColor : "green" }}>
                    <Text style={{textAlign:"center",fontSize:20,fontFamily:"san-serif",
                    color:"red"}}>
                        Next
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Complaint')
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

