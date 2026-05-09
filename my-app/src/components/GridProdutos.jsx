import React from 'react';
import './GridProdutos.css';

function GridProdutos() {
  const produtos = [
    { id: 1, nome: 'Smart TV 55"', preco: 'R$ 2.500,00', icone: '📺' },
    { id: 2, nome: 'Notebook Core i7', preco: 'R$ 4.200,00', icone: '💻' },
    { id: 3, nome: 'Smartphone 5G', preco: 'R$ 1.800,00', icone: '📱' },
    { id: 4, nome: 'Fone Bluetooth', preco: 'R$ 250,00', icone: '🎧' },
    { id: 5, nome: 'Smartwatch', preco: 'R$ 600,00', icone: '⌚' },
    { id: 6, nome: 'Caixa de Som', preco: 'R$ 350,00', icone: '🔊' }
  ];

  return (
    <div className="vitrine">
      <h1>Vitrine de Produtos</h1>
      
      <div className="produtos">
        {produtos.map((produto) => (
          <div key={produto.id} className="card-grid">
            <div className="icone-produto">{produto.icone}</div>
            <h3>{produto.nome}</h3>
            <p className="preco-grid">{produto.preco}</p>
            <button className="botao">Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridProdutos;