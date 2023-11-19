import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { api } from "../../service/api";


const Produtos = () => {
  const [listaProdutos, setListaProdutos] = useState([]);
  const [listaImpar, setListaImpar] = useState([]);
  const [listaPar, setListaPar] = useState([]);

  const getProdutos = async () => {
    try {
      const response = await api.get("/produtos");
      setListaProdutos(response.data);
      console.log(response.data);

      setListaPar(listaProdutos.filter(produtos => produtos.id%2==0))
      listaProdutos.filter(produtos => produtos.id%2==0)
      console.log(listaPar)

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
          data={listaPar}
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
                <Image height= {100} width= {100} source={{uri:item?.imagem}}/>
                
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

