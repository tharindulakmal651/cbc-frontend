import './homePage.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to Home Page</h1>
            <p>You are successfully logged in 🎉</p>

            <button onClick={()=>alert ('Button Clicked')}>Get Start</button>
            <Link to="/login">Go to Login</Link>
        </div>
    );
}