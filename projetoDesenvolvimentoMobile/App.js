import { StatusBar } from "expo-status-bar";
import Rotas from "./src/routes";
import { View, Text } from 'react-native'
export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar style="auto"/>
      <Rotas />
    </View>
  );
}

