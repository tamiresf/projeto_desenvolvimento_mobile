import { View, Text, StyleSheet, Button, Image, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, TextInput } from 'react-native-paper'
import { api } from '../../service/api'
import Header from '../../components/Header'
import Footer from '../../components/Footer'




const Detalhes = () => {

    // id: 0, nome: "", imagem: '', descricao: '', categoria: '', preco: '' 
    const [produto, setProduto] = useState({})
    const [editando, setEditando] = useState(false)
    const [carregando, setCarregando] = useState(true)

    const obterproduto = async () => {
        setCarregando(true)
        try {
            const { data } = await api.get("/produtos/1");
            setProduto(data);
            console.log(produto);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        obterproduto()
    }, [])

    return (
        <View style={styles.detalhes}>

            <Header />

            <View style={styles.item}>
                <View style={{ alignItems: 'center', width: '100%' }}>
                    <TextInput defaultValue={produto.nome} disabled={!editando} style={styles.campos} />
                    {carregando && <ActivityIndicator size="large" />}
                    <Image height={200} width={400} resizeMode='contain' source={{ uri: produto?.imagem }} onLoadEnd={() => setCarregando(false)} />
                </View>

                <View style={{ alignItems: 'center', width: '100%' }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>descricao:</Text>
                    <TextInput defaultValue={produto.descricao} disabled={!editando} multiline={true} style={styles.campos} />
                </View>

                <View style={{ alignItems: 'center', width: '100%' }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Categoria:</Text>
                    <TextInput defaultValue={produto.categoria} disabled={!editando} style={styles.campos} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>preço: </Text>
                    <TextInput defaultValue={produto.preco?.toString()} disabled={!editando} multiline={true} />
                </View>
                {!editando ? (<Button title='editar' onPress={() => setEditando(!editando)} />) : ((<Button title='salvar' onPress={() => setEditando(!editando)} />))}

            </View>

            <Footer />
        </View>
    )
}

export default Detalhes

const styles = StyleSheet.create({
    header: {
        height: '10%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "blue",
    },
    detalhes: {
        flex: 1,
        backgroundColor: '#E1E1E1',

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
        padding: 1,
        width: '100%',
        // backgroundColor:'red',
        flexDirection: 'row',
    },
    footer: {
        height: '7%',
        width: '100%',
        backgroundColor: 'blue',
    },
})