import { useState } from 'react';
import {BackButton} from '../components/BackButton';
import {ErrorNotification} from '../components/ErrorNotification';
import { useNavigate } from 'react-router';

export const CodeInputPage = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (code === '3476') {
      navigate('/home');
    } else {
      setError('Неверный код');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="page">
      <BackButton />
      
      <div className="content">
        {/* <img src="/images/CodeInputScreen.png" alt="Code Input" /> */}
        
        <div className="numpad">
          {[1,2,3,4,5,6,7,8,9,0].map(num => (
            <button 
              key={num}
              onClick={() => setCode(prev => prev.length < 4 ? prev + num : prev)}
            >
              {num}
            </button>
          ))}
        </div>
        
        <div className="code-display">{code.padEnd(4, '*')}</div>
        <button onClick={handleSubmit}>Подтвердить</button>
      </div>

      {error && <ErrorNotification message={error} />}
    </div>
  );
};