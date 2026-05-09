import React from "react";
import './ListaAluno.css';

function ListaAluno(){
    const alunos = [
    { id: 1, nome: 'Gustavo', nota: 8.5 },
    { id: 2, nome: 'Gabriel', nota: 5.0 },
    { id: 3, nome: 'Maria Eloiza', nota: 10.0 },
    { id: 4, nome: 'Luiz Felipe', nota: 4.5 }
  ];

return (
    <div className ="layout">
        <h2> Boletim da Turma </h2>

    <ul className = "lista">
        {alunos.map((aluno) => (
            <li key = {aluno.id} className="aluno">
                <span className="nome-aluno">{aluno.nome}</span>
                <span className={aluno.nota >= 7 ? 'aprovado' : 'reprovado'}>        
                    Nota: {aluno.nota.toFixed(1)}
                </span>
            </li>
        ))}
    </ul>
    </div>
    )
}

export default ListaAluno;