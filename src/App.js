import { useEffect, useState } from 'react';
import { StartPage } from './pages/StartPage';
import { CodeInputPage } from './pages/CodeInputPage';
import { HomePage } from './pages/HomePage';
import { CreditCardPage } from './pages/CreditCardPage';
import { Preloader } from './components/Preloader';
import { FixedMenu } from './components/FixedMenu';
import { Routes, Route, useLocation } from 'react-router';

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  // Симуляция загрузки при смене маршрута
  useEffect(() => {
    setIsLoading(true);
    // Генерируем случайное время от 1 до 6 секунд в миллисекундах
    const min = 1000;
    const max = 6000;
    const delay = Math.floor(Math.random() * (max - min + 1)) + min;
    const timer = setTimeout(() => setIsLoading(false), delay);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="app">
      {isLoading && <Preloader />}

      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/code-input" element={<CodeInputPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/credit-card" element={<CreditCardPage />} />
      </Routes>

      {location.pathname !== '/'
        || location.pathname !== '/code-input' && <FixedMenu />}
    </div>
  );
}
// export default function WrappedApp() {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// }
export default App;
