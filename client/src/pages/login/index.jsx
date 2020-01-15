import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Button } from 'reactstrap';
import Input from '@components/Form/Input';
import Logo from '@assets/img/logo.png';


const StyledLogo = styled.div`
  height: 45px;
  width: 45px;
  background: url('${Logo}');
  background-size: contain;
  margin: auto;
`;

const StyledHeader = styled.h2`
  text-align: center;
`;

const Register = () => {
  const [formData, setFormData] = React.useState({
    login: '',
    password: '',
    password2: ''
  });

  return (
    <Container className="vh-100">
      <Row className="h-100">
        <Col sm={{ size: 6, offset: 3 }} md={{ size: 4, offset: 4 }} className="m-auto">
          <Container>
            <Row>
              <Col><StyledLogo /></Col>
            </Row>
            <Row className="py-4">
              <Col><StyledHeader>SIGN IN</StyledHeader></Col>
            </Row>
            <Row className="py-1">
              <Col><Input name="login" placeholder="Login" onChange={e => setFormData({ ...formData, login: e.target.value })} /></Col>
            </Row>
            <Row className="py-1">
              <Col><Input name="password" type="password" placeholder="Password" onChange={e => setFormData({ ...formData, password: e.target.value })} /></Col>
            </Row>
            <Row className="py-1">
              <Col sm={{ size: 6, offset: 3 }} md={{ size: 4, offset: 4 }} className="m-auto">
                <Button color="outline-accent" className="text-uppercase" size="sm">Sign in</Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default Register