import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div``;

const StyledInput = styled.input`
  width: 100%;
  height: 45px;
  margin-bottom: 3%;
  padding: 0;
  background: transparent;
  border-radius: 0;
  font-size: 1.378rem;
  line-height: 45px;
  border: 0;
  border-bottom: 2px solid var(--light);
  outline: none;
  transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    border-bottom: 2px solid #01a093;
  }
  &.invalid {
    border-bottom: 2px solid var(--danger);
  }
`;

const Input = ({ name, placeholder, reset }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    reset && setValue('');
  }, [reset]);

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
  };
  return (
    <InputContainer>
      <StyledInput
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        autocomplete="false"
      />
    </InputContainer>
  );
};
export default Input;
