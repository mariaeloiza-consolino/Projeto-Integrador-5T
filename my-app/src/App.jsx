import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CardSimples from './components/CardSimples'
import ListaProdutos from './components/ListaProdutos'
import MenuHorizontal from './components/MenuHorizontal'
import ListaAluno from './components/ListaAluno'
import ListaFilmes from './components/ListaFilmes'
import CssInline from './components/CssInline'
import TelasUsuarios from './components/TelaUsuarios'
import GridProdutos from './components/GridProdutos'
import BotoesDinamicos from './components/BotoesDinamicos'


function App(){
  return (
    <div>
      <BotoesDinamicos/>
    </div>
  )
}


export default App
