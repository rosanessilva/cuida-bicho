const express = require ('express');
const app = express();
const port= 3031;

    const produtos = [

            {
                id: '1',
                nome: 'Poodle',
                preco: 'seu amor...',
                descricao: 'Poodle, de acordo com a Federação Cinológica Internacional é oriunda da França, por ter sido reivindicada, porém ela já era há muito tempo criada em países da Europa Central como a Alemanha. Originalmente, era utilizado como cão de caça a aves aquáticas',
                img: 'https://media.gazetadopovo.com.br/viver-bem/2017/02/poodle-gazeta-do-povo-viver-bem-49e1e5d0.jpg',
                botao: 'Saber mais',
              },
              {
                id: '2',
                nome: 'Doberman',
                preco: 'seu carinho...',
                descricao: 'Dobermann é uma raça de cães do grupo pinscher, oriunda da Alemanha. A raça foi desenvolvida inicialmente por Karl Friedrich Louis Dobermann em Apolda na Alemanha por volta de 1860. Foi a primeira raça criada especialmente para proteção.',
                img: 'https://i.pinimg.com/originals/11/85/84/11858433bdbb6d16be35a4d9363ff41c.jpg',
                botao: 'Saber mais',
              },
              {
                id: '3',
                nome: 'Pinscher',
                preco: 'ser amigo...',
                descricao: 'A pinscher miniatura é uma raça canina de pequeno porte do grupo pinscher e é oriunda da Alemanha. Possui duas variedades de cores, ambas sem marcas brancas.',
                img:  'https://static.vecteezy.com/ti/fotos-gratis/p1/963473-macho-pincher-brinquedo-cachorro-foto.jpg',
                botao: 'Saber mais',
              },
              {
                id: '4',
                nome: 'Pastor Alemão',
                preco: 'seu cuidado...',
                descricao: 'Pastor-alemão ou lobo-da-alsácia é uma raça canina proveniente da Alemanha. Em sua origem era utilizado como cão de pastoreio de rebanhos. Atualmente é mais utilizado como cão de guarda e cão policial.',
                img:  'https://s2.glbimg.com/3Jdy7HOgk83fh-kAs5IhLh-nkfo=/0x0:620x416/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2014/04/17/dog-jury-duty_fran.jpg',
                botao: 'Saber mais',
              },
              {
                id: '5',
                nome: 'Pastor Belga',
                preco: 'seu amor...',
                descricao: 'Pastor-belga é uma raça de cães com origem na Bélgica, que possui 4 variedades com aparências bastante distintas e que não cruzam entre si. Estas são: Malinois, Groenendael, Tervueren e Laekenois.',
                img: 'https://meuamigopet.com.br/wp-content/uploads/2019/10/Pastor-Belga.jpg',
                botao: 'Saber mais',
              },
              {
                id: '6',
                nome: 'Vira-lata',
                preco: 'seu carinho...',
                descricao: 'Vira-lata ou rafeiro é a denominação dada aos cães ou gatos sem raça definida, SRD, sendo CRAND e GRAND, como são geralmente referenciados em textos veterinários.',
                img: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Serena_REFON.jpg',
                botao: 'Saber mais',
              },
    
    ];

app.get('/',(req, res) => {
  res.send('Hello Word');
});

app.get('/produtos', (req, res) => {
  res.send(produtos);
});

app.get('/produtos/:id', (req, res) => {
  const produto = produtos.filter((produto) => produto.id == req.params.id);
  res.send(produto[0]);
});

app.listen(port, '0.0.0.0', () => {
  console.log('Servidor online');
});