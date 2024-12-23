import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './componentes/ProtectedRoute/ProtectedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginFormulario from './componentes/login/login';
import HomeUsuarios from './componentes/home/home';
import { ToastContainer } from 'react-toastify'; // Importa ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Asegúrate de importar los estilos de toast

function App() {
  return (
    <Router>
      {/* El ToastContainer se coloca aquí para que persista a través de las rutas */}
      <ToastContainer position="top-center" autoClose={3000} />

      <Routes>
        <Route path="/" element={<LoginFormulario />} />
        <Route path="usuarios" element={
          <ProtectedRoute>
            <HomeUsuarios />
          </ProtectedRoute>
        } /> 
      </Routes>
    </Router>
  );
}

export default App;
