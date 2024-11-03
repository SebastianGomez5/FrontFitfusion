import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation,Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RoutinesPage from './pages/RoutinesPage';
import StatisticsPage from './pages/StatisticsPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const location = useLocation();
  const hideHeaderAndFooter = location.pathname === '/login';

  return (
    <div className="app-container">{/* Contenedor principal */}
      {!hideHeaderAndFooter && <Header />}
      <div className="main-content">{/* Contenido principal */}
        <Routes>
          {/* Redirección automática de "/" a "/login" */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/rutinas" element={<RoutinesPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/estadisticas" element={<StatisticsPage />} />
          <Route path="/perfil" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      {!hideHeaderAndFooter && <Footer />}
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;