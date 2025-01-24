import './ejercicios.css'
import { useState } from 'react';


export default function Contador() {
    const [veces, setCount] = useState(0);
  
    function pulsadas() {
      setCount(veces + 1);
    
    }
    return (
        <div>
            <hr></hr>
            <p>Me has pulsado {veces} </p>
            <button onClick={pulsadas}>
                Pulsame
            </button>
            <hr></hr>
        </div>
      
    );
  }
