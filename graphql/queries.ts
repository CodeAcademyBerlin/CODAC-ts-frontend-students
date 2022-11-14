import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
 mutation login($email: String!, $password: String!) {
      login(input: { identifier: $email, password: $password }) {
        jwt,
        user {
          username,
          id,
          email,
          role { 
            type, 
            name, 
            description, 
            id
            }
	      }
      }
    }
`;
export const GET_ME_QUERY = gql`
 query getMe {
             me {
        role {
          name
        }
        email
        id
        username
      }
    }
`;
export const GET_STUDENTS = gql`
query getStudents {
  students {
    data {
      attributes {
        email
      }
    }
  }
}
`;
export const GET_JOBS = gql`
query getJobs {
    jobPosts{
        data{
            attributes{
                position
                company
                fileld
                createdAt
                updatedAt
                description  
            }
        }
    }
  }
`;
