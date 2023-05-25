import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';

import './index.css';
import Home from './pages/Home';
import CadastroPage from './pages/Cadastro';
import { queryClient } from './services/queryClient';
import EdicaoPage from './pages/Edicao';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/formulario' element={<CadastroPage/>}/>
        <Route path='/edicao/:id' element={<EdicaoPage/>}/>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

