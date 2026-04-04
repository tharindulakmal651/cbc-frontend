import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import Home from './pages/homePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;