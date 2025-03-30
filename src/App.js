import { useEffect, useState } from 'react';
import {StartPage} from './pages/StartPage';
import {CodeInputPage} from './pages/CodeInputPage';
import {HomePage} from './pages/HomePage';
import {CreditCardPage} from './pages/CreditCardPage';
import {Preloader} from './components/Preloader';
import {FixedMenu} from './components/FixedMenu';
import { Route, Routes, useLocation } from 'react-router';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  // Симуляция загрузки при смене маршрута
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="app">
      {isLoading && <Preloader />}
      
      <Routes location={location}>
        <Route path="/" element={<StartPage />} />
        <Route path="/code-input" element={<CodeInputPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/credit-card" element={<CreditCardPage />} />
      </Routes>

      {location.pathname !== '/' && <FixedMenu />}
    </div>
  );
}

export default App;
