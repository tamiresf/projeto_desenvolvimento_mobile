import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { ActivityIndicator, TextInput } from "react-native-paper";
import { api } from "../../service/api";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/native";
import { SimpleLineIcons } from '@expo/vector-icons'; 

const DetalhesFE = () => {
  // id: 0, nome: "", imagem: '', descricao: '', categoria: '', preco: ''
  const [produto, setProduto] = useState({});
  const [carregando, setCarregando] = useState(true);

  const obterproduto = async () => {
    setCarregando(true);
    try {
      const dado = await AsyncStorage.getItem("idDoProduto");
      const idDoProduto = JSON.parse(dado);
      console.log(idDoProduto);
      const { data } = await api.get(`/produtos/${idDoProduto}`);
      setProduto(data);
      console.log(produto);
    } catch (e) {
      console.log(e);
    }
  };

  useFocusEffect(
    useCallback(() => {
      obterproduto();
    }, [])
  );
  const navigation2 = useNavigation() 
  const handlePressBack = () => {
    navigation2.navigate('ProdutosFE')
  }

  return (
    <View style={styles.detalhes}>
      {/* <Header /> */}
      <TouchableOpacity onPress={handlePressBack}>
        <SimpleLineIcons
          name="logout"
          size={34}
          color="black"
          style={{ marginTop: 40 }}
        />
      </TouchableOpacity>
      <View style={styles.item}>
        <View style={{ alignItems: "center", width: "100%" }}>
          <Text style={{ fontSize: 30, alignSelf: "center" }}>
            {produto.nome}
          </Text>
          {/* <TextInput defaultValue={produto.nome} disabled={false} style={styles.campos} onChangeText={(valor) => produto.nome = valor} /> */}
          {/* {carregando && <ActivityIndicator size="large" />} */}
          <Image
            height={200}
            width={400}
            resizeMode="contain"
            source={{ uri: produto?.imagem }}
            onLoadEnd={() => setCarregando(false)}
          />
        </View>

        <View style={{ alignItems: "center", width: "100%" }}>
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>Descrição:</Text>
          <Text style={{ fontSize: 20, alignSelf: "center" }}>
            {produto.descricao}
          </Text>
          {/* <TextInput defaultValue={produto.descricao} disabled={true} multiline={true} style={styles.campos} onChangeText={(valor) => produto.descricao = valor} /> */}
        </View>

        <View style={{ alignItems: "center", width: "100%" }}>
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>Categoria:</Text>
          <Text style={{ fontSize: 30, alignSelf: "center" }}>
            {produto.categoria}
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>Preço: </Text>
          <Text style={{ fontSize: 30, alignSelf: "center" }}>
            R${produto.preco}
          </Text>
        </View>
        {/* {true ? (<Button title='editar' onPress={() => editarProduto()} />) : ((<Button title='salvar' onPress={() => salvarAlteracoes()} />))} */}
      </View>

      {/* <Footer /> */}
    </View>
  );
};

export default DetalhesFE;

const styles = StyleSheet.create({
  header: {
    height: "10%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    minHeight: 500,
  },
  detalhes: {
    flex: 1,
    backgroundColor: "#E1E1E1",
  },
  item: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  imagem: {
    height: "20%",
    width: "40%",
  },
  campos: {
    alignItems: "center",
    padding: 1,
    width: "100%",
    // backgroundColor:'red',
    flexDirection: "row",
  },
  footer: {
    height: "7%",
    width: "100%",
    backgroundColor: "blue",
  },
});
