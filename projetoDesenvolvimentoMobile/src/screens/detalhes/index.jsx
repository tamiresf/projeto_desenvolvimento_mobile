import { View, Text, StyleSheet, Button, Image, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, TextInput } from 'react-native-paper'
import { api } from '../../service/api'
import Header from '../../components/Header'
import Footer from '../../components/Footer'




const Detalhes = () => {

    // id: 0, nome: "", imagem: '', descricao: '', categoria: '', preco: '' 
    const [produto, setProduto] = useState({});
    const [editando, setEditando] = useState(false);
    const [carregando, setCarregando] = useState(true);

    const [nomeEditado, setNomeEditado] = useState('');
    const [descricaoEditado, setDescricaoEditado] = useState('');
    const [categoriaEditado, setCateoriaEditado] = useState('');
    const [precoEditado, setPrecoEditado] = useState('');

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

    const editarProduto = () => {
        setEditando(!editando);
    };

    const verdesc = (des) => {
        console.log(descricaoEditado);
        if (des == '') {
            console.log("if " + descricaoEditado);
            setDescricaoEditado(produto.descricao)
        } else {

            console.log("else " + descricaoEditado);
            setDescricaoEditado(des)
        }
    }
    const vercat = (cat) => {
        if (cat == '') {
            setCateoriaEditado(produto.categoria)
        } else {
            setCateoriaEditado(cat)
        }
    }
    const vernom = (nom) => {
        if (nom == '') {
            setNomeEditado(produto.nome)
        } else {
            setNomeEditado(nom)
        }
    }
    const verpre = (pre) => {
        if (pre == '') {
            setPrecoEditado(produto.preco)
        } else {
            setPrecoEditado(pre)
        }
    }
    const inter = () => {
        if (nomeEditado == '') {
            setNomeEditado(produto.nome)
        }
        if (descricaoEditado == '') {
            setDescricaoEditado(produto.descricao)
        }
        if (categoriaEditado == '') {
            setCateoriaEditado(produto.categoria)
        }
        if (precoEditado == '') {
            setPrecoEditado(produto.preco)
        }
    }

    const salvarAlteracoes = async () => {
        console.log(nomeEditado);
        const produtoeditado = {
            id: produto.id,
            nome: nomeEditado,
            descricao: descricaoEditado,
            categoria: categoriaEditado,
            preco: precoEditado,
        }
        try {
            const { data } = await api.put(`/produtos/1`, produtoeditado);
        } catch (e) {
            console.log(e);
        }
        console.log(produtoeditado);
        setEditando(false);
    };

    return (
        <View style={styles.detalhes}>

            <Header />

            <View style={styles.item}>
                <View style={{ alignItems: 'center', width: '100%' }}>
                    <TextInput placeholder={produto.nome} disabled={!editando} style={styles.campos} value={nomeEditado} onChangeText={(nom) => vernom(nom)} />
                    {carregando && <ActivityIndicator size="large" />}
                    <Image height={200} width={400} resizeMode='contain' source={{ uri: produto?.imagem }} onLoadEnd={() => setCarregando(false)} />
                </View>

                <View style={{ alignItems: 'center', width: '100%' }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>descricao:</Text>
                    <TextInput placeholder={produto.descricao} disabled={!editando} multiline={true} style={styles.campos} value={descricaoEditado} onChangeText={(des) => verdesc(des)} />
                </View>

                <View style={{ alignItems: 'center', width: '100%' }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Categoria:</Text>
                    <TextInput placeholder={produto.categoria} disabled={!editando} style={styles.campos} value={categoriaEditado} onChangeText={(cat) => vercat(cat)} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>preço: </Text>
                    <TextInput placeholder={produto.preco?.toString()} disabled={!editando} multiline={true} value={precoEditado} onChangeText={(pre) => verpre(pre)} />
                </View>
                {!editando ? (<Button title='editar' onPress={() => editarProduto()} />) : ((<Button title='salvar' onPress={() => salvarAlteracoes()} />))}

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
        minHeight: 500,
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