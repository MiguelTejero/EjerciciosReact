function Broma({ Pregunta, Respuesta }) {
    return (
      <div style={{ 
        border: '1px solid #ccc', 
        padding: '15px', 
        margin: '10px 0', 
        borderRadius: '8px', 
        backgroundColor: '#f9f9f9' 
      }}>
        <h3 style={{ marginBottom: '10px' }}>{Pregunta}</h3>
        <p style={{ fontStyle: 'italic', color: '#555' }}>{Respuesta}</p>
      </div>
    );
  }
  
  function Chistes() {
    const bromas = [
      {
        id: 1,
        Pregunta: "What's the best thing about a Boolean?",
        Respuesta: "Even if you're wrong, you're only off by a bit"
      },
      {
        id: 2,
        Pregunta: "Why do programmers wear glasses?",
        Respuesta: "Because they need to C#"
      }
    ];
  
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        {bromas.map((broma) => (
          <Broma key={broma.id} Pregunta={broma.Pregunta} Respuesta={broma.Respuesta} />
        ))}
      </div>
    );
  }
  
  export default Chistes;