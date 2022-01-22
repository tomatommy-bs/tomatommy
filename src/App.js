import { Link } from 'react-router-dom';
import Router from './components/Router';

function App() {
  console.log('process.env.PUBLIC_URL', process.env.PUBLIC_URL);
  return (
    <Router></Router>
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
