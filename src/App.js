import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  console.log('process.env.PUBLIC_URL', process.env.PUBLIC_URL);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/about" element={<About />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
  <>
    <h2>Home</h2>
    <Link to={"/about"}>about</Link>
  </>
  );
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

export default App;
