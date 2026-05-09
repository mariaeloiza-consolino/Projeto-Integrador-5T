import React from "react";
import './ListaFilmes.css';

function ListaFilmes(){
    const filmes = [
        {id: 1, nome: 'O Senhor dos Anéis', categoria: 'Fantasia', nota: 9.8 },
        {id: 2, nome: 'Interestelar', categoria: 'Ficção Científica', nota: 9.0 },
        {id: 3, nome: 'Vingadores: Ultimato', categoria: 'Ação', nota: 8.5 },
        {id: 4, nome: 'O Poderoso Chefão', categoria: 'Drama', nota: 9.2 }
    ];

    return (
        <div className="layout">
            <h2>Catálogo de Filmes</h2>
        <div className="lista"> {filmes.map((filme) => (
          <div key={filme.id} className="filme">
            <div className="info-filme">
              <h3>{filme.nome}</h3>
              <p className="categoria">{filme.categoria}</p>
              <p className="nota"> Nota: {filme.nota}</p>
            </div>
                <button className="botao">Assistir</button>
            </div>
        ))}
        </div>
    </div>
    );
}

export default ListaFilmes;