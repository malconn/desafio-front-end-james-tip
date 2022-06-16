import styled from 'styled-components'

const InputStyle = styled.input`
  margin:2px 0;
  padding: 10px;
  border-radius: 7px;
  display: block;
  border: 1px solid #ccc;
  width: 100%;
  background: #eee;
  transition: 0.2s;
  :focus{
    outline: none;
    border-color: #19f;
    background: white;
    box-shadow: 0 0 0 3px #adf;
  }
`

export default InputStyle