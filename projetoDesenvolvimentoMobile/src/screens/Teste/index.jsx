import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

export default function Splash() {
  const animation = useRef(null);

  const navigation = useNavigation()
  
  useEffect(() => {
    setTimeout(() => {
        navigation.navigate('Cadastro')
    }, 2000);
  }, []);

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 430,
          height: 932,
          backgroundColor: '#eee',
        }}
        // resizeMode='contain'
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../../../assets/VIPMarket2.json')}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
