import './ejercicios.css'

function Click() {
    const pulsado = () => {
      alert('Has hecho click');
    };
  
    return (
      <>
      <div class="click">
        <button onClick={pulsado}>
          Haz clic aquí
        </button>
      </div>
      <hr></hr>
      </>
    );
  }
  
  export default Click
