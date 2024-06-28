const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    getUserById(id: ID!): User
    getAllItems: [Item]
  }

  type Mutation {
    createUser(username: String!, pin: Int!): User
    createItem(name: String!, price: Int!, stock: Int!): Item
  }

  type User {
    _id: ID!
    username: String!
    pin: Int!
  }

  type Item {
    _id: ID!
    name: String!
    price: Int!
    stock: Int!
  }
`;

module.exports = typeDefs;