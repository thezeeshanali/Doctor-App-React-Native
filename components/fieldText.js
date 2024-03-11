import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from '@expo/vector-icons/AntDesign';


export default function FieldText(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
      <View style={{flexDirection:"row",justifyContent:"space-between",width:'100%',marginTop:10}}>
      <Text style={styles.text1}>{props.name}</Text>
       <Icon name={props.iconName}  size={20} color="purple" />
      </View>
      <View style={{borderBottomWidth:1,width:"100%",marginTop:10, borderColor:"grey"}}>
        
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"flex-start",
        alignItems:"flex-start",
        paddingHorizontal:20
    },
    text:{
        fontSize:18,
        color:"grey"
    },
    text1:{
        color:"black",
        fontSize:18
    }
})