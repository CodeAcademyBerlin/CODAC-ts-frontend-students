import gql from "graphql-tag";

export const LOGIN_MUTATION = gql`
 mutation login($email: String!, $password: String!) {
      login(input: { identifier: $email, password: $password }) {
        jwt,
        user {username,
        id,
          email,
          role { type, name, description, id}
	      }
      }
    }
`;
