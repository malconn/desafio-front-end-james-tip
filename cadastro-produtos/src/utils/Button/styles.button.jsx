import styled from "styled-components";

const ButtonStyled = styled.button`
  cursor: pointer;
  padding: 10px;
  color: black;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  transition: 0.1s;
  background: #19f;
  color: #018;
  :hover{
    background:  #19f;
    box-shadow: 0 0 0 3px #eee, 0 0 0 4px  #19f;
    outline: none;
  }
`

export default ButtonStyled;