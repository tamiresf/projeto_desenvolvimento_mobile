import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, Image, TextInput, Button } from 'react-native';
import { StyleSheet, TouchableOpacity } from "react-native";
import EsqueciSenha from "../EsqueciSenha";


const Login = ({ navigation }) => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const navigation2 = useNavigation()

    const handleLogin = async () => {
        const Usuario = { user, password };
        const success = true
        const users = [
            { userName: "rayane", password: "ryn12" },
            { userName: "tamires", password: "tmr13" },
            { userName: "paulo", password: "plg14" }
        ];

        if (user === users.userName && password === users.password) {

            if (success) {
                navigation.navigate("MainApp", { screen: 'Produtos' });
            } else {
                alert("Usuário não encontrado");

            }
        }

    }
    const handleSemLogin = () => {
        navigation2.navigate("FEApp", { screen: 'ProdutosFE' })
    }

    return (
        <KeyboardAvoidingView style={styles.tela}>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.nome}>VIP</Text>
                    <Text style={styles.nomem}>Market</Text>
                </View>
                <Image source={require('../../../assets/nossalogo.png')} style={styles.logo} />
                <View style={styles.login}>
                    <Text style={styles.input}>Usuário</Text>
                    <TextInput style={styles.user} value={user} onChangeText={(text) => setUser(text)} />
                    <Text style={styles.input}>Senha</Text>
                    <TextInput style={styles.senha} value={password} onChangeText={(text) => setPassword(text)} />
                </View>
                <View style={styles.botoes}>
                    <TouchableOpacity style={styles.touchableSemLogin} onPress={handleSemLogin}>
                        <Text>
                            Entrar sem login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableEntrar} onPress={() => handleLogin()}>
                        <Text>
                            Entrar
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.touchable}>
                    <TouchableOpacity onPress={EsqueciSenha}>
                        <Text>
                            Esqueceu senha
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
export default Login;


const styles = StyleSheet.create({
    logo: {
        marginBottom: 120,

    },
    tela: {
        backgroundColor: '#100D28',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nome: {
        color: '#8906E6',
        fontSize: 45,
    },
    nomem: {
        color: '#fff',
        fontSize: 45,
    },
    user: {
        backgroundColor: '#fff',
        borderRadius: 4,
        height: 37,
        marginBottom: 28,
    },
    senha: {
        backgroundColor: '#fff',
        borderRadius: 4,
        height: 37,
    },
    input: {
        color: '#fff',
        fontSize: 20
    },
    login: {
        marginBottom: 50
    },
    touchable: {
        marginBottom: 12,
        backgroundColor: '#8906E6',
        borderRadius: 4,
        padding: 8,
        width: 130,
        alignContent: "center",
        
    },
    touchableEntrar: {
        marginBottom: 12,
        backgroundColor: '#8906E6',
        borderRadius: 4,
        alignItems: "center",
        padding: 8,
        width: 130
    },
    touchableSemLogin: {
        marginBottom: 12,
        backgroundColor: '#8906E6',
        borderRadius: 4,
        alignItems: "center",
        padding: 8,
        width: 130
    },
    botoes: {
        flexDirection: "row"
    }
})