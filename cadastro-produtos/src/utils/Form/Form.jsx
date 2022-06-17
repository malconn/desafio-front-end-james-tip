import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import FormStyled from './styles.form'
import { AppContext } from '../Contexts/AppContext'

const Form =  () => {
  const [data,setData] = React.useContext(AppContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries())

    const clearInputs = ()=>{
      event.target.reset()
    }
    const handleLocalStorage = ()=>{
      !localStorage.getItem(data.codigo) && localStorage.setItem(data.codigo, JSON.stringify(data))
    } 
    handleLocalStorage();
    setData(data);
    clearInputs(event);
  }
  return (
    <FormStyled onSubmit={handleSubmit}>
      <Input type='text' name="codigo" id="codigo" placeholder='Digite o código do produto. Exemplo: 5453'/>
      <Input type='text' name="categoria" id="categoria" placeholder='Digite a categoria do produto. Exemplo: Eletrônico'/>
      <Input type='text' name="nome" id="nome" placeholder='Digite o nome do produto. Exemplo: Smartphone'/>
      <Input type='text' name="fornecedor" id="fornecedor" placeholder='Digite o nome do fornecedor. Exemplo: Aliexpress'/>
      <Input type='text' name="valor" id="valor" placeholder='Digite o valor do produto. Exemplo: 1200'/>
      <Button type='submit' text='Cadastrar'/>
    </FormStyled>
  )
}
export default Form