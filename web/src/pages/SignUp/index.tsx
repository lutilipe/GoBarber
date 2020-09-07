import React from 'react';

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Container, Content, Background } from './styles';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  function handleSubmit(data: unknown): void {
    console.log(data);
  }

  return (
    <>
      <Container>
        <Background />
        <Content>
          <img src={logo} alt="GoBarber" />
          <Form onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>
            <Input
              type="text"
              placeholder="Username"
              name="name"
              icon={FiUser}
            />
            <Input
              type="text"
              placeholder="E-mail"
              name="email"
              icon={FiMail}
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              icon={FiLock}
            />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <a href="/signup">
            <FiArrowLeft />
            Voltar para login
          </a>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
