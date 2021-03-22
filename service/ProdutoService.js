import axios from 'axios';

var getProdutos = async() => {
    //conectar com o servidor 
    //retornar os dados

    const response = await axios.get('http://192.168.1.8:3031/produtos');
    return response.data;
}
var getProduto = async (id) => {
    const response = await axios.get('http://192.168.1.8:3031/produtos/' + id);
    return response.data;
  }

export { getProdutos, getProduto };