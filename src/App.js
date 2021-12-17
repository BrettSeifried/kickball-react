import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import HomeDetail from './Views/Home/HomeDetail';
import TeamsDetail from './Views/Teams/TeamsDetail';
import TeamsList from './Views/Teams/TeamsList';
import PlayerList from './Views/Players/PlayerList';
import PlayersDetail from './Views/Players/PlayerDetail';

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <header>
          <NavLink to="/">Home</NavLink>
        </header>
        <header>
          <NavLink to="/teams">Teams</NavLink>
        </header>
        <header>
          <NavLink to="/players">Players</NavLink>
        </header>
        <Switch>
          <Route exact path="/">
            <HomeDetail />
          </Route>
          <Route path="/teams/:id">
            <TeamsDetail />
          </Route>
          <Route exact path="/teams">
            <TeamsList />
          </Route>
          <Route path="/players/:id">
            <PlayersDetail />
          </Route>
          <Route exact path="/players">
            <PlayerList />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
