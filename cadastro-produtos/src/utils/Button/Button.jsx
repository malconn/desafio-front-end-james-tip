import React from 'react'
import ButtonStyled from './styles.button'

const Button = ({text}) => {
  return (
    <>
      <ButtonStyled onClick={(event)=> event.preventDefault()}>
        {text}
      </ButtonStyled>
    </>
  )
}

export default Button