import React from 'react'
import InputStyle from './styles.input'

const Input = ({name,id,placeholder}) => {
  return (
    <InputStyle name={name} id={id} placeholder={placeholder}/>
  )
}


export default Input