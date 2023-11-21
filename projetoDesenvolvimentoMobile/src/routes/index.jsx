import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Detalhes from '../screens/detalhes';
import Home from '../screens/Home';
import EsqueciSenha from '../screens/EsqueciSenha';
import Produtos from '../screens/Produtos';
import Perfil from '../screens/Perfil';

const { Navigator, Screen } = createNativeStackNavigator();

const Rotas = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Perfil" component={Perfil} />
                <Screen name="Home" component={Home} />
                <Screen name="EsqueciSenha" component={EsqueciSenha} />
                <Screen name="Detalhes" component={Detalhes} />
                <Screen name="Produtos" component={Produtos} />
            </Navigator>
        </NavigationContainer >
    );
}

export default Rotas