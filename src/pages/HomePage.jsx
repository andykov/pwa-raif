import { Link } from "react-router";
import { useEffect, useState } from 'react';
import { ErrorNotification } from "../components/ErrorNotification";

export const HomePage = () => {
  const [error, setError] = useState('');

  useEffect(() => {
    setError('Наблюдаются проблемы в работе некоторых сервисов');

    setTimeout(() => {
      setError('');
    }, 3000);
  }, []);

  return (
    <div className="homePage-container">
      
      <div className="fullscreen-image">
        <img src="images/Home.png" alt="" />
      </div>
      <div className="carousel">
        <img src="images/Carousel.png" alt="" />
      </div>
      <Link to="/credit-card" className="linkToCreditCard"></Link>;
      <Link to="/credit-potreb" className="linkToCreditPotreb"></Link>;
      <Link to="/profile" className="linkToProfile"></Link>;
      {error && <ErrorNotification message={error} />}
    </div>
  )
};