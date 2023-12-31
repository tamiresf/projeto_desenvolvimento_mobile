import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TextInput,
  Button,
} from "react-native";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";

const Login = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  // const [success, setSuccess] = useState(false);
  // const [listaUser, setListaUser] = useState([]);
  const navigation2 = useNavigation();
  const navigation3 = useNavigation();

  const { signin } = useContext(AuthContext);

  const handleLogin = () => {

    const Usuario = { user, password };
    if (Usuario.user==='' || Usuario.password==='') {
        alert('Preencha todos os campos')
        return;
    }
    signin(user, password);

  };
  const handleSemLogin = () => {
    navigation2.navigate("FEApp", { screen: "ProdutosFE" });
  };
  const handleEsqueceuSenha = () => {
    navigation3.navigate("EsqueciSenha");
  };

  const navigation4 = useNavigation()
  const handleCadastro = () => {
    navigation4.navigate("Cadastro");
  };

  return (
    <KeyboardAvoidingView style={styles.tela}>
      <View>
        
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.nome}>VIP </Text>
          <Text style={styles.nomem}>Market </Text>
        </View>
        <Image
          source={require("../../../assets/nossalogo.png")}
          style={styles.logo}
        />
        <View style={styles.login}>
          <Text style={styles.input}>Usuário</Text>
          <TextInput
            style={styles.user}
            value={user}
            onChangeText={(text) => setUser(text)}
          />
          <Text style={styles.input}>Senha</Text>
          <TextInput
            style={styles.senha}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <TouchableOpacity onPress={handleEsqueceuSenha}>
            <Text style={{ color: "#fff" }}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>



        <View style={styles.botoes}>
          <TouchableOpacity onPress={() => handleLogin()} style={styles.button}>
            <Text style={{ textAlign: "center", color: "#fff", fontWeight: 'bold' }}>Entrar</Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={handleSemLogin} style={styles.button}>
            <Text style={{ textAlign: "center", color: "#fff", fontWeight: 'bold' }}>Entrar sem login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCadastro} style={styles.button}>
            <Text style={{ textAlign: "center", color: "#fff", fontWeight: 'bold' }}>Cadastre-se</Text>
          </TouchableOpacity>

          <View style={styles.touchable}>



          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
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
    height: 30,
    marginBottom: 28,
  },
  senha: {
    backgroundColor: '#fff',
    borderRadius: 4,
    height: 30,
  },
  input: {
    color: '#fff'
  },
  button: {
    color: "#fff",
    backgroundColor: "#8906E6",
    padding: 10,
    borderRadius: 5,
    marginRight: 50,
    marginLeft: 50,
    marginTop: 12
  }
})
