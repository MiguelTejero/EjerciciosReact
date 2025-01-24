function Click3veces() {
    const pulsado1 = () => {
      alert('Has hecho click en el boton 1');
    };
    const pulsado2 = () => {
        alert('Has hecho click en el boton 2');
      };
    const pulsado3 = () => {
        alert('Has hecho click en el boton 3');
    };
    return (
        <div class="clickeos">
            <div>
                <button onClick={pulsado1}>
                    Botón 1
                </button>
                </div>
            <div>
                <button onClick={pulsado2}>
                    Botón 2
                </button>
            </div>
            <div>
                <button onClick={pulsado3}>
                    Botón 3
                </button>
            </div>            
        </div>
    );
  }
  
  export default Click3veces