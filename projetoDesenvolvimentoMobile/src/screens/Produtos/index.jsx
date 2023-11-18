import React from 'react';
import { View, StyleSheet, FlatList, Image, Dimensions, Text } from 'react-native';

const { width } = Dimensions.get('window');
const paddingHorizontalValue = 20; // Ajuste o valor conforme necessário
const imageWidth = (width - (4 * paddingHorizontalValue)) / 2 - 100; // Ajuste do tamanho do contêiner

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e1e1e1",
    paddingTop: 70, // Margem superior maior
    paddingHorizontal: paddingHorizontalValue, // Margens horizontais maiores
    flex: 1,
  },
  imageContainer: {
    backgroundColor: "#e1e1e1", // Cor do contêiner cinza
    width: imageWidth,
    height: imageWidth, // Altura igual à largura para manter a proporção
    margin: 60, // Espaçamento entre as imagens
    justifyContent: 'center', // Centraliza o conteúdo
    alignItems: 'center', // Centraliza o conteúdo
    overflow: 'hidden', // Impede que a imagem ultrapasse os limites do contêiner
  },
  productText: {
    fontSize: 14,
    textTransform: 'lowercase',
    marginTop: 5, // Espaçamento do texto em relação à imagem
    textAlign: 'center', // Centraliza o texto
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

const Produtos = () => {
  const photos = [
    { id: 1, url: 'https://via.placeholder.com/150/FF0000/FFFFFF' }, 
    { id: 2, url: 'https://via.placeholder.com/150/0000FF/FFFFFF' },
    { id: 1, url: 'https://via.placeholder.com/150/FF0000/FFFFFF' }, 
    { id: 2, url: 'https://via.placeholder.com/150/0000FF/FFFFFF' },
    { id: 1, url: 'https://via.placeholder.com/150/FF0000/FFFFFF' }, 
    { id: 2, url: 'https://via.placeholder.com/150/0000FF/FFFFFF' },
    { id: 1, url: 'https://via.placeholder.com/150/FF0000/FFFFFF' }, 
    { id: 2, url: 'https://via.placeholder.com/150/0000FF/FFFFFF' },
    { id: 1, url: 'https://via.placeholder.com/150/FF0000/FFFFFF' }, 
    { id: 2, url: 'https://via.placeholder.com/150/0000FF/FFFFFF' }, 
    // Adicione outras imagens válidas aqui...
  ];

  const renderPhotos = ({ item }) => (
    <View style={styles.imageContainer}>
      <Text style={styles.productText}>produto</Text>
      <Image source={{ uri: item.url }} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList 
        data={photos}
        renderItem={renderPhotos}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

export default Produtos;























