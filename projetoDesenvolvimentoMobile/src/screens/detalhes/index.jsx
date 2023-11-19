import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, TextInput } from 'react-native-paper'
import { api } from '../../service/api'




const Detalhes = () => {

    // id: 0, nome: "", imagem: '', descricao: '', categoria: '', preco: '' 
    const [produto, setProduto] = useState({})
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

            <View style={styles.header}>
                <TextInput placeholder='pesquise aqui' style={{ borderRadius: 7 }} />
            </View>

            <View style={styles.item}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 30 }}>{produto.nome}</Text>
                    <View style={styles.imagem}>
                        {carregando && <ActivityIndicator size="large" />}
                        <Image height={200} width={500} resizeMode='contain' source={{ uri: produto?.imagem }} onLoadEnd={() => setCarregando(false)} />
                    </View>
                </View>

                <View style={{alignItems:'center'}}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>descricao:</Text>
                    <View style={styles.campos}>
                        <Text>{produto.descricao}</Text>
                    </View>
                </View>

                <View >
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>categoria:</Text>
                    <View style={styles.campos}>
                        <Text>{produto.categoria}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>preço: </Text>
                    <Text style={{ padding: 5, borderWidth: 1, borderColor: '#aaa', backgroundColor: '#eee', borderRadius: 10, }}>R${produto.preco}</Text>
                </View>
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
    },
    campos: {
        padding: 5,
        borderWidth: 1,
        borderColor: '#aaa',
        backgroundColor: '#eee',
        borderRadius: 10,
    },
    footer: {
        height: '7%',
        width: '100%',
        backgroundColor: 'blue',
    },
})