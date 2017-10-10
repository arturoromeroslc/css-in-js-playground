import React, { Component } from 'react';
import styled from 'styled-components';

import Form from './Form';
import Header from './Header';
import { THEME } from './theme';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  background-color: ${THEME.base};
`;

const Stripe = styled.div`
  height: 10vh;
  overflow: hidden;
  transform: skewY(-8deg);
  transform-origin: 0;
  background: linear-gradient(-150deg, rgba(255, 255, 255, 0) 40%, #ddecf7 70%);
`;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      phoneNumber: '',
      fields: ['email', 'phoneNumber'],
      valid: false
    };
  }

  render() {
    return (
      <Container>
        <Header />
        <Stripe />
        <Form />
      </Container>
    );
  }
}