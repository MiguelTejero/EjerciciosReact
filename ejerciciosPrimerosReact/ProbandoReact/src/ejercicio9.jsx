import { useState, useEffect } from 'react';

function TarjetaUsuario({ usuario }) {
        return (
          <div
            className="tarjeta"
            style={{
              perspective: '1000px',
              width: '250px',
              height: '300px',
              margin: '10px',
            }}
          >
            <div
              className="tarjeta-interior"
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.6s',
              }}
            >
              {/* Cara frontal */}
              <div
                className="tarjeta-frontal"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  backgroundColor: '#007BFF',
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '10px',
                  padding: '20px',
                  textAlign: 'center',
                }}
              >
                <img
                  src={usuario.avatar}
                  alt="Avatar"
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    marginBottom: '15px',
                  }}
                />
                <h3>{usuario.first_name} {usuario.last_name}</h3>
                <p>{usuario.username}</p>
              </div>
      
              {/* Cara trasera */}
              <div
                className="tarjeta-trasera"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  backgroundColor: '#f8f9fa',
                  color: '#333',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '10px',
                  padding: '20px',
                  textAlign: 'center',
                  transform: 'rotateY(180deg)',
                }}
              >
                <h4>Contacto</h4>
                <p>Email: {usuario.email}</p>
                <p>Teléfono: {usuario.phone_number}</p>
                <p>Dirección: {usuario.address.city}</p>
              </div>
            </div>
          </div>
        );
      }
      
      // Componente principal
      function Interfaz() {
        const [usuarios, setUsuarios] = useState([]);
        const [cargando, setCargando] = useState(false);
      
        // Función para obtener usuarios desde la API
        const obtenerUsuarios = async () => {
          setCargando(true);
          try {
            const respuesta = await fetch('https://random-data-api.com/api/users/random_user?size=10');
            const datos = await respuesta.json();
            setUsuarios(datos);
          } catch (error) {
            console.error('Error al obtener los usuarios:', error);
          }
          setCargando(false);
        };
      
        // Obtener usuarios al cargar el componente
        useEffect(() => {
          obtenerUsuarios();
        }, []);
      
        return (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Usuarios Aleatorios</h1>
            <button
              onClick={obtenerUsuarios}
              style={{
                margin: '20px 0',
                padding: '10px 20px',
                backgroundColor: '#007BFF',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              {cargando ? 'Cargando...' : 'Obtener Nuevos Usuarios'}
            </button>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              {usuarios.map((usuario) => (
                <div
                  key={usuario.id}
                  className="contenedor-tarjeta"
                  style={{
                    cursor: 'pointer',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.6s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.querySelector('.tarjeta-interior').style.transform = 'rotateY(180deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.querySelector('.tarjeta-interior').style.transform = 'rotateY(0deg)';
                  }}
                >
                  <TarjetaUsuario usuario={usuario} />
                </div>
              ))}
            </div>
          </div>
        );
      }
      
export default Interfaz;