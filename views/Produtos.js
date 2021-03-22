import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, FlatList} from 'react-native';

import Card from '../components/cards';

import { getProdutos } from '../service/ProdutoService'; 

export default function Produtos(props) {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function loadContent() {
      const produtos = await getProdutos();
      setProdutos(produtos);
    }
    loadContent();
  });

  var desenhandoItens = ({ item  }) => {
    return <Card  
    {... props}
    id={item.id}
    nome={item.nome}
    preco={item.preco}
    img= {item.img}
    botao= {item.botao}
    descricao={item.descricao}
    />;
  }

  return (
     <View style={styles.container1}>
      <StatusBar style="auto" />
      <FlatList 
        data= {produtos}
        renderItem= {desenhandoItens}
        keyExtractor={(item) => item.id}
      />
    </View> 
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    paddingTop: 20,
  },
 
});
