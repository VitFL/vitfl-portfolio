import React from 'react';
import styled from 'styled-components';
import { useAlert } from '@atoms/Alert/AlertProvider';
import AlertItem from '@atoms/Alert/AlertItem';

const Container = styled.div`
  position: fixed;
  bottom: 25px;
  right: 25px;
`;
const AlertContainer = () => {
  const { alertItems } = useAlert();

  const alertComponents = alertItems.map((alertItem, index) => {
    const { color, text, timeout } = alertItem;
    return <AlertItem key={index} color={color} text={text} timeout={timeout} />;
  });

  return <Container>{alertComponents}</Container>;
};

export default AlertContainer;
