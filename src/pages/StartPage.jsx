import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const StartPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const delay = 3000 + Math.random() * 5000; // 3-8 секунд
    const timer = setTimeout(() => navigate('/code-input'), delay);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [navigate]);

  return (
    <div className="fullscreen-image">
      <img src="pwa-raif/images/Start.png" alt="Start Screen" />
    </div>
  );
};