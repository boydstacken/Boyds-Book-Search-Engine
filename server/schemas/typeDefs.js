
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    authors: String!
    description: String!
    title: String!
    image: String
    link: String
  }

  type Auth {
    token: String
    user: User
  }

type BookInput {
    authors: String
    description: String
    bookId: Int
    image: String
    link: String
    title: String
}

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savedBook(book: BookInput!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;