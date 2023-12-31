import React, { View, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Detalhes from '../screens/Detalhes';
import EsqueciSenha from '../screens/EsqueciSenha';
import Produtos from '../screens/Produtos';
import Perfil from '../screens/Perfil';
import { FontAwesome5 } from '@expo/vector-icons';
import Splash from '../screens/Teste';
import Login from '../screens/Login';
import ProdutosFE from '../screens/ProdutosFE';
import DetalhesFE from '../screens/DetalhesFE';
import Cadastro from '../screens/Cadastro';
import { AuthContext } from '../contexts/AuthContext';

const { Navigator, Screen } = createBottomTabNavigator();

const TabScreens = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Produtos" component={Produtos} options={{ tabBarIcon: ({ focused }) => (<FontAwesome5 name="search" size={20}></FontAwesome5>), }} />
      <Screen name="Perfil" component={Perfil} options={{ tabBarIcon: ({ focused }) => (<FontAwesome5 name="user-alt" size={20}></FontAwesome5>), }} />
    </Navigator>
  );
};

const TabFrontEnd = createBottomTabNavigator()

const TBF = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="ProdutosFE" component={ProdutosFE} options={{ tabBarIcon: ({ focused }) => (<FontAwesome5 name="search" size={20}></FontAwesome5>), }} />
      <Screen name="Perfil" component={Perfil} options={{ tabBarIcon: ({ focused }) => (<FontAwesome5 name="user-alt" size={20}></FontAwesome5>), }} />
    </Navigator>
  )
}

const Stack = createStackNavigator();

const Rotas = () => {

  const { user, verificaNivelAcesso } = useContext(AuthContext);
  console.log(user);


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        

        {user  ? (
          <>
            <Stack.Screen name="MainApp" component={TabScreens} options={{ headerShown: false }} />
            <Screen name="Detalhes" component={Detalhes} />
            
          </>
        ) : (
          <>
             <Stack.Screen name="Splash" component={Splash} options={{ tabBarVisible: false }} />
            <Stack.Screen name="Cadastro" component={Cadastro} options={{ tabBarVisible: false }} />
            <Stack.Screen name="Login" component={Login} options={{ tabBarVisible: false }} />
            <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} options={{ headerShown: false }} />
            <Stack.Screen name="FEApp" component={TBF} options={{ headerShown: false }} />
            <Screen name="DetalhesFE" component={DetalhesFE} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Rotas;