import { useReducer, useState } from 'react';

function App() {
  // para declarar una const de estado se utiliza el destructuring de un arreglo: 
  // primero el "Valor" tal cual, y luego el setEr, que es una funcion que actualiza el estado
  // useState regresa el valor inicial del estado, puede ser indefinido, string vacio "", o cualquier otro valor
  
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');

  // la primera es una funcion normal, la segunda es una funcion con destructuring. 
  // Ambas returnan un solo valor (setEmail, setPassword) por lo que pueden ser removidas las llaves {} que las encierran
  
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = ({ target: { value } }) => setPassword(value);
  
  console.log(email);
  console.log(password);

  const handleFormSubmit = (event) => {
    console.log("Submit");
    event.preventDefault();
    // preventDefault previene que el componente actualice la pagina por defecto al hacer click en el boton de tipo "submit"
    alert(`Usuario: ${email}, Password: ${password}`);
  }

  return (
    <div className="App">
      {/* onSubmit es un evento que se va a llamar cuando lo que ocurra dentro de su contenido sea presionado */}
      <form onSubmit={handleFormSubmit}>
        <h2>Iniciar sesión</h2>
        <label>
          Correo
          <input type="email" value={email} onChange={handleEmailChange} /> 
          {/* onChange es el evento de HTML el cual se dispara cuando el usuario esta escribiendo dentro del input */}
        </label>
        <label>
          Contraseña
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        {/* para que el evento onSubmit funcione el botón debe de ser de tipo submit tambien */}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default App;
