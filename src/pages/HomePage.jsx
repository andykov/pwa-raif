import { Link } from "react-router";

export const HomePage = () => (
  <div className="homePage-container">
    <div className="fullscreen-image">
      <img src="pwa-raif/images/Home.png" alt="" />
    </div>
    <Link to="/credit-card" className="linkToCreditCard">Dashboard</Link>;
  </div>
);