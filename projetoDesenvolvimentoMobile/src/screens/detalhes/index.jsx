import { View, Text, StyleSheet, Button, Image, KeyboardAvoidingView, Alert, ScrollView } from 'react-native'
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { ActivityIndicator, Snackbar, TextInput } from 'react-native-paper'
import { api } from '../../service/api'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from "@react-navigation/core";
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons';



const Detalhes = ({ navigation }) => {

    // id: 0, nome: "", imagem: '', descricao: '', categoria: '', preco: '' 
    const [produto, setProduto] = useState({});
    const [editando, setEditando] = useState(false);
    const [carregando, setCarregando] = useState(true);
    const [visible, setVisible] = React.useState(false);
    const [textoSnack, setTextoSnack] = useState('')

    const onToggleSnackBar = () => setVisible(!visible);
    const onDismissSnackBar = () => setVisible(false);

    const obterproduto = async () => {
        setCarregando(true)
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

    useFocusEffect(useCallback(() => {
        obterproduto()
    }, []))

    const editarProduto = () => {
        setEditando(!editando);
    };

    const salvarAlteracoes = async () => {
        produto.preco = parseFloat(produto.preco);
        console.log(produto.preco);
        if (produto.nome == '') {
            setTextoSnack('nome nao pode ser vazio')
            onToggleSnackBar()
            return;
        }
        if (produto.imagem == '') {
            setTextoSnack('imagem nao pode ser vazio')
            onToggleSnackBar()
            return;
        }
        if (produto.descricao == '') {
            setTextoSnack('descricao nao pode ser vazio')
            onToggleSnackBar()
            return;
        }
        if (produto.categoria == '') {
            setTextoSnack('categoria nao pode ser vazio')
            onToggleSnackBar()
            return;
        }
        if (produto.preco == '') {
            setTextoSnack('preço nao pode ser vazio')
            onToggleSnackBar()
            return;
        }
        if (isNaN(produto.preco)) {
            setTextoSnack('preço tem que ser um numero')
            onToggleSnackBar()
            return;
        }
        try {
            const { data } = await api.put(`/produtos/${produto.id}`, produto);
        } catch (e) {
            console.log(e);
        }
        console.log(produto);
        setEditando(false);
        setTextoSnack('ediçao feita')
        onToggleSnackBar()
    };

    const deletar = () => {
        let alternativa = false;
        Alert.alert('Tem certeza que quer deletar?', 'Essa açao ira deletar permanentemente o produto', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'OK', onPress: async () => {
                    alternativa = true;
                    try {
                        const { data } = await api.delete(`/produtos/${produto.id}`);
                        setTextoSnack('produto apagado')
                        onToggleSnackBar()
                        await new Promise(r => setTimeout(r, 2000));
                        navigation.navigate('MainApp', { screen: 'Produtos' })
                    } catch (e) {
                        console.log(e);
                    }
                }
            },
        ])

    }

    return (
        <ScrollView style={styles.detalhes}>

            <Header />
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('MainApp', { screen: 'Produtos' })}>
                    <AntDesign name="back" size={30} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.item}>
                <View style={{ alignItems: 'center', width: '100%' }}>
                    <TextInput defaultValue={produto.nome} disabled={!editando} style={styles.campos} onChangeText={(valor) => produto.nome = valor} mode='outlined' />
                    {/* {carregando && <ActivityIndicator size="large" />} */}
                    <Image height={300} width={350} resizeMode='contain' source={{ uri: produto?.imagem }} onLoadEnd={() => setCarregando(false)} />
                    <TextInput defaultValue={produto.imagem} disabled={!editando} multiline={true} style={styles.campos} onChangeText={(valor) => produto.imagem = valor} mode='outlined' />
                </View>

                <View style={{ alignItems: 'center', width: '100%',marginTop:30 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>descricao:</Text>
                    <TextInput defaultValue={produto.descricao} disabled={!editando} multiline={true} style={styles.campos} onChangeText={(valor) => produto.descricao = valor} mode='outlined' />
                </View>

                <View style={{ alignItems: 'center', width: '100%',marginTop:30 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Categoria:</Text>
                    <TextInput defaultValue={produto.categoria} disabled={!editando} style={styles.campos} onChangeText={(valor) => produto.categoria = valor} mode='outlined' />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:30 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>preço: </Text>
                    <TextInput defaultValue={produto.preco?.toString()} disabled={!editando} style={{ padding: 3 }} onChangeText={(valor) => produto.preco = valor} mode='outlined' />
                </View>

                <View style={{ flexDirection: 'row', gap: 20, flex: 1, height: 200 ,marginTop:30}}>
                    {!editando ? (
                        <TouchableOpacity onPress={() => editarProduto()} style={{ backgroundColor: "blue", padding: 10, borderRadius: 20, height: 40 }}>
                            <Text style={{ color: "white" }}>Editar</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => salvarAlteracoes()} style={{ backgroundColor: "green", padding: 10, borderRadius: 20, height: 40 }}>
                            <Text style={{ color: "white" }}>Salvar</Text>
                        </TouchableOpacity>
                    )}
                    <TouchableOpacity onPress={() => deletar()} style={{ backgroundColor: "red", padding: 10, borderRadius: 20, height: 40 }}>
                        <Text style={{ color: "white" }}>Deletar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}>
                {textoSnack}
            </Snackbar>
            {editando &&<View style={{height:100}}></View>}
        </ScrollView>
    )
}

export default Detalhes

const styles = StyleSheet.create({
    detalhes: {
        flex: 1,
        backgroundColor: '#E1E1E1',
        minHeight: 700,

    },
    item: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    imagem: {
        height: '20%',
        width: '40%',
    },
    campos: {
        alignItems: 'center',
        padding: 3,
        width: '100%',
    },
})