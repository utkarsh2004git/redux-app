import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import FormContext from './Context/FormContext'

const formOut = () => {

    const {formData} = useContext(FormContext);
  return (
    <View style={styles.container}>
      <View style={{padding:16,borderWidth:2,borderRadius:10}}>
      <Text style={styles.text}>Name : {formData?.name}</Text>
      <Text style={styles.text}>Age : {formData?.age}</Text>
      <Text style={styles.text}>City : {formData?.city}</Text>
      </View>
    </View>
  )
}

export default formOut

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  text:{
    fontSize:25,

  }

})