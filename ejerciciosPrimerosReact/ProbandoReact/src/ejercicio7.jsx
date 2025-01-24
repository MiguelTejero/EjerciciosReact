import { useState } from 'react';


function Formulario() {

    const [nombre, establecerNombre] = useState('');
    const [apellido, establecerApellido] = useState('');
  

    const saludo = () => {
      alert("¡Hola," + {firstName: nombre} + {lastName: apellido});
    }
  

    return (
      <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
        <h1>Formulario de saludo</h1>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="nombre" style={{ display: 'block', marginBottom: '5px' }}>
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => establecerNombre(e.target.value)}
            style={{ padding: '5px', width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="apellido" style={{ display: 'block', marginBottom: '5px' }}>
            Apellido:
          </label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => establecerApellido(e.target.value)} 
            style={{ padding: '5px', width: '100%' }}
          />
        </div>

        <button
          onClick={saludo}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Salúdame
        </button>
      </div>
    );
  }
  
  export default Formulario;