import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import { LinearGradient} from 'expo-linear-gradient'

const EsqueciSenha = () => {

  
  return (
    <View style={{ flex:1}}>
      <ImageBackground
        source={require('../../../assets/bg-menu.png')}
        resizeMode='contain'
        style={{
        width: '100%',
        height: '100%',
        flex: 1,}}
      >
        <View style={{alignItems: 'center', paddingVertical: 50, justifyContent: 'center', flex:1, backgroundColor: 'red', width: 100, height: 100 }}>
          
          
        </View>
      </ImageBackground>
    </View>
    
  )
}

export default EsqueciSenha