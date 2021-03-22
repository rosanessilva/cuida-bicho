import React from 'react';
import { Button, StyleSheet, Text, View, Image } from "react-native";


export default function Card(props) {
  return (
      <View style={styles.container2} >
        <Image style={styles.imagem} source={{uri: props.img}}></Image>
        <View style={styles.container3}>
          <Text style={styles.titulo1} >{props.nome}</Text>
          <Text style={styles.titulo1} >Preço: {props.preco}</Text>
          <Button 
            title={props.botao}
            onPress= {() => props.navigation.navigate('bicho', {idProduto: props.id,} )} 
          />
        </View>
      </View> 
  );
}

const styles = StyleSheet.create({
  container2: {
    flexDirection: 'row',
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
    fontSize: 14 ,
    color: '#444',
    textAlign: 'justify',
  },
  titulo1: {
    fontSize: 14 ,
    fontWeight: 'bold',
  },
  imagem:{
    marginRight: 10,
    justifyContent: 'center',
    width: 80,
    height: 80,

  },
});
