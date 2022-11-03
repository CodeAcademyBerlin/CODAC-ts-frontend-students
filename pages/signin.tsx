import {
  Button,
  Form,
  Input,
  Wrapper
} from '../styles/sharedstyles'

import { useState } from 'react'

import { useAuth } from '../context/auth';
import { useLoginMutation } from '../generated';
export default function SignIn() {
  const { handlelogin } = useAuth()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMutation, { data, loading, error }] = useLoginMutation({
    variables: {
      email,
      password
    },
  });
  console.log('data', data)
  console.log('loading', loading)

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    loginMutation();
  };


  return (
    <>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>Login</Button>
        </Form>
      </Wrapper>
    </>
  );
}

