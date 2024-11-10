import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";
import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';

import Container from "./components/layout/Container";
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  // Estado para controlar o carregamento
  const [isLoading, setIsLoading] = useState(true);

  // useEffect para simular o carregamento
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Tempo de carregamento simulado
  }, []);

  // Condicional para mostrar o Loading ou o conteúdo do site
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
