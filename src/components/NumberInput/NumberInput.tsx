import styled from "styled-components";

const NumberInput = styled.input`
  width: 96px;
  height: 64px;
  padding-top: 8px;
  background: none;
  border: none;
  user-select: none;
  font-size: 36px;
  border-bottom: 3px solid silver;
  text-align: center;
  transition: 0.5s;
  margin-bottom: 24px;
  float: left;
  
  &:hover {
    border-bottom: 3px solid gray;
  }
  
  &:focus {
    outline-style: dotted;
  }
  
  &::-webkit-inner-spin-button, &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;

export default NumberInput;