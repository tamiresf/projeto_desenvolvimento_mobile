import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-paper'
import { api } from '../../service/api'




const Detalhes = () => {

    const [produto, setProduto] = useState({})

    const obterproduto = async () => {
        try {
            const { data } = await api.get("/produtos/2");
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
            <View style={styles.header}>
                <TextInput placeholder='pesquise aqui' style={{ borderRadius: 7 }} />
            </View>

            <View style={styles.item}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 30 }}>{produto.nome}</Text>
                    <View style={styles.imagem}>
                        <Image height={200} width={300} source={{ uri: produto.imagem }} />
                    </View>
                </View>

                <Text>descricao: {produto.descricao}</Text>
                <Text>categoria: {produto.categoria}</Text>
                <Text>preço: R${produto.preco}</Text>
                <Button title='editar' />
            </View>
            <View style={styles.footer}>

            </View>
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
        backgroundColor: 'gray',
    },
    footer: {
        height: '7%',
        width: '100%',
        backgroundColor: 'blue',
    }
})