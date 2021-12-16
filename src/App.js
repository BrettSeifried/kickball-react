import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import HomeDetail from './Views/Home/HomeDetail';
import TeamsDetail from './Views/Teams/TeamsDetail';
import TeamsList from './Views/Teams/TeamsList';

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomeDetail />
          </Route>
          <Route path="/teams">
            <TeamsList />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
