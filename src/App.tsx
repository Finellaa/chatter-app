// src/App.tsx
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { initializeApp } from 'firebase/app';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import Navigation from './pages/Navbar';
import { config } from './firebase'
import { AuthRoute } from './components/authRoutes';
import Register from './pages/Register'
initializeApp(config.firebaseConfig);


const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  useEffect(() => {
    const authState = localStorage.getItem('isAuth');
    if (authState === 'true') {
      setIsAuth(true);
    }
  }, []);
  
  return (
    <Router>
      <Routes>
      <Route path="/" element={<AuthRoute><Home /></AuthRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="nav" element={<Navigation isAuth={false} />} />
      <Route path="create" element={<CreatePost isAuth={false}/>} />
      </Routes>
    </Router>
);
};

export default App;
