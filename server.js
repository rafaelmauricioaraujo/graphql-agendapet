require('dotenv').config()

const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/database/tabelas');
const Operacoes = require('./infraestrutura/operations');
const { GraphQLServer } = require('graphql-yoga');

conexao.connect(erro => {
  if (erro) {
    console.log(erro)
  }

  console.log('conectou no banco')

  Tabelas.init(conexao)
});

const Clientes = new Operacoes('cliente');

const resolvers = {
  Query: {
    status: () => "Servidor rodando",
    olaMundo: () => 'Olá mundo!',
    clientes: () => Clientes.lista(),
    cliente: (root, { id }) => Clientes.buscaPorId(id)
  },
  Mutation: {
    adicionarCliente: (root, params) =>
      Clientes.adiciona(params),
    atualizarCliente: (root, params) =>
      Clientes.atualiza(params),
    deletarCliente: (root, { id }) => 
      Clientes.deleta(id)
  }
}

const servidor = new GraphQLServer({
  resolvers,
  typeDefs: './schema.graphql'
});
servidor.start(() => console.log('Servidor ouvindo'));
