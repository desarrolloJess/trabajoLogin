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
    navigate('/logout'); 
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
            className="rounded-circle" 
            alt="Imagen de usuario"
            style={{ width: '200px', height: '200px', objectFit: 'cover', marginLeft : '30%'}}
          />

          <div className="card-body">
            <h5 className="card-title" style={{ textTransform: 'uppercase' }}>
              {user ? user.firstName +" "+ user.lastName: 'Juan Pérez'}
            </h5>
            <p className="card-text">{user ? user.job : 'Desarrollador Web'}</p>
            <ul className="list-unstyled">
              <li><strong>Género: </strong> {user ? user.gender : ''}</li>
            </ul>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default HomeUsuarios;
