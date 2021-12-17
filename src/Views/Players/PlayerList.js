import { useEffect, useState } from 'react';
// import Player from '../../components/PlayerFunction/Team';
// import { getPlayers } from '../../services/playerRoute';
import { Link } from 'react-router-dom';
import { fetchPlayers } from '../../services/playerRoute';

export default function PlayerList() {
  const [players, setPlayers] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayers();
      console.log(data);
      setPlayers(data);
    };
    fetchData();
  }, []);

  // if (loading) return <h1>Get your popcorn ready...</h1>;

  return (
    // <p>test</p>
    <ul className="player-list">
      {players.map((player) => (
        <li key="id">
          <Link key={player.id} to={`/players/${player.id}`}>
            {player.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
