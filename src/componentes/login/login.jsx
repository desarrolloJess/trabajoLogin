// LoginFormulario.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Solo necesitas importar 'toast'
import ServiceLogin from '../../servicios/ServiceLogin';

const LoginFormulario = () => {
  const [username, setUsername] = useState('ethanm');
  const [password, setPassword] = useState('ethanmpass');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;
    if (!username || !password) {
      setError('Por favor, ingresa todos los campos');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const user = { username, password };
      const response = await ServiceLogin.login(user);
      localStorage.setItem('user', JSON.stringify(response));
      
      toast.success('Inicio de sesión exitoso', { autoClose: 3000 });

      navigate('/usuarios');

    } catch (error) {
      const errorMessage =
        error.status === 401
          ? 'Credenciales incorrectas'
          : 'Ocurrió un error al iniciar sesión';
      setError(errorMessage);

      toast.error(error.data?.message || 'Error al iniciar sesión', { autoClose: 3000 });
      console.error('Error al iniciar sesión:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Iniciar sesión</h3>

              {error && <div className="alert alert-danger">{error}</div>}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Usuario
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Introduce tu usuario"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Introduce tu contraseña"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={loading}
                >
                  {loading ? 'Cargando...' : 'Iniciar sesión'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFormulario;
