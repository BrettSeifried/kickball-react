import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <Switch></Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
