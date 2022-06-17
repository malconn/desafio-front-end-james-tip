import React from 'react'

export const AppContext = React.createContext()

const AppProvider = (props) => {
  const [data,setData] = React.useState({});
  return ( <AppContext.Provider value={[data,setData]}>{props.children}</AppContext.Provider>)
}

export default AppProvider