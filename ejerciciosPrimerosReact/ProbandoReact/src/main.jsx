import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Square from './ejercicio1.jsx'
import Click from './ejercicio2.jsx'
import Click3veces from './ejercicio3.jsx'
import Contador from './ejercicio4.jsx'
import Animales from './ejercicio5.jsx'
import Animales2 from './ejercicio6.jsx'
import Formulario from './ejercicio7.jsx'
import Chistes from './ejercicio8.jsx'
import Interfaz from './ejercicio9.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Square />
    <Click/>
    <Click3veces/>
    <Contador/>
    <Animales/>
    <Animales2/>
    <Formulario/>
    <Chistes/>
    <Interfaz/>
  </StrictMode>,
)
