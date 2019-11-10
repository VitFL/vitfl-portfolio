import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 45px;
  margin-bottom: 3%;
  padding: 0;
  background: transparent;
  border-radius: 0;
  font-size: 1.378rem;
  line-height: 40px;
  border: 0;
  border-bottom: 2px solid #bdbdbd;
  transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1), height 300ms;
  outline: none;
  resize: none;
  overflow: auto;
  &:focus {
    border-bottom: 2px solid #01a093;
    height: 245px;
  }
`;
const Input = ({ name, placeholder, reset }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    reset && setValue("");
  }, [reset]);
  const handleChange = e => {
    const val = e.target.value;
    setValue(val);
  };
  return (
    <StyledTextArea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};
export default Input;
