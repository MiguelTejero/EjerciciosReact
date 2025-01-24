
function Animal({ nombre }) {
  return <div style={{ padding: '10px', border: '1px solid black', margin: '5px', borderRadius: '5px' }}>{nombre}</div>;
}

function ListaAnimales2({ animales }) {
  return (
    <div>
      {animales.map((animal, e) => (
        <Animal key={e} nombre={animal} />
      ))}
    </div>
  );
}

function Animales2() {
  const animales = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']; 
  return (
    <>
        <div>
        <h1>Lista de Animales</h1>
        <ListaAnimales2 animales={animales} />
        </div>
        <hr></hr>
    </>
  );
}

export default Animales2;
