import { View, Text, FlatList, Image, StyleSheet, Button, TextInput, TouchableOpacity, } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { api } from "../../service/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/core";

const Produtos = ({ navigation }) => {

  const [listaProdutos, setListaProdutos] = useState([]);
  const [pergunta, setPergunta] = useState('')
  const [filtro, setFiltro] = useState([]);

  const getProdutos = async () => {
    try {
      const response = await api.get("/produtos");
      setListaProdutos(response.data);
      setFiltro(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getProdutos();
    }, [])
  );

  const gardarInfo = async (id) => {
    try {
      AsyncStorage.clear();
      await AsyncStorage.setItem("idDoProduto", JSON.stringify(id));
      console.log(id);
      navigation.navigate("Detalhes");
    } catch (e) {
      console.log(e);
    }
  };

  const novoProduto = async () => {
    try {
      const novoProduto = {
        nome: "nome do produto",
        imagem: "url da imagem do produto",
        descricao: "descrição do produto",
        categoria: "categoria do produto",
        preco: "preco do produto",

      }
      const { data } = await api.post("/produtos", novoProduto);
      console.log(data);
      AsyncStorage.clear();
      await AsyncStorage.setItem("idDoProduto", JSON.stringify(data.id));
      navigation.navigate("Detalhes");
    } catch (e) {
      console.log(e);
    }
  };

  const pesquisa = (valor) => {
    setPergunta(valor)
    const fil = listaProdutos.filter((item) => {
      return item.nome.toLowerCase().includes(valor.toLowerCase())
    })
    setFiltro(fil);
  };


  return (
    <View style={styles.produtos}>
      <View style={styles.header}>
        <TextInput placeholder="Buscar produto" style={styles.campo} value={pergunta} onChangeText={(valor) => pesquisa(valor)} />
      </View>
      {listaProdutos.length > 0 ? (
        <FlatList
          data={filtro}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.lista}>
              <Text style={{ fontSize: 20 }}> {item.nome} </Text>

              <Image
                height={100}
                width={100}
                resizeMode="contain"
                source={{ uri: item?.imagem }}
              />
              <TouchableOpacity onPress={() => gardarInfo(item.id)}>
                <Text style={styles.ver}> Ver Mais</Text>
              </TouchableOpacity>
            </View>
          )}
          style={{ width: "100%" }}
        />
      ) : (
        <Text>Nenhum produto encontrado</Text>
      )}

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.adicionar}
          onPress={() => novoProduto()}
        >
          <Text style={styles.adicionarText}>Adicionar Produto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Produtos;

const styles = StyleSheet.create({
  produtos: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  lista: {
    flex: 1,
    backgroundColor: "#aaa",
    margin: 5,
    // justifyContent: "space-evenly",
    alignItems: "center",
    padding: 5,
    borderRadius: 7,
    gap: 0,
    width: "50%",
  },
  header: {
    marginTop: 40,
    height: "10%",
    width: "100%",
    justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "blue",
  },
  footer: {
    height: "7%",
    width: "80%",
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  ver: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#0A8DD8",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    paddingTop: 6,
  },

  adicionar: {
    backgroundColor: "blue",
    borderWidth: 2,
    borderColor: "blue",
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  adicionarText: {
    color: "white",
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
  },
});
