import React from 'react'
import InputStyle from './styles.input'

const Input =  ({type,name,id,placeholder}) => {
  return (
    <InputStyle type={type} name={name} id={id} placeholder={placeholder}/>
  )
}


export default Input