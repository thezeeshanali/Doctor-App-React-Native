import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from '../colorPallete/colors';




export default function CustomHeading(props) {
  return (
    <View style={styles.container}>
     <Text style={styles.text}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"flex-start",
        marginTop:25,
        marginHorizontal:25
        
    },
    text:{
        color:color.headerColor,
        fontSize:20,
        fontWeight:"bold",
        letterSpacing:2
    }
})