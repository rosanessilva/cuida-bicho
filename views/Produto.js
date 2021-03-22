import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { getProduto } from '../service/ProdutoService';

import Card from "../components/card_descricao";

export default function Produto(props) {
  const [produto, setProduto] = useState({});

  useEffect(() => {
    async function loadContent() {
      const produto = await getProduto(props.route.params.idProduto);
      setProduto(produto);
    }
    loadContent();
  });

  return <View>
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
}