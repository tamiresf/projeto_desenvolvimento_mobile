import { View, Text, FlatList, Image, StyleSheet, Button, TextInput, } from "react-native";
import React, { useEffect, useState } from "react";
import { api } from "../../service/api";

const Produtos = ({ navigation }) => {
  const [listaProdutos, setListaProdutos] = useState([]);

  const getProdutos = async () => {
    try {
      const response = await api.get("/produtos");
      setListaProdutos(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <View style={styles.produtos}>
      <View style={styles.header}>
        <TextInput placeholder="pesquise aqui" style={{ borderRadius: 7 }} />

      </View>
      {listaProdutos.length > 0 ? (
        <FlatList
          data={listaProdutos}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.lista}>
              <Text style={{ fontSize: 20 }}> {item.nome} </Text>

              <Image height={100} width={100} resizeMode="contain" source={{ uri: item?.imagem }} />
              <Button
                title="ver mais"
                onPress={() => navigation.navigate("Detalhes")}
              />
            </View>
          )}
        />
      ) : (
        <Text>Nenhum produto encontrado</Text>
      )}

      <View style={styles.footer}>
      </View>
    </View>
  );
};

export default Produtos;

const styles = StyleSheet.create({
  produtos: {
    flex: 1,
  },
  lista: {
    flex: 1,
    backgroundColor: "#aaa",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 7,
  },
  header: {
    height: "10%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  footer: {
    height: "7%",
    width: "100%",
    backgroundColor: "blue",
  },
});
