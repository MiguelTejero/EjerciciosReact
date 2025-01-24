import './ejercicios.css'

function Animales() {
    const animales = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']; 

  return (
    <div>
      <h1>Lista de animales</h1>
      <ul>
        {animales.map((animal, e) => (
          <li key={e}>{animal}</li>
        ))}
      </ul>
      <hr></hr>
    </div>
  );
}

export default Animales