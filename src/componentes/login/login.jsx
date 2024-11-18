import { useState } from 'react';

const LoginFormulario = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación simple
    if (!email || !password) {
      setError('Por favor, ingresa todos los campos');
      return;
    }
    
    // Aquí puedes agregar la lógica para autenticar al usuario
    // Por ejemplo, hacer una solicitud HTTP a una API
    
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Iniciar sesión</h3>
              
              {/* Mostrar error si no se llenaron los campos */}
              {error && <div className="alert alert-danger">{error}</div>}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo electrónico</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Introduce tu correo electrónico" 
                    required 
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
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
                
                <button type="submit" className="btn btn-primary w-100">
                  Iniciar sesión
                </button>
              </form>
              
              <div className="mt-3 text-center">
                <small>¿No tienes una cuenta? <a href="/registro">Regístrate</a></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFormulario;
