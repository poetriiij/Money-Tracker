import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../../assets/icons/Logo.svg'

const Splash = () => {
  return (
    <View style={styles.container}>
        <Logo/>
      <Text style={styles.text}>Money Tracker</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#02CF8E',
        alignItems: 'center',
        justifyContent: 'center',   
    },
    text: {
    fontFamily: 'Poppins-Medium',
    // fontWeight: 'bold',
    fontSize: 32,
    color: 'black',
    }
    
})