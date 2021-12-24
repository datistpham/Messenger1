import React from "react"
import {Image, Button,View, StyleSheet} from 'react-native'


import Login from "./Login"
import Signup from "./Signup"


const Stack= createNativeStackNavigator()

const Root= ()=> {
    return (
      <View>

      </View>
    )
}

export default Root
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    text: {
      color: 'rgb(59,108,212)',
      fontSize: 42,
      fontWeight: '600',
      textAlign: 'center',
    },
  })