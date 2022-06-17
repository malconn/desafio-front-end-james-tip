import React from 'react'
import ButtonStyled from './styles.button'

const Button = ({text,type}) => {
  return (
    <>
      <ButtonStyled type={type}>
        {text}
      </ButtonStyled>
    </>
  )
}

export default Button