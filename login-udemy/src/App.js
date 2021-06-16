// import React, { useReducer, useState, Component } from 'react';
import { render } from '@testing-library/react';
// import React, { useState, useEffect } from 'react';
import React, { useEffect, useState } from 'react';

const jsonData = [{
  key: '1',
  name: 'Carmine',
}, {
  key: '2',
  name: 'Augusto',
}, {
  key: '3',
  name: 'Simon',
}, {
  key: '4',
  name: 'Edgardo',
}];

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);


  const renderData = () => {
    /* el signo ? sirve para validar e indica que si no existe la funcion, la ignora */
    return jsonData?.map((value, index) => (
        <div key={value.key}>
          <p>{value.name}</p>
        </div>
    ));
  };

  return (
    <div>
      {isLoading ? <h2>Is Loading...</h2> : renderData()}
    </div>
  );
}

// const App = () => {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState(0);

//   // componentDidUpdate, si está vacio el callback, se llamará cada vez con cada cambio
//   useEffect(() => {
//     console.log('diUpdate efect');
//   });
  
//   // componentDidMount (array vacio), sucede cuando el component se renderiza por primera vez
//   useEffect(() => {
//     console.log('didMount effect');

//     return () => {
//       console.log('WillUnMount');
//     }
//   }, []);

//   // si se le asignan propiedades o valores, se llamará cuando alguno de ellos cambie
//   useEffect(() => {
//     console.log('name cambió');
//   }, [name]);

//   useEffect(() => {
//     console.log('age cambió');
//   }, [age]);

//   useEffect(() => {
//     console.log('name o age cambiaron');
//   }, [name, age]);

//   return (
//     <div>
//       <input value={name} onChange={( { target: { value } }) => setName(value)} />
//       <input age={age} onChange={( {target: {value } }) => setAge(value)} />
//     </div>
//   ) 
// }

// componente funcional
// function App() {
//   // para declarar una const de estado se utiliza el destructuring de un arreglo: 
//   // primero el "Valor" tal cual, y luego el setEr, que es una funcion que actualiza el estado
//   // useState regresa el valor inicial del estado, puede ser indefinido, string vacio "", o cualquier otro valor
  
//   const [email, setEmail] = useState(''); 
//   const [password, setPassword] = useState('');

//   // la primera es una funcion normal, la segunda es una funcion con destructuring. 
//   // Ambas returnan un solo valor (setEmail, setPassword) por lo que pueden ser removidas las llaves {} que las encierran
  
//   const handleEmailChange = (event) => setEmail(event.target.value);
//   const handlePasswordChange = ({ target: { value } }) => setPassword(value);

//   console.log(email);
//   console.log(password);

//   const handleFormSubmit = (event) => {
//     console.log("Submit");
//     event.preventDefault();
//     // preventDefault previene que el componente actualice la pagina por defecto al hacer click en el boton de tipo "submit"
//     alert(`Usuario: ${email}, Password: ${password}`);
//   }

//   return (
//     <div className="App">
//       {/* onSubmit es un evento que se va a llamar cuando lo que ocurra dentro de su contenido sea presionado */}
//       <form onSubmit={handleFormSubmit}>
//         <h2>Iniciar sesión</h2>
//         <label>
//           Correo
//           <input type="email" value={email} onChange={handleEmailChange} /> 
//           {/* onChange es el evento de HTML el cual se dispara cuando el usuario esta escribiendo dentro del input */}
//         </label>
//         <label>
//           Contraseña
//           <input type="password" value={password} onChange={handlePasswordChange} />
//         </label>
//         {/* para que el evento onSubmit funcione el botón debe de ser de tipo submit tambien */}
//         <button type="submit">Entrar</button>
//       </form>
//     </div>
//   );
// }

// componente class
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: ''
//     }
//   }

//   handleEmailChange = (event) => {
//     const { value } = event.target;
//     this.setState({ email: value });
//   }

//   handlePasswordChange = (event) => {
//     const { value } = event.target;
//     this.setState({ password: value});
//   }

//   render() {
//     const { email } = this.state;
//     const { password } = this.state;
  
//     const handleFormSubmit = (event) => {
//       event.preventDefault();
//       alert(`Usuario ${email} \n Contraseña ${password}`);
//     }
    
//     return <div className="App">
//       <form onSubmit={handleFormSubmit}>
//         <h2>Iniciar Sersion</h2>
//         <label>
//           Correo
//           <input type='email' value={ email } onChange={ this.handleEmailChange } />
//         </label>
//         <label>
//           Contraseña
//           <input type='password' value= { password } onChange={ this.handlePasswordChange } />
//         </label>
//       </form>
//     </div>
//   }
  
// }



export default App;
