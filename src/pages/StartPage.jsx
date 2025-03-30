import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const StartPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const delay = 3000 + Math.random() * 5000;
    const timer = setTimeout(() => navigate('/code-input'), delay);
    return () => clearTimeout(timer);
  }, [navigate]); // Добавили navigate в зависимости

  return (
    <div className="fullscreen-image">
      <img src="images/Start.png" alt="Start Screen" />
    </div>
  );
};