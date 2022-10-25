import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(
    $bookId: String!
    $authors: [String]
    $image: String
    $link: String
    $title: String
    $description: String
  ) {
    saveBook(
      bookId: $bookId
      authors: $authors
      image: $image
      link: $link
      title: $title
      description: $description
    ) {
      _id
      username
      savedBooks {
        bookId
        title
      }
    }
  }
`;
export const DELETE_BOOK = gql`
  mutation deleteBook($bookId: String!) {
    deleteBook(bookId: $bookId) {
      _id
      savedBooks {
        title
      }
    }
  }
`;
