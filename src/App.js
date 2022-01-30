import { Link } from 'react-router-dom';
import Router from './components/Router';
import smoothscroll from 'smoothscroll-polyfill';
import "./normalize.css";
import "./style.css";

function App() {
  smoothscroll.polyfill();
  console.log('process.env.PUBLIC_URL', process.env.PUBLIC_URL);
  return (
    <Router></Router>
  );
}

export default App;
