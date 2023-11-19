import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient} from 'expo-linear-gradient'
import { TextInput } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'; 

const EsqueciSenha = () => {

  
  return (
    <View style={{ flex:1}}>
      <ImageBackground
        source={require('../../../assets/bg-menu.png')}
        resizeMode='contain'
        style={{
        width: '100%',
        height: '100%',
        }}
      >
          <Ionicons name="arrow-back" size={60} color="white" style={{paddingVertical: 40, paddingLeft: 10}} />
        <View style={{flex:1, justifyContent: 'flex-end', alignItems: 'center'}}>

          <Text style={{color: 'white', fontSize: 50, marginBottom: 40}}>Esqueci minha senha</Text>
        </View>
        <View style={{flex:1,  }}>
        <Text style={{color: 'white', fontSize: 30, paddingVertical: 30, marginLeft: 10}}>E-mail para confirmação</Text>
        <TextInput style={{width: '80%', alignSelf: 'center', borderRadius: 10}}></TextInput>
          <TouchableOpacity style={{alignSelf: 'center', marginTop: 40, backgroundColor: 'snow', padding: 15, borderRadius: 10, width: 100}}>
            <Text style={{alignSelf: 'center',}}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
    
  )
}

export default EsqueciSenha