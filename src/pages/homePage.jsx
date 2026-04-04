import './homePage.css';

export default function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to Home Page</h1>
            <p>You are successfully logged in 🎉</p>

            <button className="logout-btn">Logout</button>
        </div>
    );
}