import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './modules/Home/Home'

import Cadastro from './modules/Cadastro/Cadastro';
import AppProvider from './utils/Contexts/AppContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
              <Home />
          } />
          <Route path="/cadastro" element={
              <Cadastro />
          } />
        </Routes>
      </BrowserRouter>
    </AppProvider>
    
  </React.StrictMode>
  
)