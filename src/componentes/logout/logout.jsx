import { useNavigate } from "react-router-dom"

const Logout = () => {

    const navigate = useNavigate();

    const iniciarSesion = () => {

        navigate('/');
    }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
                <h3 className="card-title text-center text-primary mb-4">La sesión ha sido cerrada</h3>
                <button 
                    className="btn btn-primary" 
                    onClick={iniciarSesion}
                    style={{width:'100%'}}    
                >Iniciar Sesion</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logout