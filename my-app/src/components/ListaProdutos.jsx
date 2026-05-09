import React from 'react';
import './ListaProdutos.css';

        function ListaProdutos(){
            const produtos = [
                {id: 1, nome: 'Teclado Mecânico', preco: 'R$ 350,00', corFundo: '#ffe4e1' },
                {id: 2, nome: 'Mouse Gamer', preco: 'R$ 150,00', corFundo: '#e0ffff' },     
                {id: 3, nome: 'Monitor 24"', preco: 'R$ 800,00', corFundo: '#f0fff0' },     
                {id: 4, nome: 'Headset', preco: 'R$ 220,00', corFundo: '#fff0f5' }
            ];
            
            return(
            <div className="lista">
                <h2> Produtos </h2>
                {produtos.map((produto) => (    
                    <div key={produtos.id} className="produto" style={{ backgroundColor: produto.corFundo }}>
                        <h3> {produto.nome} </h3>
                        <p className="preco">{produto.preco}</p>
                    </div>
            ))}
            </div>
            );
        }

export default ListaProdutos;