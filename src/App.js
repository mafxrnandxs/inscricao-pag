import React, { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [isUserRegistered, setIsUserRegistered] = useState(false); // novo estado

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form); // envie os dados do formulário para um servidor aqui
    alert('Usuário cadastrado!');; // atualize o estado para indicar que o usuário foi cadastrado com sucesso
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <h1>Inscreva-se</h1>
      <label>
        Nome:
        <input type="text" name="firstName" value={form.firstName} onChange={handleChange} />
      </label>
      <label>
        Sobrenome:
        <input type="text" name="lastName" value={form.lastName} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={form.email} onChange={handleChange} />
      </label>
      <label>
        Senha:
        <input type="password" name="password" value={form.password} onChange={handleChange} />
      </label>
      <button type="submit">Enviar</button>
      {isUserRegistered && <p>Usuário cadastrado com sucesso!</p>}
    </form>
  );
}

export default App;