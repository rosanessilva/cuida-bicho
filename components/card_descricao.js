import React from 'react';
import { Button, StyleSheet, Text, View, Image } from "react-native";

export default function Card(props) {
  return (
      <View style={styles.container2}>
        <Image style={styles.imagem} source={{uri: props.img}}></Image>
          <Text style={styles.titulo1} >{props.nome}</Text>
          <Text style={styles.titulo2} >Preço: {props.preco}</Text>
          <Text style={styles.texto_normal} >{props.descricao}</Text>
      </View> 
  );
}

const styles = StyleSheet.create({
  container2: {
    backgroundColor: 'gray',
    marginVertical: 10,
    alignItems: 'center',
    padding: 10,
  },
  container3: {
    flex: 1,
    backgroundColor: 'pink',
    marginBottom: 5,
    borderWidth: 10,
    borderColor: 'pink',
  },
  texto_normal: {
    fontSize: 12 ,
    color: '#444',
    textAlign: 'center',
    marginHorizontal: 40,
    paddingTop: 10,
  },
  titulo1: {
    fontSize: 16 ,
    margin: 5,
    fontWeight: 'bold',
  },
  titulo2: {
    fontSize: 14 ,
    textAlign: 'left',
    margin: 5,
    fontWeight: 'bold',
  },
  imagem:{
    marginRight: 10,
    justifyContent: 'center',
    width: 200,
    height: 200,

  },
});
