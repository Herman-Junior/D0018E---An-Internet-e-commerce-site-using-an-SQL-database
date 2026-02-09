import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <img src="/homepage.jpg" alt="Homepage" />
      <h1>Welcome to Meet4Meat</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default HomePage;