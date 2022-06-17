import React from 'react'
import CardStyled from './styles.card'

const Card = ({data}) => {
  return (
    <CardStyled>
      <p>Código do produto: {data.codigo}</p>
      <p>Categoria do produto: {data.categoria}</p>
      <p>Nome do produto: {data.nome}</p>
      <p>Fronecedor do produto: {data.fornecedor}</p>
      <p>Valor do produto: {data.valor}</p>
    </CardStyled>
  )
}

export default Card