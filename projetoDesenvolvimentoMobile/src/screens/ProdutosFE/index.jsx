import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { api } from "../../service/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";

const ProdutosFE = ({ navigation }) => {
  const [listaProdutos, setListaProdutos] = useState([]);
  const navigation2 = useNavigation()

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

  const gardarInfo = async (id) => {
    try {
      AsyncStorage.clear();
      await AsyncStorage.setItem("idDoProduto", JSON.stringify(id));
      console.log(id);
      navigation.navigate("DetalhesFE");
    } catch (e) {
      console.log(e);
    }
  };

  const handlePressBack = () => {
    navigation2.navigate('Login')
  }

  return (
    <View style={styles.produtos}>
      <TouchableOpacity onPress={handlePressBack}>
        
      <SimpleLineIcons name="logout" size={34} color="black" style={{marginTop: 30, marginBottom: 20}} />
      </TouchableOpacity>
      <View style={styles.header}>

      <AntDesign name="search1" size={24} color="black" style={{alignSelf: 'center'}} />
        <TextInput placeholder="Buscar produto" style={{...styles.campo,marginLeft: 10, }} />
      </View>
      {listaProdutos.length > 0 ? (
        <FlatList
          data={listaProdutos}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.lista}>
              <Text style={{ fontSize: 30, fontWeight: '700' }}> {item.nome} </Text>

              <Image
                height={300}
                width={300}
                resizeMode="contain"
                source={{ uri: item?.imagem }}
              />
              <Text style={{fontSize: 50, marginBottom: 20}}>R${item.preco}</Text>
              <TouchableOpacity onPress={() => gardarInfo(item.id)}>
                <Text style={styles.ver}> Ver Mais</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <Text>Nenhum produto encontrado</Text>
      )}

      {/* <View style={styles.footer}></View> */}
    </View>
  );
};

export default ProdutosFE;

const styles = StyleSheet.create({
  produtos: {
    flex: 1,

  },
  lista: {
    flex: 0,
    backgroundColor: "snow",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
    
    borderRadius: 7,
    width: '100%'
  },
  header: {
    marginTop: 0,
    height: "5%",
    width: "100%",
    // justifyContent: "center",
    flexDirection: 'row',
    // alignItems: "center",
    // backgroundColor: "blue",
    borderWidth: 2,
    borderRadius: 100,
  },
  footer: {
    height: "7%",
    width: "100%",
    backgroundColor: "blue",
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
    borderColor: 'black',
    borderWidth: 1
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
});
