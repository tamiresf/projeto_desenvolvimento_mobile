import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Detalhes from '../screens/Detalhes';
import Home from '../screens/Home';
import EsqueciSenha from '../screens/EsqueciSenha';
import Produtos from '../screens/Produtos';

const { Navigator, Screen } = createNativeStackNavigator();

const Rotas = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Produtos" component={Produtos} />
                <Screen name="Detalhes" component={Detalhes} />
                <Screen name="EsqueciSenha" component={EsqueciSenha} />
                <Screen name="Home" component={Home} />
            </Navigator>
        </NavigationContainer >
    );
}

export default Rotas