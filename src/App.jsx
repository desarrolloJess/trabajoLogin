import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './componentes/ProtectedRoute/ProtectedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginFormulario from './componentes/login/login';
import HomeUsuarios from './componentes/home/home';
import Usuarios from './componentes/home/usuario';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <LoginFormulario/> } />
        <Route path="/user" element={ <HomeUsuarios/> } />
        <Route path="/userr" element={ <Usuarios/> } />
        <Route path="usuarios" element={
          <ProtectedRoute>
            <HomeUsuarios />
          </ProtectedRoute>
        } /> 

      </Routes>
    </Router>
  )
}

export default App
