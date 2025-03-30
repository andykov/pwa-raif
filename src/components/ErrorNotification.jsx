import { useEffect } from 'react';
import '../styles/animations.css';

export const ErrorNotification = ({ message }) => {
  useEffect(() => {
    const handleTouchMove = (e) => e.preventDefault();
    const notification = document.querySelector('.error-notification');
    
    // Блокируем скролл при касании уведомления
    notification?.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    return () => {
      notification?.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const handleTouchStart = (e) => {
    document.body.classList.add('error-active');
    const touch = e.touches[0];
    e.startY = touch.clientY;
  };

  const handleTouchMove = (e) => {
    document.body.classList.remove('error-active');
    const touch = e.changedTouches[0];
    const deltaY = touch.clientY - e.startY;
    
    // Закрываем только при свайпе вверх
    if (deltaY < -20) {
      e.target.classList.add('hide');
      e.preventDefault(); // Блокируем скролл
      e.stopPropagation();
    }
  };

  return (
    <div 
      className="error-notification slide-in"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={(e) => e.preventDefault()}
    >
      {message}
    </div>
  );
}