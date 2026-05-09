import React from "react";
import './TelaUsuarios.css';

function TelaUsuarios(){
    const usuarios = [
        { id: 1, nome: 'Alice Silva', email: 'alice.silva@email.com', telefone: '(11) 91111-1111' },
        { id: 2, nome: 'Bruno Costa', email: 'bruno.costa@email.com', telefone: '(21) 92222-2222' },
        { id: 3, nome: 'Carla Dias', email: 'carla.dias@email.com', telefone: '(31) 93333-3333' },
        { id: 4, nome: 'Daniel Mendes', email: 'daniel.mendes@email.com', telefone: '(41) 94444-4444' },
        { id: 5, nome: 'Elisa Torres', email: 'elisa.torres@email.com', telefone: '(51) 95555-5555' }
  ];

    return (
        <div className="tela">
            <h1> Lista de Usuários </h1>
        <div className="usuarios">
            {usuarios.map((usuario) => (
                <div key={usuario.id} className="card-usuario">
                <h2>{usuario.nome}</h2>
                <p><strong>Email:</strong> {usuario.email}</p>
                <p><strong>Telefone:</strong> {usuario.telefone}</p>
                </div>
            ))}
        </div>
        </div>
    );
}

export default TelaUsuarios;