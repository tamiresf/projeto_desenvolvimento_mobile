import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { api } from "../../service/api";

const Produtos = () => {
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
    <View>
      {listaProdutos.length > 0 ? (
        <FlatList
          data={listaProdutos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ padding: 20, margin: 10, fontSize: 35 }}>
                {item.nome}
              </Text>
            </View>
          )}
        />
      ) : (
        <Text>Nenhum produto encontrado</Text>
      )}
    </View>
  );
};

export default Produtos;

