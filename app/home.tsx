import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import UserContext from './Context/UserContext'

const home = () => {

    const {userName,setUserName} =useContext(UserContext);

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
      <Text style={{fontSize:25}}>Hello , {userName}</Text>
    </View>
  )
}

export default home

const styles = StyleSheet.create({})