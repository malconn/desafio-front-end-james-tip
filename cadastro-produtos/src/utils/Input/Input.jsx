import React from 'react'
import InputStyle from './styles.input'

const Input =  ({type,name,id,placeholder}) => {
  // const [valueInput,setValueInput] = React.useState(null);
  return (
    <InputStyle type={type} name={name} id={id} placeholder={placeholder} 
      onChange={(event)=>{
      //  setData((prevState) => [...prevState ,event.target.value])
      }} 
    />
  )
}


export default Input