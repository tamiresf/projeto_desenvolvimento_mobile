import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.header}>
      <TextInput placeholder='pesquise aqui' style={{ borderRadius: 7 }} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        height: '10%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "blue",
    },
})