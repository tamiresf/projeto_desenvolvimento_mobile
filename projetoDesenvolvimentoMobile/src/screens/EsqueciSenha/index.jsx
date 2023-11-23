import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient} from 'expo-linear-gradient'
import { TextInput } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const EsqueciSenha = () => {
  const navigation = useNavigation()

  const handlePressBack = () => {
    navigation.navigate('Login')
  }
  return (
    <View style={{ flex:1, backgroundColor: '#100D28'}}>
      <TouchableOpacity onPress={handlePressBack}>
          <Ionicons name="arrow-back" size={60} color="white" style={{paddingVertical: 40, paddingLeft: 10}} />
      </TouchableOpacity>
        <View style={{flex:1, justifyContent: 'flex-end', alignItems: 'center'}}>
          <View style={{flexDirection: 'row'}}>
          <Text style={styles.nome}>VIP</Text>
          <Text style={styles.nomem}>Market</Text>
          </View>
        <Image 
        source={require('../../../assets/nossalogo.png')}
        style={{marginBottom: 80}}
        />
          <Text style={{color: 'white', fontSize: 40, marginBottom: 60}}>Esqueci minha senha</Text>
        </View>
        <View style={{flex:1, alignItems: 'center' }}>
          <View style={{alignItems: 'center', width: '100%'}}>
        <Text style={{color: 'white', fontSize: 20, alignSelf: 'center', marginRight: 30 }}>E-mail para confirmação</Text>
        <TextInput style={{width: '60%', alignSelf: 'center', borderRadius: 10, height: 37, backgroundColor: 'white'}}></TextInput>
          <TouchableOpacity style={{alignSelf: 'center', marginTop: 40, backgroundColor: '#8906E6', padding: 15, borderRadius: 10, width: 100}}>
            <Text style={{alignSelf: 'center', color: 'white'}}>ENTRAR</Text>
          </TouchableOpacity>
          </View>
        </View>
    </View>
    
  )
}

export default EsqueciSenha

const styles = StyleSheet.create({
  nome:{
    color: '#8906E6',
    fontSize: 45, 
},
nomem:{
    color:'#fff',
    fontSize: 45,
},
})