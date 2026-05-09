import React from 'react';
import './MenuHorizontal.css';

function MenuHorizontal(){
    return(
        <nav className ="menu">
        <a href="#home" className="menu-link">Home</a>
        <a href="#produtos" className="menu-link">Produtos</a>
        <a href="#contato" className="menu-link">Contato</a>
        <a href="#sobre" className="menu-link">Sobre</a>
    </nav>
    )
}


export default MenuHorizontal;