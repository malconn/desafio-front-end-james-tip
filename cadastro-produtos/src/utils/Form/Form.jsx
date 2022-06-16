import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import FormStyled from './styles.form'

const Form = () => {
  return (
    <>
      <FormStyled>
        <Input type="text" name="codigo-produto" id="codigo-produto" placeholder='Digite o código do produto. Exemplo: 5453'/>
        <Input type="text" name="categoria-produto" id="categoria-produto" placeholder='Digite a categoria do produto. Exemplo: Eletrônico'/>
        <Input type="text" name="nome-produto" id="nome-produto" placeholder='Digite o nome do produto. Exemplo: Smartphone'/>
        <Input type="text" name="nome-fornecedor" id="nome-fornecedor" placeholder='Digite o nome do fornecedor. Exemplo: Aliexpress'/>
        <Input type="text" name="valor-produto" id="valor-produto" placeholder='Digite o valor do produto. Exemplo: 1200'/>
        <Button text='Cadastrar'/>
      </FormStyled>
    </>
    
  )
}
export default Form