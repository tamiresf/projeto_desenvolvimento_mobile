import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {View, Text, KeyboardAvoidingView, Image, TextInput, Button} from 'react-native';
import { StyleSheet } from "react-native";
import { conta } from "../../service/api";


const Cadastro = ({navigation})=> {
    
    // const [user, setUser]= useState('');

    // const [password, setPassword]= useState('');

    const navigation2 = useNavigation()
    const navigation3 = useNavigation()

    const handleSemLogin = () =>{
        navigation2.navigate("FEApp", {screen: 'ProdutosFE'})
    }

    const [novoEmail, setNovoEmail] = useState('')
    const [novaDataNascimento, setNovaDataNasciment] = useState('')
    const [novoNome, setNovoNome] = useState('')
    const [novaSenha, setNovaSenha] = useState('')

    const addConta = async() =>{

        if(novoEmail ==='' || novaDataNascimento ==='' || novoNome==='' || novaSenha===''){
            alert('Preencha todos os campos')
            return;
        };

        const cadastro = {
            email: novoEmail,
            dataNascimento: novaDataNascimento,
            nome: novoNome,
            senha: novaSenha,
        }
        
        try {
            const response = await conta.post('/conta', cadastro)
             console.log(cadastro);
            navigation.navigate('Login');
        } catch (error) {
            console.log(error);
        }
    }
    const handlePressLogin = () => {
        navigation3.navigate('Login');
    }
    //email, dataNascimento, nome, senha
    return(
        <KeyboardAvoidingView style={styles.tela}>
            <View>
                <View style={styles.logo}>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.nome}>VIP</Text>
                <Text style={styles.nomem}>Market</Text>
                </View>
                    <Image source={require('../../../assets/nossalogo.png')} />
                    <Text style={{color: 'white', fontSize: 40, alignSelf: 'center', marginTop: 30}}>Cadastro</Text>
                </View>
                <View style={{flex: 1}}>

                <Text style={styles.input}>Email</Text>
                <TextInput style={styles.user} value={novoEmail} onChangeText={setNovoEmail}/>
                <Text style={styles.input}>Nome</Text>
                <TextInput style={styles.user} value={novoNome} onChangeText={setNovoNome}/>
                <Text style={styles.input}>Data de Nascimento</Text>
                <TextInput style={styles.user} value={novaDataNascimento} onChangeText={setNovaDataNasciment}/>
                <Text style={styles.input}>Senha</Text>
                <TextInput style={styles.user} value={novaSenha} onChangeText={setNovaSenha}/>
                <Button style={{marginBottom: 12}} title="Cadastrar" onPress={addConta}/>
                <Button style={{marginBottom: 12}} title="Fazer Login" onPress={handlePressLogin}/>
                <Button style={{marginTop: 12}} title="Entrar sem login" onPress={handleSemLogin}/>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
export default Cadastro;


const styles = StyleSheet.create({
logo:{
 marginTop:0,
 flex:1,
    justifyContent:"center",
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