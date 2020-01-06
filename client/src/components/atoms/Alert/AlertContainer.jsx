import React from "react";
import styled from "styled-components";
import { useAlert } from "@atoms/Alert/AlertProvider";
import AlertItem from "@atoms/Alert/AlertItem";

const Container = styled.div`
  position: fixed;
  bottom: 25px;
  right: 25px;
  max-width: 460px;
`;
const AlertContainer = () => {
  const { alertItems } = useAlert();

  const alertComponents = alertItems.map((alertItem, index) => {
    const { color, body, timeout } = alertItem;
    return (
      <AlertItem key={index} color={color} body={body} timeout={timeout} />
    );
  });

  return <Container>{alertComponents}</Container>;
};

export default AlertContainer;
