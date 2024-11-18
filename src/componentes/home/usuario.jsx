import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Usuarios = () => {
  const [user, setUser] = useState(null);  // Inicializamos el estado de usuario como null
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));  // Si hay un usuario, lo parseamos y lo guardamos en el estado
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user'); 
    navigate('/home'); // Redirige a la página de inicio después de cerrar sesión
  };

  return (
    <div className="container mt-5">
      {/* Texto "Welcome" en la parte superior izquierda */}
      <h2 className="mb-4">Welcome</h2>

      {/* Botón de Logout en la parte superior derecha */}
      <button 
        onClick={handleLogout} 
        className="btn btn-danger position-absolute" 
        style={{ top: '20px', right: '20px' }}
      >
        Logout
      </button>

      {/* Card de Usuario */}
      <div className="card" style={{ width: '80%', margin: '0 auto' }}>
        <div className="row g-0">
          {/* Columna de Imagen */}
          <div className="col-md-4">
            <img
              src={user ? user.image : "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}  // Si no hay un usuario, usamos una imagen predeterminada
              className="card-img"
              alt="Imagen de usuario"
              style={{ height: '100%', objectFit: 'cover' }} // Ajusta la imagen para que cubra el espacio de la columna
            />
          </div>

          {/* Columna de Datos del Usuario */}
          <div className="col-md-8">
            <div className="card-body">
              {/* Nombre de Usuario */}
              <h5 className="card-title">{user ? user.name : 'Juan Pérez'}</h5>
              {/* Descripción o cargo */}
              <p className="card-text">{user ? user.job : 'Desarrollador Web'}</p>
              {/* Datos del usuario */}
              <ul className="list-unstyled">
                <li><strong>Correo:</strong> {user ? user.email : 'juanperez@example.com'}</li>
                <li><strong>Teléfono:</strong> {user ? user.phone : '+123 456 7890'}</li>
                <li><strong>Ubicación:</strong> {user ? user.location : 'Ciudad de México'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Modal (centrado horizontalmente) */}
      <div className="modal fade" id="userModal" tabIndex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="userModalLabel">Detalles de Usuario</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Aquí puedes agregar más detalles del usuario si lo necesitas */}
              <p>{user ? user.name : 'Juan Pérez'}</p>
              <p>{user ? user.email : 'juanperez@example.com'}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Usuarios;
