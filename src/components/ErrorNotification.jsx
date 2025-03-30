import { useEffect } from 'react';
import '../styles/animations.css';

export const ErrorNotification = ({ message }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector('.error-notification')?.classList.add('hide');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="error-notification slide-in"
      onTouchMove={(e) => {
        if (e.touches[0].clientY < 50) {
          e.target.classList.add('hide');
        }
      }}
    >
      {message}
    </div>
  );
}