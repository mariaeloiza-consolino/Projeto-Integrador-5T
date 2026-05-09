import React from 'react';
import './BotoesDinamicos.css'; 

function Botao({ tipo, texto }) {
  return (
    <button className={`botao ${tipo}`}>
        {texto}
        </button>
    );
}

function BotoesDinamicos() {
  return (
    <div className="botoes-layout">
      <h2>Ações do Sistema</h2>
      
      <div className="grupo-botoes">
        <Botao tipo="sucesso" texto="Salvar Alterações" />
        <Botao tipo="erro" texto="Excluir Conta" />
        <Botao tipo="aviso" texto="Limpar Campos" />
      </div>
    </div>
  );
}

export default BotoesDinamicos;