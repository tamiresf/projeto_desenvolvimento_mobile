import React, { useState, useContext } from "react";
import {View, Text, KeyboardAvoidingView, Image, TextInput, Button} from 'react-native';
import { StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = ({navigation})=> {
    
    const [username, setUserName] = useState('');
    const [password, setPassowrd] = useState('');


    const handleLogin = async () => {
        // Simples verificação de usuário e senha
        if (username === 'rayane' && password === '123') {
         // Navega para a próxima tela após o login bem-sucedido
          navigation.navigate('Produtos');
        } else {
          setError('Usuário ou senha inválidos');
        }
      };
    return(
        <KeyboardAvoidingView style={styles.tela}>
            <View>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.nome}>VIP</Text>
                <Text style={styles.nomem}>Market</Text>
                </View>
                <Image source={require('../../../assets/nossalogo.png')} style={styles.logo}/>
                <Text style={styles.input}>Usuário</Text>
                <TextInput style={styles.user} value={username} onChangeText={(text)=> setUserName(text)}/>
                <Text style={styles.input}>Senha</Text>
                <TextInput style={styles.senha} value={password} onChangeText={(text)=> setPassword(text)}/>
                <Button title="Entrar" onPress={handleLogin}/>
            </View>
        </KeyboardAvoidingView>
    )
}
export default Login;

const styles = StyleSheet.create({
logo:{
 marginBottom:120,

},
tela:{
    backgroundColor: '#100D28',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
},
nome:{
    color: '#8906E6',
    fontSize: 45, 
},
nomem:{
    color:'#fff',
    fontSize: 45,
},
user:{
    backgroundColor: '#fff',
    borderRadius: 4,
    height:30,
    marginBottom:28,
},
senha:{
    backgroundColor: '#fff',
    borderRadius: 4,
    height:30,
},
input:{
    color: '#fff',
},
})