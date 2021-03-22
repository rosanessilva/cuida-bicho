import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import Produtos from './views/Produtos';
import Produto from './views/Produto';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="bichos" component={Produtos}  options={{ title: 'Bichinhos' }} />
          <Stack.Screen name="bicho"  component={Produto} options={{ title: 'Bicho selecionado' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}