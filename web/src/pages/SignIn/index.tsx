import React from 'react';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <img src={logo} alt="GoBarber" />
          <form action="">
            <h1>Faça seu login</h1>
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

            <Button type="submit">Entrar</Button>
            <a href="/forgot">Esqueci minha senha</a>
          </form>

          <a href="/signup">
            <FiLogIn />
            Criar conta
          </a>
        </Content>

        <Background />
      </Container>
    </>
  );
};

export default SignIn;
