import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String! ) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, passowrd: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation SaveBook ($input: BookInput!) {
    saveBook(input){
        bookId
        username
    }
  }
`;  

export const REMOVE_BOOK = gql`
mutation RemoveBook ($bookId: ID!) {
    removeBook(bookId: $bookId){
        bookId
        username
    }
    }
`;    
