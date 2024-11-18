import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../home/home.css';

const HomeUsuarios = () => {
  const [user, setUser] = useState(null);  
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user'); 
    navigate('/'); 
  };

  return (
    <div className="container mt-5">

      <h2 className="mb-4">Welcome</h2>
      <button 
        onClick={handleLogout} 
        className="btn btn-danger position-absolute" 
        style={{ top: '20px', right: '20px' }}
      >
        Logout
      </button>
      <div className="areaCard">
        {/* Card de Usuario */}
        <div className="card" style={{ width: '35rem', margin: '0 auto' }}>
          <img
            src={user ? user.image : "https://www.clarin.com/2024/04/25/HKCtyMwSF_2000x1500__1.jpg"}
            className="card-img-top"
            alt="Imagen de usuario"
            style={{ width: '100%', height: '350px', objectFit: 'cover' }}
          />
          <div className="card-body">
            <h5 className="card-title">{user ? user.name : 'Juan Pérez'}</h5>
            <p className="card-text">{user ? user.job : 'Desarrollador Web'}</p>
            <ul className="list-unstyled">
              <li><strong>Correo:</strong> {user ? user.email : 'juanperez@example.com'}</li>
              <li><strong>Teléfono:</strong> {user ? user.phone : '+123 456 7890'}</li>
              <li><strong>Ubicación:</strong> {user ? user.location : 'Ciudad de México'}</li>
            </ul>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default HomeUsuarios;
