import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Detalhes from '../screens/Detalhes';
import Home from '../screens/Home';
import EsqueciSenha from '../screens/EsqueciSenha';
import Produtos from '../screens/Produtos';
import Perfil from '../screens/Perfil';
import { FontAwesome5 } from '@expo/vector-icons';


const { Navigator, Screen } = createBottomTabNavigator();

const Rotas = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                {/* <Screen name="Detalhes" component={Detalhes} /> */}
                <Screen
                    name="Perfil"
                    component={Perfil}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View>
                                <FontAwesome5
                                    name="user-alt"
                                    size={20}
                                ></FontAwesome5>
                            </View>
                        )
                    }} />
                <Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View>
                                <FontAwesome5
                                    name="home"
                                    size={20}
                                ></FontAwesome5>
                            </View>
                        )
                    }} />

                {/* <Screen
                    name="EsqueciSenha"
                    component={EsqueciSenha} /> */}


                <Screen
                    name="Produtos"
                    component={Produtos}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View>
                                <FontAwesome5
                                    name="search"
                                    size={20}
                                ></FontAwesome5>
                            </View>
                        )
                    }} />

            </Navigator>
        </NavigationContainer >
    );
}

export default Rotas