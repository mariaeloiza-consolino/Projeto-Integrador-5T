/* import { useState } from 'react'
/import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import contador from './components/Ex1/Contador_Ex1'
import incrementar from './components/Ex1/Contador_Ex1'
import decrementar from './components/Ex1/Contador_Ex1'


function App() {

  return (
    <div>
      <h1> Exercício 1:</h1>
      <p>Contagem: {contador} </p>

      <button onClick={incrementar}> Clique aqui para adicionar +1 </button> 
      <button onClick={decrementar}> Clique aqui para remover -1 </button> 

    </div>
  )

}
export default App*/

import { useState } from "react";

function App() {

  const [form, setForm] = useState({
    nome: "",
    email: "",
    cidade: "",
    perfil: "",
    receberNovidades: false,
    observacoes: ""
  });

  function handleChange(event) {
    const { name, value, checked } = event.target;

    setForm({
      ...form,
      [name]: value === 'checkbox' ? checked : value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Nome:", form.nome);
    console.log("Email:", form.email);
    console.log("Cidade:", form.cidade);
    console.log("Perfil:", form.perfil);
    console.log("Receber Novidades:", form.receberNovidades);
    console.log("Observações:", form.observacoes);


  }

  return (
    <div>
      <h2>Cadastro de Livro</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
          />
        </div>

        <div>
    
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

      <div>
          <label>Cidade:</label>
          <input
            type="text"
            name="cidade"
            value={form.cidade}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Perfil:</label>
          <input
            type="text"
            name="perfil"
            value={form.perfil}
            onChange={handleChange}
          />
        </div>

      <div>
          <label>Receber Novidades:</label>
          <input
            type="checkbox"
            name="receberNovidades"
            value={form.receberNovidades}
            onChange={handleChange}
          />
        </div>

      <div>
              <label>Observações:</label>
          <input
            type="text"
            name="observacoes"
            value={form.observacoes}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Cadastrar</button>

      </form>

      <h3>Dados digitados:</h3>
      <pre>{JSON.stringify(form, null, 2)}</pre>

    </div>
  );
}

export default App
