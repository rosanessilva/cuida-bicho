import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View } from "react-native";

import { getProduto } from '../service/ProdutoService';
import Card from "../components/card_descricao";
import Depoimento from "../views/screens/depoimento";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BaseScreen(props) {
  return(
    <Stack.Navigator>
      <Stack.Screen options={{
          headerLeftContainerStyle: { paddingLeft: 20 },
          headerRightContainerStyle: { paddingRight: 20 },
          headerLeft: () => <Ionicons
            name="menu-outline"
            size={25}
            color="#000"
            onPress={() => props.navigation.navigate('bicho')}
          />,
          headerRight: () => <Ionicons
            name="exit-outline"
            size={25}
            color="#000"
            onPress={() => props.navigation.navigate('bichos')}
          />,
        }} /> 
    </Stack.Navigator>
  )
}
function HomeScreen({ navigation }){
return <BaseScreen
navigation = {navigation}
name = {"home"}>
  <View>
    { produto.id && 
    <Card
      id={produto.id}
      nome={produto.nome}
      descricao={produto.descricao}
      img={produto.img}
      botao={produto.botao}
      preco={produto.preco}
      hideButton
    />
    }
  </View>
</BaseScreen>


}

export default function Produto(props) {
  const [produto, setProduto] = useState({});

  useEffect(() => {
    async function loadContent() {
      const produto = await getProduto(props.route.params.idProduto);
      setProduto(produto);
    }
    loadContent();
  });

  return (
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name='home-outline' size={size} color={color} />
          }}
          name="home"
          component={HomeScreen} />
        <Tab.Screen 
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name='settings-outline' size={size} color={color} />
          }}
          name="Depoimentos"
          component={Depoimento} />
      </Tab.Navigator>
  );
 
}