const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
    bookCount: Int
  }
  type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    user(username: String): User
  }
  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(
      bookId: String!
      authors: [String]
      image: String
      link: String
      title: String
      description: String
    ): User
    deleteBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
