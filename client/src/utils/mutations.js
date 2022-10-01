import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email:Strings!, $password:Strings!)
{
    login(email:$email, password:$password)
    {
        token
        user 
        {
            _id
            username
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password:String!)
{
    addUser(username:$username,email:$email,password:$password)
    {
        token
        user
        {
            _id
            username
        }
    }
}

`;

export const SAVE_BOOK = gql`
mutation saveBook($input:saveBook!)
{
    saveBook(input:$input)
    {
        username
        saveBooks
        {
            bookId
            tittle
            description
            authors
        }
    }
}

`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!)
{
    removeBook(bookId:$bookId)
    {
        _id
        username
        email
        bookCount
        saveBooks
        {
            bookId
            authors
            description
            tittle
            image
            link
        }
    }
}

`;