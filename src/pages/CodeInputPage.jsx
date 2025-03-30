import { useEffect, useState } from 'react';
import { BackButton } from '../components/BackButton';
import { ErrorNotification } from '../components/ErrorNotification';
import { useNavigate } from 'react-router';

export const CodeInputPage = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (code.length === 4) {
      if (code === '3476') {
        navigate('/home');
      } else {
        setError('Неверный код');
        setTimeout(() => {
          setError('');
          setCode(''); // Очищаем поле при ошибке
        }, 3000);
      }
    }
  }, [code, navigate]);

  const handleNumberPress = (num) => {
    if (code.length < 4) {
      setCode(prev => prev + num);
    }
  };

  // const handleSubmit = () => {
  //   if (code === '3476') {
  //     navigate('/home');
  //   } else {
  //     setError('Неверный код');
  //     setTimeout(() => setError(''), 3000);
  //   }
  // };

  const handleDelete = () => {
    setCode(prev => prev.slice(0, -1));
    setError(''); // Сбрасываем ошибку при удалении
  };

  return (
    <div className="codePage-container">
      <div className="fullscreen-image">
        <img src="images/Code.png" alt="" />
      </div>

      <div className="code-display">
        {Array(4).fill(0).map((_, index) => (
          <div
            key={index}
            className={`code-digit ${code[index] ? 'filled' : ''}`}
          >
            {code[index] ? '✲' : '✲'}
          </div>
        ))}
      </div>

      <div className="numpad">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(num => (
          <button
            key={num}
            onClick={() => handleNumberPress(num)}
            disabled={code.length >= 4}
          >
            {num}
          </button>
        ))}
      </div>
      <button
        className="delete-button"
        onClick={handleDelete}
        disabled={code.length === 0}
      >
        <span className="icon-delete">
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.3316 21.19L32.5216 26L37.3316 30.81C37.9599 31.4383 37.9599 32.4783 37.3316 33.1067C37.0066 33.4317 36.5949 33.5833 36.1833 33.5833C35.7716 33.5833 35.3599 33.4317 35.0349 33.1067L30.2249 28.2967L25.4149 33.1067C25.0899 33.4317 24.6783 33.5833 24.2666 33.5833C23.8549 33.5833 23.4433 33.4317 23.1183 33.1067C22.4899 32.4783 22.4899 31.4383 23.1183 30.81L27.9283 26L23.1183 21.19C22.4899 20.5617 22.4899 19.5217 23.1183 18.8933C23.7466 18.265 24.7866 18.265 25.4149 18.8933L30.2249 23.7033L35.0349 18.8933C35.6633 18.265 36.7033 18.265 37.3316 18.8933C37.9599 19.5217 37.9599 20.5617 37.3316 21.19ZM46.1933 15.1667V36.8333C46.1933 38.9133 44.5033 40.625 42.4016 40.625H16.5533C15.2316 40.625 14.0399 39.9533 13.3466 38.8483L6.21826 27.43C5.6766 26.5633 5.6766 25.4367 6.21826 24.5483L13.3466 13.1517C14.0399 12.0467 15.2533 11.375 16.5533 11.375H42.4233C44.5033 11.375 46.2149 13.0867 46.2149 15.1667H46.1933ZM42.9433 15.1667C42.9433 14.8633 42.7049 14.625 42.4016 14.625H16.5533C16.3582 14.625 16.1849 14.7117 16.0983 14.885L9.14326 26L16.0983 37.115C16.2066 37.2667 16.3799 37.375 16.5533 37.375H42.4233C42.7266 37.375 42.9649 37.1367 42.9649 36.8333V15.1667H42.9433Z" fill="black" />
          </svg>
        </span>
      </button>
      {error && <ErrorNotification message={error} />}
    </div>
  );
};